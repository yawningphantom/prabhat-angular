import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input('courses') courses = []
  @Input('cart') cart = {
    items: [],
    total: 0
  }

  @Output() cartChange = new EventEmitter<any>();

  updateCart(course: Record<string, any>) {
    // console.log("yes", course)
    this.cart.items.push(course)
    this.cart.total += course.discountedPrice;
    this.cartChange.emit(this.cart);
  }
}
