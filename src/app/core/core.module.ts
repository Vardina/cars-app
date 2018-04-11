import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { PagingComponent } from './paging/paging.component';

@NgModule({
  declarations: [NavbarComponent, PagingComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavbarComponent, PagingComponent]
})
export class CoreModule { }
