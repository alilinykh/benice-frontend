import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  cancel() {
    this.router.navigate(['/contacts']);
  }

}
