import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teachingApp';

  appData = {
    courseList: [
      {
        id: 1,
        title: "How to be a developer",
        author: "Siddharth singh",
        actualPrice: 445,
        discountedPrice: 345,
        tags: ['134', '123'],
        desc: "hello world"
      },
      {
        id: 2,
        title: "How to be a developer",
        author: "Siddharth singh",
        actualPrice: 445,
        discountedPrice: 345,
        tags: ['134', '123'],
        desc: "hello world"
      },
      {
        id: 3,
        title: "How to be a developer",
        author: "Siddharth singh",
        actualPrice: 445,
        discountedPrice: 345,
        tags: ['134', '123'],
        desc: "hello world"
      }
    ],
    cart: {
      items: [],
      total: 0
    }
  }
}
