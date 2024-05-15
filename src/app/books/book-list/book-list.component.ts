import { Component, OnInit, inject } from '@angular/core';
import { BookService } from '../book.service';
import { BookPreviewComponent } from '../book-preview/book-preview.component';
import { IBook } from '../../models/books';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [BookPreviewComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent implements OnInit {
  router = inject(Router);
  route = inject(ActivatedRoute);
  service = inject(BookService);
  books: IBook[] = [];

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    this.service.getAll().subscribe((data) => (this.books = data));
  }

  // selectBook(e: IBook) {
  //   console.log(e);
  // }

  selectBook(book: IBook) {
    this.router.navigate([book.isbn], { relativeTo: this.route });
  }
}
