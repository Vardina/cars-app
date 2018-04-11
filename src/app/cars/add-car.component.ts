import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Car } from './car';

@Component({
   selector: 'add-car',
   templateUrl: './add-car.component.html'
})
export class AddCarComponent {
    car: Car = new Car();

    addCar() {
        document.getElementById('success-message').style.display = 'block';
    }
}
