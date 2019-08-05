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
  contacts: any[];

  constructor(private conctactService: ContactServiceService, private toastr: ToastrService) {
  }
  handleEventClicked(data: any) {
    console.log('recieved: ', data);
  }

  ngOnInit() {
    this.contacts = this.conctactService.getContacts();
  }
  handleContactClickToastr(contactName: any) {
    this.toastr.success(contactName);
  }

}
