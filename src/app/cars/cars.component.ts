import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Car } from './car';
import { CarsService } from './cars.service';

@Component({
  selector: 'cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  providers: [CarsService]
})
export class CarsComponent implements OnInit {
  itemsOnPage = 10;

  cars: Car[];
  currentPageItems: Car[];
  currentPage: number;
  offset: number;
  maxPage: number;

  constructor (
    private carsService: CarsService
  ) {
    this.offset = 0;
  }

  ngOnInit() {
    this.carsService
      .getAllCars()
      .then(cars => {
        this.cars = cars;
        this.currentPageItems = this.cars.slice(0, this.itemsOnPage);
        this.maxPage = Math.floor(cars.length / 10);
      });
  }

  nextPage() {
    if (this.currentPage <= this.maxPage ) {
        this.currentPage++;
        this.offset += this.itemsOnPage;
    } else {
        this.currentPage = 1;
        this.offset = 0;
    }

    this.currentPageItems = this.cars.slice(this.offset, this.offset + this.itemsOnPage);
  }

  sortByMake() {
    this.cars.sort((a, b) => {
      if (a.make < b.make) {
          return -1;
      } else if (a.make > b.make) {
          return 1;
      } else {
          return 0;
      }
    });

    this.currentPageItems = this.cars.slice(this.offset, this.offset + this.itemsOnPage);
  }

  sortByOwner() {
    this.cars.sort((a, b) => {
      if (a.owner < b.owner) {
          return -1;
      } else if (a.owner > b.owner) {
          return 1;
      } else {
          return 0;
      }
    });

    this.currentPageItems = this.cars.slice(this.offset, this.offset + this.itemsOnPage);
  }

  sortByDate() {
    this.cars.sort((a, b) => {
      let key1 = new Date(a.date).getTime();
      let key2 = new Date(b.date).getTime();

      if (key1 < key2) {
          return -1;
      } else if (key1 > key2) {
          return 1;
      } else {
          return 0;
      }
    });

    this.currentPageItems = this.cars.slice(this.offset, this.offset + this.itemsOnPage);
  }

}
