import { ContactServiceService } from './sevices/contact-service.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';


@Injectable()
export class ContactRouteActivator implements CanActivate {

  constructor(private contactService: ContactServiceService, private router: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot) {
    const contactExists = !!this.contactService.getContact(+route.params['id']);
    if (!contactExists) { this.router.navigate(['/404']); }
    return contactExists;
  }
}
