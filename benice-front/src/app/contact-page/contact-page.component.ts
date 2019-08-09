import { Contact } from './../contact';
import { Component, OnInit } from '@angular/core';
import { ContactServiceService } from '../sevices/contact-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  contact: Contact;
  constructor(private contactService: ContactServiceService, private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.contactService.getContact(+this.route.snapshot.params['id']).subscribe(data =>
      this.contact = data);

    // this.contactService.getContact(1).subscribe(data => {
    //   this.contact = data;
    // });

    // this.conctactService.getContacts().subscribe( data => {
      // this.contacts = data;
  }
  // tslint:disable-next-line: variable-name
  deleteContact(contact_id: number) {
    console.log(1);
    this.contactService.deleteContact(contact_id);
  }

}
