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

  dateNow: Date = new Date();

  dateString: string = this.dateNow.toString();

  constructor(private articleService: ArticleServiceService) {

  }

  ngOnInit() {

  }

  ngDoCheck() {
    this.user = firebase.auth().currentUser;

  }


  newOpEd(
      title: string,
      previewText: string,
      text: string,
      type: string
      )
      {

        this.articleService.addArticle(new Article({title: title, previewText: previewText, text: text, author: this.user.displayName, date: this.dateString, type: "op-ed"}));
        console.log(this.dateNow);
      }
}
