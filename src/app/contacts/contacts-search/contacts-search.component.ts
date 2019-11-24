import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../core/services/contact.service';
import * as md from '../../_models';9

@Component({
  selector: 'app-contacts-search',
  templateUrl: './contacts-search.component.html',
  styleUrls: ['./contacts-search.component.scss']
})
export class ContactsSearchComponent implements OnInit {

  contacts: md.Contact[];

  constructor(
    private contactService: ContactService
  ) {
  }

  ngOnInit() {
    this.contactService.contacts$.subscribe(result => {
      this.contacts = result;
    });
    this.contactService.getContacts();
  }

  searchContacts(term: string): void {
    console.log('term', term);
  }

}
