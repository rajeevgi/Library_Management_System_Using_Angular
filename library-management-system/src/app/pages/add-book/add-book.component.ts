import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';
import { Book } from '../../book';

@Component({
  selector: 'app-add-book',
  imports: [FormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css',
})
export class AddBookComponent {
  book: Book = new Book();
  constructor(private bookService: BookService, private router: Router) {}

  addBook() {
    this.bookService.addBooks(this.book).subscribe((res: any) => {
      this.book = res;
      this.router.navigate(['/app-book-list']);
      alert('Book Added Successfully...');
    });
  }
}
