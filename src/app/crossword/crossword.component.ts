import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import * as firebase from "firebase";

@Component({
  selector: 'app-crossword',
  templateUrl: './crossword.component.html',
  styleUrls: ['./crossword.component.css'],
  providers: [AuthenticationService]
})
export class CrosswordComponent implements OnInit {

  private user;

  constructor() {}

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
  }

  ngOnInit() {
  }

}
