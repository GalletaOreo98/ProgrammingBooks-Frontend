import { Component, OnInit } from '@angular/core';
import { IBook } from '../models';
import { ProgrammingBooksService } from '../services/programming-books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books!: IBook[];
  

  constructor( private bookService:ProgrammingBooksService) { }

  ngOnInit(): void {
    console.log("HOME");
    
    this.bookService.getBookshelf().subscribe({
      next: (res) => {
        res = res.filter(e => !(e.name === 'CONTRIBUTING.md') && !(e.name === 'README.md'));
        this.books = res;
        console.log(res);
      }
    })  
  }

  selectBook(urlBook:string){
    console.log(urlBook);
  }

}
