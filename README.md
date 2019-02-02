# NyTimes copyCat

Also, make sure to checkout the [Real NY Times](https://www.nytimes.com/)

## By Christopher Thomas Cahill

### Features Included 1/25/2019
- Basic layout and "Main" and "About" views
- API call to include stock information
- Rudimentary formatting

### Features to be added 2/01/2019
- Improved formatting (i.e. headline artcile vs "smaller" news)
- Login
- Adding new articles
- Crossword?

### Future Goals
- Sorting pipe to sort op-eds by most recent (no Angular built in orderBy pipe...)
- Alternatively, use firebaseListObservable methods (i.e. RxJS operators) to return ordered list....[see StackOverflow discussion here...](https://stackoverflow.com/questions/39133217/how-can-i-sort-a-firebaselistobservable-list-in-angularfire2-angular2)

### The Web App
- Login with a Google™️ Account
- Once logged-in you can write an Op-ed

### Instructions
- clone this repository
-

### Original Angular 7 repo

The author began project in Angular 7 then ported to Angular 5 due to higher level of familiarity with Angular 5 -- [you can check the original here](https://github.com/ccahill1117/ng-NYT)

### Thanks!

- Faker borrowed from [Faker JS](https://github.com/Marak/Faker.js)
- API calls made to [Alpha Vantage](https://www.alphavantage.co/) for Dow/Nasdaq/S&P real time data
- Crossword borrowed from [NY Times Crossword](https://www.nytimes.com/crosswords)

### Interesting Findings

Consider the following piece of code :

```Javascript
export class MastheadComponent implements OnInit {
  dowInfo: any[] = null;

  metaDataString: any = "Meta Data";
  lastRefreshedString: any = "3. Last Refreshed";

  constructor(private stockCall: StockCallService) { }

  getStockInfo() {
    this.stockCall.getDow().subscribe(response => {
      let body = response.json();
      let lastRefreshed = body[this.metaDataString][this.lastRefreshedString];
      this.dowInfo = body["Time Series (60min)"][lastRefreshed]["4. close"];
    })
  }

  ngOnInit() {
    this.getStockInfo();
  }

}
```

The Alpha Vantage API returns a JSON object which may be parsed through bracket notation (lots of arrays). However, TypeScript does not allow

##### MIT License

*Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*

Copyright (c) 2019 Christopher Thomas Cahill
