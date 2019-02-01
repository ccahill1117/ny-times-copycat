import { Component, OnInit } from '@angular/core';
import { StockCallService } from '../stock-call.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.css'],
  providers: [ StockCallService ]
})
export class MastheadComponent implements OnInit {
  dowInfo: any[] = null;

  constructor(private stockCall: StockCallService) { }

  getStockInfo() {
    this.stockCall.getDow().subscribe(response => {
      let body = response.json();
      let lastRefreshed = body["Meta Data"][["3. Last Refreshed"]];
      this.dowInfo = body["Time Series (60min)"][lastRefreshed]["4. close"];
      // console.log(this.dowInfo["Time Series (60min)"][lastRefreshed]["4. close"]);

    })
  }


  ngOnInit() {
    this.getStockInfo();




  }

}
