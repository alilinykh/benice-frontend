import { ContactRouteActivator } from './contact-route-activator';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { Routes } from '@angular/router';
import { NewContactComponent } from './new-contact/new-contact.component';
import { Page404Component } from './errors/page404.component';

export const appRoutes: Routes = [
  {path: 'contacts/new', component: NewContactComponent},
  {path: 'contacts', component: ContactListComponent},
  {path: 'contacts/:id', component: ContactPageComponent, canActivate: [ContactRouteActivator]},
  {path: '404', component: Page404Component},
  {path: '', redirectTo: '/contacts', pathMatch: 'full'}
];
