import { ToastrService } from './../sevices/toastr.service';
import { Contact } from './../contact';
import { ContactServiceService } from './../sevices/contact-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  contact: Contact;
  toastr: ToastrService;


  constructor(private router: Router, private contactService: ContactServiceService, toastr: ToastrService) {
    this.contact = new Contact();
    this.toastr = toastr;
   }

  ngOnInit() {
  }
  // tslint:disable-next-line: variable-name
  async createNewContact(user_id: number) {
    console.log(this.contact.pictureUrl);
    await this.contactService.saveContact(this.contact, user_id).then(() => this.toastr.success('Contact is saved'));
  }

  cancel() {
    this.router.navigate(['/contacts']);
  }

}
