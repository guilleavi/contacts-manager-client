import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsSearchComponent } from './contacts-search/contacts-search.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ContactsSearchComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    SharedModule,
  ]
})
export class ContactsModule { }
