import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-book',
  imports: [FormsModule,CommonModule],
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.css'
})
export class UpdateBookComponent implements OnInit{
  
  book : Book = new Book();
  id : string='';

  constructor(private bookService : BookService, private route : ActivatedRoute, private router : Router) {};
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.bookService.getBookDetails(this.id).subscribe(( res : Book ) => {
      this.book = res;
    });
  }

  onUpdate(){
    this.bookService.updateBook(this.id, this.book).subscribe(( res : any ) => {
      console.log(res)
      this.router.navigate(['/app-book-list']);
      alert("Book Updated Successfully...");
    });
  }
}
