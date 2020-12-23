import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { ContactfeedComponent } from './contactfeed/contactfeed.component';
import { AboutfeedComponent } from './aboutfeed/aboutfeed.component';
import { MenufeedComponent } from './menufeed/menufeed.component';
import { HomeComponent } from './home/home.component';
import { MarketDataService  } from './services/market-data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigComponent } from './config/config.component'

@NgModule({
  declarations: [
    AppComponent,
    NewsfeedComponent,
    ContactfeedComponent,
    AboutfeedComponent,
    MenufeedComponent,
    HomeComponent,
    ConfigComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [MarketDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
