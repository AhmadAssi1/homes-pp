import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HousingLocationComponent} from "../housing-location/housing-location.component";
import {HousingLocation} from "../housing-location";
import {HousingService} from "../housing.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder = "Filter by city" #filter>
        <button class="primary" type = "button" (click)="filterResults(filter.value)" >Search</button>
      </form>
    </section>
    <section class = "results">
      <app-housing-location *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation"></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationsList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
    this.housingLocationsList = housingLocationList;
    this.filteredLocationList = housingLocationList;
    });
  }

  filterResults(value: string) {
    if (!value) this.filteredLocationList = this.housingLocationsList;
    this.filteredLocationList = this.housingLocationsList.filter(location => location.city.toLowerCase().includes(value.toLowerCase()));

  }
}
