import { Component, OnInit } from '@angular/core';
import { Editor } from '../editor.model';
import { Article } from '../article.model';
import * as faker from 'faker';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],

})
export class WelcomeComponent implements OnInit {

  articles: Article[] = [];

  mainArticle: Article = this.articles[0];


  constructor() { }

  ngOnInit() {
    // let i;
    // for(i=0;i<5;i++) {
    //   let articleTitle = faker.lorem.sentence(3);
    //   let articlePreviewText = faker.lorem.sentence();
    //   let articleText = faker.lorem.paragraphs(5);
    //   let articleAuthor = faker.name.findName();
    //   let articleDate = faker.date.recent();
    //   this.articles.push(new Article({title: articleTitle, previewText: articlePreviewText, text: articleText, author: articleAuthor, date: articleDate}));
    // }
    // console.log(this.articles[0]);
  }

}
