import { Pipe, PipeTransform } from '@angular/core';
import { Article } from './article.model';

@Pipe({
  name: "articleType",
  pure: false
})

export class opEdPipe implements PipeTransform {
  transform(input: Article[]) {
    var output: Article[] = [];
    for (var i = 0; i < input.length-1; i++) {
      if (input[i].type === "op-ed") {
        output.push(input[i])
      }
    }
    return output;
  }
}
