import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiUrl = 'http://localhost:5000/api';

  constructor(private http : HttpClient) { }

  getBooks() : Observable<any> {
    return this.http.get(`${this.apiUrl}/listAllBooks`);
  }

  getBookDetails(id : number) : Observable<any> {
    return this.http.get(`${this.apiUrl}/getBookById/${id}`);
  }

  addBooks(books : any) : Observable<any> {
    return this.http.post(`${this.apiUrl}`, books);
  }
  
  updateBook(id : number, book : any) : Observable<any> {
    return this.http.put(`${this.apiUrl}/updateBookById/${id}`,book);
  }

  deleteBook(id : number) : Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleteBook/${id}`);
  }
}
