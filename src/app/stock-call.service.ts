import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StockCallService {
  constructor(private http: Http) { }

  getDow() {
    return this.http.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=DJI&interval=60min&outputsize=compact&apikey=87CWIJDXVDZUBFKC`)
  };

}
