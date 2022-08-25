import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IWaifuImage } from 'src/app/models/book-interface';
import { ProgrammingBooksService } from 'src/app/services/programming-books.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  bookName: string = "";
  arrayImages!: IWaifuImage[];
  constructor(private router:Router, private bookService:ProgrammingBooksService) { }

  ngOnInit(): void {
    this.bookName = this.router.url;
    this.bookName = this.bookName.slice(8);
    this.bookService.getBook(this.bookName).subscribe({
      next: (res) => {
        this.arrayImages = res;
        
      }
    });
  }

}
