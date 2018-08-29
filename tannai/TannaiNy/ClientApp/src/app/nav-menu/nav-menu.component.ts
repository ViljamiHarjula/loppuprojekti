//import { Component } from '@angular/core';

//@Component({
//  selector: 'app-nav-menu',
//  templateUrl: './nav-menu.component.html',
//  styleUrls: ['./nav-menu.component.css']
//})
//export class NavMenuComponent {
//  isExpanded = false;

//  collapse() {
//    this.isExpanded = false;
//  }

//  toggle() {
//    this.isExpanded = !this.isExpanded;
//  }
//}

import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { EhdotusComponent } from '../ehdotus/ehdotus.component';
import { KommenttiDetailComponent } from '../kommentti-detail/kommentti-detail.component';

import { AuthService } from '../auth/auth.service';
import { CallbackComponent } from '../callback/callback.component';
import { ProfileComponent } from '../profile/profile.component';
import { PingComponent } from '../ping/ping.component';



declare function require(path: string);
@Component({
  template: `
    <img src="{{imageSrc}}" />
  `,
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],


})
export class NavMenuComponent {
  imagePath = './tannainy_logo.png';
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
