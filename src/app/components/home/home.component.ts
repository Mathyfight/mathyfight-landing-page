import { Component, HostListener, OnInit } from '@angular/core';

import * as AOS from 'aos';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      offset: 120,
      duration: 3000
    });

    setInterval(() => {
      AOS.refresh();
    }, 1000);
  }

  // @HostListener('window:scroll', ['$event'])
  // onScroll() {

  // }
}
