import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CarsComponent } from './cars.component';
import { CarDetailsComponent } from './car-details.component';
import { AddCarComponent } from './add-car.component';
import { AddCommentComponent } from './comments/add-comment.component';
import { FormsModule } from '@angular/forms';
import { RoundingDirective } from './directives/app-rounding.directive';
import { EnginePipe } from './pipes/engine-pipe';

@NgModule({
  declarations: [
    CarsComponent,
    CarDetailsComponent,
    AddCarComponent,
    AddCarComponent,
    AddCommentComponent,
    RoundingDirective,
    EnginePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class CarsModule { }
