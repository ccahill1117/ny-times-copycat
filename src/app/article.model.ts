export class Article {
  title: string = "";
  previewText: string = "";
  text: string = "";
  author: string = "";
  date: string;


  constructor(public params) {
    this.title = params.title;
    this.previewText = params.previewText;
    this.text = params.text;
    this.author = params.author;
    this.date = params.date;

  }
}
