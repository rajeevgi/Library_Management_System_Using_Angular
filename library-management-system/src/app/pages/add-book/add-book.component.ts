import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  imports: [FormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {

  title: string = '';
  author: string = '';
  description: string = '';

  addBook() {
    console.log("Title:", this.title);
    console.log("Author:", this.author);
    console.log("Description:", this.description);
    // Implement book addition logic here (API call)
  }
}
