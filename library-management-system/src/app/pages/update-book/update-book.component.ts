import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-book',
  imports: [FormsModule],
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.css'
})
export class UpdateBookComponent {
  book = {
    bookId: '',
    title: '',
    author: '',
    description: ''
  };

  updateBook() {
    console.log('Updated Book:', this.book);
    alert('Book updated successfully!');
  }
}
