import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { PagingComponent } from '../core/paging/paging.component';


import { Owner } from './owner';
import { OwnersService } from './owners.service';

@Component({
    selector: 'owners',
    templateUrl: './owners.component.html',
    providers: [OwnersService]
})
export class OwnersComponent implements OnInit {
    itemsOnPage = 10;

    owners: Owner[];
    currentPageItems: Owner[];
    currentPage: number;
    offset: number;
    maxPage: number;

    constructor (
        private ownersService: OwnersService
    ) {
        this.offset = 0;
     }

    ngOnInit() {
        this.ownersService
        .getAllOwners()
        .then( o => {
            this.owners = o;
            this.currentPageItems = this.owners.slice(0, this.itemsOnPage);
            this.maxPage = Math.floor(o.length / 10);
        });
    }

    nextPage() {
        if (this.currentPage <= this.maxPage ) {
            this.currentPage++;
            this.offset += this.itemsOnPage;
        } else {
            this.currentPage = 1;
            this.offset = 0;
        }

        this.currentPageItems = this.owners.slice(this.offset, this.offset + this.itemsOnPage);
    }

    sortA() {
        this.owners.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            } else if (a.name > b.name) {
                return 1;
            } else {
                return 0;
            }
        });

        this.currentPageItems = this.owners.slice(this.offset, this.offset + this.itemsOnPage);
    }

    sortD() {
        this.owners.sort((a, b) => {
            if (a.name > b.name) {
                return -1;
            } else if (a.name < b.name) {
                return 1;
            } else {
                return 0;
            }
        });

        this.currentPageItems = this.owners.slice(this.offset, this.offset + this.itemsOnPage);
    }
}
