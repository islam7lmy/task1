import { Component } from '@angular/core';
import { IPageTitle } from '../pagetitle/IPageTitle';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  _pageTitle: IPageTitle = { Title: "ABOUT COMPONENT", Color: "#fff" };
}
