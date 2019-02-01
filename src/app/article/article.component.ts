import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Article } from '../article.model';
import { ArticleServiceService } from '../article-service.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from "firebase";
import { Routes } from '@angular/router';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleServiceService]
})
export class ArticleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
