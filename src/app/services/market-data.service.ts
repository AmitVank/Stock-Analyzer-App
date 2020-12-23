import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {map,catchError,finalize} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarketDataService {
globalaccesskey:string = 'd06f7da69c85212c3d277edeb77a0377';
//1b649d696ad26c64a652b2f49559e871
  //private api = "https://bloomberg-market-and-financial-news.p.rapidapi.com/market/get-full?id=adsmi%3Aind%2Caex%3Aind%2Cco1%3Acom%2Cgc1%3Acom";
  private api = "http://api.marketstack.com/v1/eod?access_key=1b649d696ad26c64a652b2f49559e871&symbols=AAPL";
  public httpOptions = {
    /*headers:new HttpHeaders(
    {
      'content-Type': 'application/json',
      "date_from": "2019-01-01",
      "date_to": "2019-02-01"
      'x-rapidapi-key' : 'bbb1d2dad9msh62002062709a1e9p1c58b1jsnd2046e5565ba' ,
      'x-rapidapi-host' : 'bloomberg-market-and-financial-news.p.rapidapi.com'

    }
    )*/
    }
  
  constructor(private http: HttpClient) { }
  getMarketfullData() {
    return this.http.get(this.api, this.httpOptions).pipe(
      map(response => {
        if (response) {
          return response;
        }
      },
        (error: any) => {
          return error;
        }
      )
    )
  }

  getMarketData_Indraday(Akey:any,symbols:any,fromDate:any,toDate:any,limit:any) {
    const params = new HttpParams()
    .set('access_key', Akey.toString())
    .set('symbols', symbols.toString())
    .set('date_from', fromDate.toString())
    .set('date_to', toDate.toString())
    .set('limit', limit.toString())
    let BASE_URL = 'http://api.marketstack.com/v1/eod';

    return this.http.get(BASE_URL,  {params}).pipe(
      map(response => {
        if (response) {
          return response;
        }
      },
        (error: any) => {
          return error;
        }
      )
    )
  }


}
