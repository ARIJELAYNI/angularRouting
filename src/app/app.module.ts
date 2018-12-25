import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Route, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import {ContactListComponent} from './contact-list/contact-list.component';



const routes: Route[] = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component : AboutComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  },
  {
    path: 'people/persondetail',
    component: PersonDetailComponent
  },
  {
    path: 'contacts/list',
    component: ContactListComponent
  }
]



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotfoundComponent,
    PersonDetailComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
