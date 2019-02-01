import { Component, OnInit, EventEmitter } from '@angular/core';
import { Article } from '../article.model';
import * as firebase from "firebase";
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-op-ed',
  templateUrl: './create-op-ed.component.html',
  styleUrls: ['./create-op-ed.component.css']
})
export class CreateOpEdComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
