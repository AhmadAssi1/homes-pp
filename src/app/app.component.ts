import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {HomeComponent} from "./home/home.component";
import {RouterModule } from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <main>
      <header class="brand-name">
        <img class = "brand=logo" src="./../assets/logo.svg" 
             alt="logo" aria-hidden = "true">
      </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
  imports: [
    NgOptimizedImage,
    HomeComponent,
      RouterModule
  ]
})
export class AppComponent {
  title = 'homes';
}
