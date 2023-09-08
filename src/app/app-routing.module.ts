import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotFound404Component } from './not-found404/not-found404.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "", component: HomeComponent, title: "Home page" },
  { path: "home", component: HomeComponent, title: "Home page" },
  { path: "about", component: AboutComponent, title: "About page" },
  { path: "portfolio", component: PortfolioComponent, title: "Portfolio page" },
  { path: "contact", component: ContactComponent, title: "Contact page" },
  { path: "**", component: NotFound404Component, title: "NotFound page" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
