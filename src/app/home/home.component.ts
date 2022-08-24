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

  getRandomColorClass():string {
    let color = "";
    switch (Math.floor((Math.random() * (6 - 0 + 6)) + 0)) {
      case 0:
        color = "green-color";
        break;
      case 1:
        color = "blue-color";
        break;
      case 2:
        color = "purple-color";
        break;
      case 3:
        color = "pink-color";
        break;
      case 4:
        color = "red-color";
        break;
      case 5:
        color = "dark-blue-color";
        break;
      case 6:
        color = "";
        break;
      default:
        color = "";
        break;
    }
    return color;
  }

}
