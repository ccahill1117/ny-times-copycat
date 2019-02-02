import {Pipe, PipeTransform} from '@angular/core';
import { Article } from './article.model';

@Pipe({
  name: "dateOrder",
  pure: false
})

export class datePipe implements PipeTransform {
  transform(input: Article[]){
    var output: Article[] = [];


    return output;
  }
}
