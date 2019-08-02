import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor() { }

  contact1 = {
    id: 1,
    name: 'Alex',
    category: 'Important',
    description: 'some random info',
    picUrl: 'null',
    location: 'Zipcode'
  };

  handleEventClicked(data: any) {
    console.log('recieved: ', data);
  }

  ngOnInit() {
  }

}
