import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TopBarComponent implements OnInit {
  token: any;
  constructor(public router: Router) { }

  search: string = "";

  ngOnInit(): void {
  }

  searchProd() {
    this.search = ""
  }
}
