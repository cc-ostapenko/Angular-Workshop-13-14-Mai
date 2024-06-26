import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBook } from '../../models/books';

@Component({
  selector: 'app-book-preview',
  standalone: true,
  imports: [],
  templateUrl: './book-preview.component.html',
  styleUrl: './book-preview.component.scss',
})
export class BookPreviewComponent {
  @Input() book: IBook | undefined;
  @Output() bookSelected = new EventEmitter();

  showMore() {
    this.bookSelected.emit(this.book);
  }
}
