import { Contact } from './../contact';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  @Input() contact: Contact;
  @Output() eventClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  editContact() {
    console.log('this will edit contact');
    this.eventClick.emit('edit');
  }
  deleteContact() {
    console.log('this will delete contact');
    this.eventClick.emit('delete');
  }
  test() {
    console.log('123');
  }

}
