import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBook } from '../models';
import { IWaifuImage } from '../models/book-interface';

@Injectable({
  providedIn: 'root'
})
export class ProgrammingBooksService {

  constructor(private httpClient:HttpClient) { }

  getBookshelf() {
    return this.httpClient.get<IBook[]>(`https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/contents`);
  }

  getBook(bookName:string) {
    const encodedBookName = encodeURIComponent(bookName);
    return this.httpClient.get<IWaifuImage[]>(`https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/contents/${encodedBookName}?ref=master`);  }
}
