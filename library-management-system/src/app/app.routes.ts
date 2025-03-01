import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';
import { UpdateBookComponent } from './pages/update-book/update-book.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [

    // default route 
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },

    {
        path: 'app-login',
        component: LoginComponent
    },

    {
        path : 'app-register',
        component: RegisterComponent
    },

    {
        path: 'app-home',
        component: HomeComponent
    },

    {
        path: 'app-add-books',
        component: AddBookComponent
    },

    {
        path: 'app-book-list',
        component: BookListComponent
    },

    {
        path: 'app-book-details/:id',
        component: BookDetailsComponent
    },

    {
        path : 'app-update-book',
        component: UpdateBookComponent
    }
];
