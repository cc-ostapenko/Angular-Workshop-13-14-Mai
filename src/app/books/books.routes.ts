import { Routes } from "@angular/router";
import { BooksComponent } from "./books.component";
import { BookListComponent } from "./book-list/book-list.component";
import { BookDetailsComponent } from "./book-details/book-details.component";

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    children: [
      {
        path: '',
        component: BookListComponent,
      },
      {
        path: ':isbn',
        component: BookDetailsComponent,
      },
    ],
  },
];
export default routes;