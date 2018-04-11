import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CoreModule } from './core/core.module';
import { DataModule } from './data/data.module';
import { RouteConfigModule } from './routes/routes.config';
import { HomeModule } from './home/home.module';
import { CarsModule } from './cars/cars.module';
import { OwnersModule } from './owners/owners.module';

import { RoundingDirective } from './cars/directives/app-rounding.directive';
import { EnginePipe } from './cars/pipes/engine-pipe';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    // RoundingDirective,
    // EnginePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DataModule,
    RouteConfigModule,
    CoreModule,
    HomeModule,
    CarsModule,
    OwnersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
