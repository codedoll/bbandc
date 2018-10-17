import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.page.html',
  styleUrls: ['./account-details.page.scss'],
})
export class AccountDetailsPage implements OnInit {

  user;

  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap)

  }

}
