import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { CarsComponent } from '../cars/cars.component';
import { CarDetailsComponent } from '../cars/car-details.component';
import { AddCarComponent } from '../cars/add-car.component';
import { OwnersComponent } from '../owners/owners.component';
import { OwnerDetailsComponent } from '../owners/owner-details.component';
import { AddOwnerComponent } from '../owners/add-owner.component';

import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cars/add-car', component: AddCarComponent },
  { path: 'cars/all', component: CarsComponent },
  { path: 'cars/all/p/:id', component: CarsComponent },
  { path: 'cars/:id', component: CarDetailsComponent },
  { path: 'owners/add-owner', component: AddOwnerComponent },
  { path: 'owners/all', component: OwnersComponent },
  { path: 'owners/all/p/:id', component: OwnersComponent },
  { path: 'owners/:id', component: OwnerDetailsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [NotFoundComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteConfigModule { }