import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ContactServiceService {

  constructor() { }

  getContacts() {
    // tslint:disable-next-line: no-use-before-declare
    return CONTACTS;
  }
  getContact(id: number) {
    // tslint:disable-next-line: no-use-before-declare
    return CONTACTS.find(contact => contact.id === id);
  }

}
const CONTACTS = [ {
  id: 1,
  name: 'Alex Ilinykh',
  category: 'Important',
  description: 'some random info, that will describe how great Alex is, and bla bla bla',
  picUrl: 'https://vignette.wikia.nocookie.net/rickandmorty/images/1/17/Mechanical_Morty.png/revision/latest?cb=20170731155031',
  location: 'Zipcode'
},
{
  id: 2,
  name: 'Bob',
  category: 'work',
  description: ' frontend magician',
  picUrl: 'http://www.tshirtterrorist.co.za/wp-content/uploads/2017/10/picklerick-520.4.jpg',
  location: 'Zipcode'
},
{
  id: 3,
  name: 'Stefun',
  category: 'work',
  description: ' sdfdsfsf',
  picUrl: 'https://vignette.wikia.nocookie.net/rickandmorty/images/a/a6/Rick_Sanchez.png/revision/latest?cb=20160923150728',
  location: 'Zipcode'
},
{
  id: 4,
  name: 'Ed',

  description: ' asdf',
  picUrl: 'https://vignette.wikia.nocookie.net/rickandmorty/images/3/30/Glootie.png/revision/latest?cb=20190720005839',
  location: 'Zipcode'
}
];


