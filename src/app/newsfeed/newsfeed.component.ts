import { Component, OnInit } from '@angular/core';
import { MarketDataService } from '../services/market-data.service';


@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss']
})
export class NewsfeedComponent implements OnInit {
  indraDay :any;
  tHeader:any;
  column = ["date","high","low", "close",  "exchange", "volume"];
  header = ["Date","High","Low", "Close",  "Exchange", "Volume"];
  //column = ["close", "date", "exchange", "high", "last","low","open","symbol","volume"];
  //header = ["Close", "Date", "Exchange", "High", "Last","Low","Open","Symbol","Amount"];
  public aKey: string;
 public symbols: string = 'EXPE';
 public fromDate: string = '';
 public toDate: string = '';
 public limit:string = '10';
 ImagePath: string;
 ImagePath2: string;
 ImagePath3: string;
 ImagePath4: string;
 public image: string;
 symbolArray:Array<Object> = [
  {num: 0, name: "EXPE"},
  {num: 1, name: "MMYT"},
  {num: 2, name: "SABR"},
  {num: 3, name: "TZOO"}
];
selectedSymbol:any = this.symbolArray[0];


 
  constructor(private marketDataServices:MarketDataService) { }
  getMarketData_Indraday() {
    this.aKey = this.marketDataServices.globalaccesskey;
    this.tHeader = "(Symbols: " + this.selectedSymbol.name + " - Date From: " + this.fromDate + " - Date To: " + this.toDate + " - Count: " + this.limit + ")";
    this.marketDataServices.getMarketData_Indraday(this.aKey,this.selectedSymbol.name      ,this.fromDate,this.toDate,this.limit)
      .subscribe(response => {
        console.log(response)
        this.indraDay = response['data'];
        for (let index = 0; index < this.indraDay.length; index++) {
          this.indraDay[index]['high'] = '$' + this.indraDay[index]['high'];
          this.indraDay[index]['last'] = '$' + this.indraDay[index]['last'];
          this.indraDay[index]['low'] = '$' + this.indraDay[index]['low'];
          this.indraDay[index]['open'] = '$' + this.indraDay[index]['open'];
          this.indraDay[index]['close'] = '$' + this.indraDay[index]['close'];
          if(this.indraDay[index]['volume']!= null)
          {
          this.indraDay[index]['volume'] = (this.indraDay[index]['volume']).toLocaleString();
          }
          this.indraDay[index]['date'] =new Date(this.indraDay[index]['date']).toLocaleString();
        }

        console.log(this.indraDay );
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }
  getImage()
  {
   if(this.image == 'EXPE')
   {
    this.ImagePath = 'assets/expegraphreal.png'
    this.ImagePath2 = 'assets/comparisonexpe.png'
    this.ImagePath3 = 'assets/outlierexpe.png'
    this.ImagePath4 = 'assets/structureexpe.png'
   } 
    else if(this.image =='MMYT')
    {
    this.ImagePath = 'assets/mmytgraph.png'
    this.ImagePath2 = 'assets/mmytstruc.png'
    this.ImagePath3 = 'assets/mmytcomp.png'
    this.ImagePath4 = 'assets/mmytout.png'
    }
    else if(this.image =='TZOO')
    {
    this.ImagePath = 'assets/tzoograph.png'
    this.ImagePath2 = 'assets/tzoostruc.png'
    this.ImagePath3 = 'assets/tzoocomp.png'
    this.ImagePath4 = 'assets/tzooout.png'
    }
    else if(this.image =='SABR')
    {
    this.ImagePath = 'assets/fourth.png'
    this.ImagePath2 = 'assets/fourthstruc.png'
    this.ImagePath3 = 'assets/fourthcomp.png'
    this.ImagePath4 = 'assets/fourthout.png'
    }
    else
    {
      this.ImagePath = 'assets/mmytgraph.png'
      this.ImagePath2 = 'assets/mmytstruc.png'
      this.ImagePath3 = 'assets/mmytcomp.png'
      this.ImagePath4 = 'assets/mmytout.png'
    }
  
  }
  onClickSubmit() {
    this.getMarketData_Indraday();
    this.onClick(this.selectedSymbol.name);
    console.log("Entered Email id : " + this.aKey);
    

 }
 onClick(imageName:string)
 {
      this.image = imageName;
      this.getImage();
      console.log("Image :"+this.ImagePath);
 }


  ngOnInit(): void {
    console.log(this.marketDataServices.globalaccesskey);
    this.aKey = this.marketDataServices.globalaccesskey;
    
    this.getMarketData_Indraday();
    this.onClick('EXPE');
    
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
