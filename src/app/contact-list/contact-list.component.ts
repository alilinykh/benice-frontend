import { Contact } from './../contact';
import { ToastrService } from './../sevices/toastr.service';
import { ContactServiceService } from './../sevices/contact-service.service';
import { Component, OnInit } from '@angular/core';

// declare let toastr: any;
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit {
  contacts: Contact[];

  constructor(private conctactService: ContactServiceService, private toastr: ToastrService) {
  }
  handleEventClicked(data: Contact) {
    console.log('recieved: ', data);
  }

  ngOnInit() {
   this.conctactService.getContacts().subscribe( data => {
     this.contacts = data;
   });
  }
  handleContactClickToastr(contactName: string) {
    this.toastr.success(contactName);
  }

}
