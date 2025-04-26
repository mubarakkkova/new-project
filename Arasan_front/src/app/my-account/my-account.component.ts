import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  currentAcc = {
    id: 1,
    name: "Zhibek",
    surname: "Kenzhebekova",
    img: "",
    age: 20,
    orderStory: ["Sorpa", "Kuyrdak"],
    addInfo: "Single and good-looking. Favorite food category Kazakh cuisine.",
  }

}
