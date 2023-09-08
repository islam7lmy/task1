import { Component } from '@angular/core';
import { IPageTitle } from '../pagetitle/IPageTitle';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  _pageTitle: IPageTitle = {
    Title: "PORTFOLIO COMPONENT", Color: "#2c3e50"
  };
}
