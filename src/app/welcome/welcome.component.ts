import { Component, OnInit } from '@angular/core';
import { Editor } from '../editor.model';
import { Article } from '../article.model';
import { Router } from '@angular/router';
import * as faker from 'faker';
import * as firebase from "firebase";
import { FirebaseListObservable } from 'angularfire2/database';
import { ArticleServiceService } from '../article-service.service';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [ArticleServiceService]

})
export class WelcomeComponent implements OnInit {
  articles: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;





  constructor(
    private router: Router,
    private articleService: ArticleServiceService
  ) { }

  ngOnInit() {
    this.articles = this.articleService.getArticles();

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

  goToArticlePage(clickedArticle) {
    this.router.navigate(['articles', clickedArticle.$key]);
  };

}
