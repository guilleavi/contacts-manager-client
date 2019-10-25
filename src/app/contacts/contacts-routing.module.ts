import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactsSearchComponent } from './contacts-search/contacts-search.component';

const routes: Routes = [
  { path: '', component: ContactsSearchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
