import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Owner } from './owner';

@Component({
   selector: 'add-owner',
   templateUrl: './add-owner.component.html',
})
export class AddOwnerComponent {
    types = ['Ltd', 'Company', 'Person'];

    owner: Owner = new Owner();

    addOwner() {
        document.getElementById('success-message').style.display = 'block';
    }
}
