import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { IBook } from '../../models/books';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { PagesPipe } from '../pages.pipe';
import { OrderBtnDirective } from './order-btn.directive';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [JsonPipe, AsyncPipe, PagesPipe, OrderBtnDirective],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
})
export class BookDetailsComponent implements OnInit {
  route = inject(ActivatedRoute);
  bookService = inject(BookService);

  book!: IBook;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.bookService.getOne(params['isbn']).subscribe((b) => {
        this.book = b;
      });
    });
  }
}
