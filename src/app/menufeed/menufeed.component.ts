import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menufeed',
  templateUrl: './menufeed.component.html',
  styleUrls: ['./menufeed.component.scss']
})
export class MenufeedComponent implements OnInit {

  constructor() { }
  c_newfeed = "/newsfeed";
  c_about ="/about";
  c_contact = "/contact";
  ngOnInit(): void {
     

  }

}
