import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe} from '@angular/common';

@Pipe({
  name: 'formatter',
  standalone: true
})
export class FormatterPipe implements PipeTransform {
  private decimalPipe = new DecimalPipe('en-US');

  transform(value: string): string | null {
    const numberValue = parseFloat(value)

    if(isNaN(numberValue)){
      return null;
    }

    return this.decimalPipe.transform(value, '1.2-2');
  }

}
