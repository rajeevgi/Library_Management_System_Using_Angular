import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
  
  bookList : any [] = [];

  constructor(private bookService : BookService, private router : Router){}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(( res : any) => {
      this.bookList = res;
    });
  }

  deleteBook(_id : string) {
    if (confirm('Are you sure you want to delete this book?')) {
      this.bookService.deleteBook(_id).subscribe(() => {
        this.bookList = this.bookList.filter(book => book._id !== _id); 
        this.router.navigate(['/app-book-list']);
        alert('Book Deleted Successfully...');

      });
    }
  }
  
  updateBook(id : string){
   this.router.navigate(['/app-update-book', id]); 
  }
  
}
