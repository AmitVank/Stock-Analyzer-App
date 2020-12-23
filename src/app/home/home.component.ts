import { Component, OnInit } from '@angular/core';
import { MarketDataService } from '../services/market-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private marketDataServices:MarketDataService) { }
  

  ngOnInit(): void {
    //this.getMarketData();
    // if(this.marketDataServices.globalaccesskey == '')
    // {
    //   this.marketDataServices.globalaccesskey = '18ad5c54a82163cc2c1f23ae848a5f21';

    // }
    


    console.log(this.marketDataServices.globalaccesskey);
  }
  
  getMarketData(){
    this.marketDataServices.getMarketfullData()
    .subscribe(response => {
      console.log(response)
    }, error => {
      console.warn(error.responseText)
      console.log({ error })
    })
  }

}
