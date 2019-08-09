import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ContactRouteActivator } from './contact-route-activator';
import { ToastrService } from './sevices/toastr.service';
import { ContactServiceService } from './sevices/contact-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { NewContactComponent } from './new-contact/new-contact.component';
import { Page404Component } from './errors/page404.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactDetailsComponent,
    NavbarComponent,
    ContactPageComponent,
    NewContactComponent,
    Page404Component,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ContactServiceService, ToastrService, ContactRouteActivator],
  bootstrap: [AppComponent]
})
export class AppModule { }
