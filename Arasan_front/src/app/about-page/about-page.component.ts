import { Component, OnInit } from '@angular/core';
import {Team, team} from "../models";

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  team: Team[];

  constructor() {
    this.team = team;
  }
  ngOnInit(): void {
  }

}
