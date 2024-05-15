import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pages',
  standalone: true,
})
export class PagesPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return `${args}: ${value}`;
  }
}
