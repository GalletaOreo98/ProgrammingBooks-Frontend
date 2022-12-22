import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IWaifuImage } from 'src/app/models/book-interface';
import { ProgrammingBooksService } from 'src/app/services/programming-books.service';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header container">
      <h4 class="modal-title">{{name}}</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body container">
    <img [src]="download_url" class="col-12">
    </div>
    <div class="modal-footer">
      <button class="btn btn-outline-success" (click)="download(download_url)">Download</button>
      <button type="button" class="btn btn-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `,
  styleUrls: ['./modal.component.css']
})

export class NgbdModalContent {
  
  @Input() name: string = "";
  @Input() download_url: string = "";


  constructor(public activeModal: NgbActiveModal) {}

  download(url: string){
    window.open(url);
  }
}

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  bookName: string = "";
  arrayImages!: IWaifuImage[];
  constructor(private route: ActivatedRoute,
     private bookService:ProgrammingBooksService, 
     private modalService: NgbModal) 
    {
      this.bookName = this.route.snapshot.paramMap.get('bookname') || "error";
    }

  ngOnInit(): void {
    this.bookService.getBook(this.bookName).subscribe({
      next: (res) => {
        this.arrayImages = res;
      }
    });
  }

  open(name: string, download_url: string) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = name;
    modalRef.componentInstance.download_url = download_url;
  }
}
