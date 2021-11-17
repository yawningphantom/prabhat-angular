import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tablecommponent',
  templateUrl: './tablecommponent.component.html',
  styleUrls: ['./tablecommponent.component.css']
})
export class TablecommponentComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  @Input('course') courses = []
  @Input('cart') cart = {
    items: [],
    total: 0
  }

}
