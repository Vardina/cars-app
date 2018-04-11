import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { OwnersComponent } from './owners.component';
import { OwnerDetailsComponent } from './owner-details.component';
import { AddOwnerComponent } from './add-owner.component';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OwnersComponent,
    OwnerDetailsComponent,
    AddOwnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    FormsModule
  ]
})
export class OwnersModule { }
