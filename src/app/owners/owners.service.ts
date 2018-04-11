import { Injectable } from '@angular/core';

import { Owner } from './owner';
import { Data } from '../data/data';

@Injectable()
export class OwnersService {
  constructor(
    private data: Data
  ) { }

  getAllOwners() {
    return this.data
      .allOwners()
      .then(c => c as Owner[]);
  }

  getOwnerById(id: number) {
    return this.data
      .ownerById(id)
      .catch(err => {
        console.log(err);
        return null;
      })
      .then(o => o as Owner);
  }
}
