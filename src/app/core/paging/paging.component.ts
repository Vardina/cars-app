import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'paging',
    template: `
      <div>Query param page #: {{page}}</div>
      <div><button (click)="nextPage(array)">Next Page</button></div>
      <p>Run example full screen to see query param "page" change</p>`
})
export class PagingComponent implements OnInit, OnDestroy {
    public sub;
    public page;
    public array;

    constructor(
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit() {
        this.sub = this.route
            .queryParams
            .subscribe(params => {

            // Defaults to 0 if no query param provided.
            this.page = +params['page'] || 0;

            console.log('Query param page: ', this.page);
        });
        debugger;
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getCurrentPageItems(array: any[]) {
        return array.slice(10, 20);
    }

    nextPage(array) {
        debugger;
        this.router.navigate(['/owners/all/'], { queryParams: { page: this.page + 1 } });
        this.getCurrentPageItems(array);
    }
}
