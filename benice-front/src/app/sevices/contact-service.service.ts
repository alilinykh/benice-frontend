import { Contact } from './../contact';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ContactServiceService {
  contacts: Contact[];
  root = environment.url;
  id: number;
  constructor(private http: HttpClient) { }

  async saveContact(contact: Contact, id: number) {
    const c = this.http.post<Contact>(this.root + 'contact/' + id, contact).toPromise();
    return c;
  }
  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.root + 'contacts');
  }
  getContact(id: number) {
    return this.http.get<Contact>(this.root + 'contacts/' + id);
  }
}


