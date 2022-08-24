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
  numberLoops: number = 0;

  constructor(private bookService: ProgrammingBooksService) { }

  ngOnInit(): void {
    this.bookService.getBookshelf().subscribe({
      next: (res) => {
        res = res.filter(e => !(e.name === 'CONTRIBUTING.md') && !(e.name === 'README.md'));
        res.forEach(element => {
          element.color = this.getRandomColorClass();
        });
        this.books = res;
        console.log(res);
      }
    })
  }

  selectBook(urlBook: string) {
    console.log(urlBook);
  }

  getRandomColorClass(): string {
    let color = "";
    let numRand = Math.floor((Math.random() * (6 + 1 - 0)) + 0);
    switch (numRand) {
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
        console.log(numRand);

        break;
    }
    return color;
  }

}
