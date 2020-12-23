import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { ContactfeedComponent } from './contactfeed/contactfeed.component';
import { AboutfeedComponent } from './aboutfeed/aboutfeed.component';
import { MenufeedComponent } from './menufeed/menufeed.component';
import { HomeComponent } from './home/home.component';
import { ConfigComponent } from './config/config.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch: 'full' },
  {path:"newsFeed",component:NewsfeedComponent},
  {path:"contact",component:ContactfeedComponent},
  {path:"about",component:AboutfeedComponent},
  {path:"home",component:HomeComponent},
  {path:"config",component:ConfigComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
