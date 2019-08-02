import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor() { }

  contacts = [ {
    id: 1,
    name: 'Alex',
    category: 'Important',
    description: 'some random info',
    picUrl: 'null',
    location: 'Zipcode'
  },
  {
    id: 2,
    name: 'Bob',
    category: 'work',
    description: ' frontend magician',
    picUrl: 'www.google.com',
    location: 'Zipcode'
  },
  {
    id: 2,
    name: 'Ben',
    category: 'work',
    description: ' sdfdsfsf',
    picUrl: 'www.google.com',
    location: 'Zipcode'
  },
  {
    id: 2,
    name: 'Ed',

    description: ' asdf',
    picUrl: 'www.google.com',
    location: 'Zipcode'
  }
];

  handleEventClicked(data: any) {
    console.log('recieved: ', data);
  }

  ngOnInit() {
  }

}
