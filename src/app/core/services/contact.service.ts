import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import * as md from '../../_models';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactsSource: BehaviorSubject<md.Contact[]> = new BehaviorSubject<md.Contact[]>([]);
  public contacts$: Observable<md.Contact[]> = this.contactsSource.asObservable();

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getContacts(): void {
    const url = 'http://localhost:8080/contacts';
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    this.httpClient.get<md.Contact[]>(
      url, { headers }
    ).subscribe(result => {
      if (result) {
        this.contactsSource.next(result);
      }
    });
  }
}
