import { Directive, ElementRef, Input, OnChanges, inject } from '@angular/core';
import {fromEvent} from 'rxjs';

@Directive({
  selector: '[appOrderBtn]',
  standalone: true,
})
export class OrderBtnDirective implements OnChanges {
  @Input() appOrderBtn: string = '';
  orderBtnElement: HTMLButtonElement = document.createElement('button');
  elementRef: ElementRef<HTMLDivElement> = inject(ElementRef);

  ngOnChanges(): void {
    this.orderBtnElement.innerText = this.appOrderBtn;
  }

  constructor() {
    this.elementRef.nativeElement.appendChild(this.orderBtnElement);

    fromEvent(this.orderBtnElement, 'click').subscribe(() =>
      console.log('this.orderBtn:', this.appOrderBtn)
    );
  }
}
