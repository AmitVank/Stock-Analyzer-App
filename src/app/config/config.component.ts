import { Component, OnInit } from '@angular/core';
import { MarketDataService } from '../services/market-data.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
  public aKey: string;
  //public aKey: string ='1b649d696ad26c64a652b2f49559e871';
  constructor(private marketDataServices:MarketDataService) { }

  ngOnInit(): void {
    console.log(this.marketDataServices.globalaccesskey);
     this.aKey = this.marketDataServices.globalaccesskey;
  }
  onClickSubmit() {
    this.marketDataServices.globalaccesskey = this.aKey;
    console.log("Entered access key : " + this.marketDataServices.globalaccesskey);
 }
}
