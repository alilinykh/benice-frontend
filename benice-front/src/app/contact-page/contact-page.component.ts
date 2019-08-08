import { Component, OnInit } from '@angular/core';
import { ContactServiceService } from '../sevices/contact-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  contact: any;
  constructor(private contactService: ContactServiceService, private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.contact = this.contactService.getContact(+this.route.snapshot.params['id']); // hardcoded
  }

}
