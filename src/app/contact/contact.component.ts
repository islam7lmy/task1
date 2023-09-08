import { Component } from '@angular/core';
import { IPageTitle } from '../pagetitle/IPageTitle';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  _pageTitle: IPageTitle = { Title: "CONATCT SECTION", Color: "#2c3e50" };
}
