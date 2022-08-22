import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBook } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProgrammingBooksService {

  constructor(private httpClient:HttpClient) { }

  getBookshelf() {
    return this.httpClient.get<IBook[]>(`https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/contents`);
  }

  getBook(bookName:string) {
    return this.httpClient.get(`https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/contents${bookName}?ref=master`);
  }

}
