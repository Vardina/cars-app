import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Car, Comment } from './car';
import { CarsService } from './cars.service';
import { AddCommentComponent } from './comments/add-comment.component';
import { RoundingDirective } from './directives/app-rounding.directive';


@Component({
  selector: 'car-details',
  templateUrl: './car-details.component.html',
  providers: [CarsService]
})
export class CarDetailsComponent implements OnInit {
  car: Car;
  comments: Comment[];
  commentsToShow: Comment[];

  constructor(
    private carsService: CarsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id'].split(':').pop();

      this.carsService
        .getCarById(id)
        .then(car => { this.car = car; this.comments = car.comments; this.commentsToShow = car.comments; });
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

  detailComments(detail) {
    this.commentsToShow = this.comments.filter(
      comment => comment.tag === detail
    );
  }

  allComments() {
    this.commentsToShow = this.comments;
  }

  editCar() {
    // server logic
  }
}
