import { Injectable } from '@angular/core';

import { Car } from './car';
import { Data } from '../data/data';

@Injectable()
export class CarsService {
  constructor(
    private data: Data
  ) { }

  getAllCars() {
    return this.data
      .all()
      .then(c => c as Car[]);
  }

  getCarById(id: number) {
    return this.data
      .byId(id)
      .then(c => c as Car);
  }

  allSortedByDate() {
    return this.data
    .all()
    .then(c => c as Car[])
    .then(
      array => array.sort((a: Car, b: Car) => {
        let key1 = new Date(a.date).getTime();
        let key2 = new Date(b.date).getTime();

        if (key1 < key2) {
            return -1;
        } else if (key1 === key2) {
            return 0;
        } else {
            return 1;
        }
      })
    );
  }
}
