import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactListRoutingModule} from './contact-list-routing.module';
import {ContactListComponent} from './contact-list.component';

@NgModule({
  imports: [CommonModule, ContactListRoutingModule],
  declarations: [ContactListComponent]
})

export class ContactListModule {
}
