import { Component } from '@angular/core';
import { IPageTitle } from '../pagetitle/IPageTitle';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  _pageTitle: IPageTitle = { Title: "START FRAMEWORK", Color: "#fff" };
}
