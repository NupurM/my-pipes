// ng generate pipe SentenceCase
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentenceCase'
})
export class SentenceCasePipe implements PipeTransform {

  transform(value: string): any {
    const result = value.slice(0, 1).toUpperCase() + value.slice(1).toLocaleLowerCase();
    return result;
  }

}
