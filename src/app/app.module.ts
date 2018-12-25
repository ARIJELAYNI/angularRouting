import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {AppRoutingModule} from './app-routing.module';
import {PersonDetailModule} from './person-detail/person-detail.module';
import {ContactListModule} from './contact-list/contact-list.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotfoundComponent
  ],
  imports: [BrowserModule, PersonDetailModule, ContactListModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {
}
