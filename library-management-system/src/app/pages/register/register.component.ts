import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  username: string = '';
  password: string = '';
  email: string = '';
  fullName: string = '';

  register() {
    console.log("Username:", this.username);
    console.log("Password:", this.password);
    console.log("Email:", this.email);
    console.log("Full Name:", this.fullName);
    // Implement registration logic here
  }
}
