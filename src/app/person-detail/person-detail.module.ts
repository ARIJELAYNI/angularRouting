import {NgModule} from '@angular/core';
import {PersonDetailsRoutingModule} from './person-details-routing.module';
import {PersonDetailComponent} from './person-detail.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CommonModule, PersonDetailsRoutingModule],
  declarations: [PersonDetailComponent]
})

export class PersonDetailModule {
}
