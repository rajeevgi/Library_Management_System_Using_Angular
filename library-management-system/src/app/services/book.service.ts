import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiUrl = 'http://localhost:5000/api/books';

  constructor(private http : HttpClient) { }

  getBooks() : Observable<any> {
    return this.http.get(`${this.apiUrl}/listAllBooks`);
  }

  getBookDetails(id : string) : Observable<any> {
    return this.http.get(`${this.apiUrl}/getBookById/${id}`);
  }

  addBooks(books : any) : Observable<any> {
    return this.http.post(`${this.apiUrl}/addBook`, books);
  }
  
  updateBook(id : string, book : any) : Observable<any> {
    return this.http.put(`${this.apiUrl}/updateBookById/${id}`,book);
  }

  deleteBook(id : string) : Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleteBookById/${id}`);
  }
}
