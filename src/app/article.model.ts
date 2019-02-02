export class Article {
  title: string = "";
  previewText: string = "";
  text: string = "";
  author: string = "";
  type: string = "";
  date: string;


  constructor(public params) {
    this.title = params.title;
    this.previewText = params.previewText;
    this.text = params.text;
    this.author = params.author;
    this.type = params.type;
    this.date = params.date;

  }
}
