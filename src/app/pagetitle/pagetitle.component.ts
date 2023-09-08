import { Component, Input } from '@angular/core';
import { IPageTitle } from './IPageTitle';

@Component({
  selector: 'app-pagetitle',
  templateUrl: './pagetitle.component.html',
  styleUrls: ['./pagetitle.component.css']
})
export class PagetitleComponent {
  @Input() _pageTitle?: IPageTitle;
}
