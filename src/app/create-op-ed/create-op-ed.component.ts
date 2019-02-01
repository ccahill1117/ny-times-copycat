import { Component, OnInit, EventEmitter } from '@angular/core';
import { Article } from '../article.model';
import { ArticleServiceService } from '../article-service.service';
import * as firebase from "firebase";
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-create-op-ed',
  templateUrl: './create-op-ed.component.html',
  styleUrls: ['./create-op-ed.component.css'],
  providers: [ArticleServiceService, AuthenticationService]
})
export class CreateOpEdComponent implements OnInit {

  private user;

  articles: FirebaseListObservable<any[]>;

  const dateNow: Date = new Date();

  constructor(private articleService: ArticleServiceService) {

  }

  ngOnInit() {

  }

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
  }


  newArticle(
      title: string,
      previewText: string,
      text: string,
      author: number,
      date: Date = this.dateNow
      )

      {
        var newArticle: Article = new Article({title: title, previewText: previewText, text: text, author: author, date: date});
        this.articleService.addArticle(newArticle);
      }
}

}
