import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars/cars.service';
import { HomeCar } from './home.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CarsService]
})
export class HomeComponent implements OnInit {
    cars: HomeCar[];

    constructor (
      private carsService: CarsService
    ) { }

    ngOnInit() {
      this.carsService
        .allSortedByDate()
        .then(cars => this.cars = cars);
    }
}
