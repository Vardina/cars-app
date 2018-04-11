import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Owner } from './owner';
import { OwnersService } from './owners.service';

@Component({
    selector: 'owners-details',
    templateUrl: './owner-details.component.html',
    providers: [OwnersService]
})
export class OwnerDetailsComponent implements OnInit {
    owner: Owner;

    constructor(
        private carsService: OwnersService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
        let id = +params['id'].split(':').pop();

        this.carsService
            .getOwnerById(id)
            .then(owner => this.owner = owner);
        });
    }

    showEditMode() {
        document.getElementById('edit-form').style.display = 'block';
        document.getElementById('readonly').style.display = 'none';
    }

    showReadonlyMode() {
        document.getElementById('edit-form').style.display = 'none';
        document.getElementById('readonly').style.display = 'block';
    }

    editOwner() {
        // server logic
    }
}

