import {Pipe, PipeTransform} from '@angular/core';
import { Article } from './article.model';

@Pipe({
  name: "articleType",
  pure: false
})

export class typePipe implements PipeTransform {
  transform(input: Article[]) {
    var output: Article[] = [];


    return output;
  }
}
