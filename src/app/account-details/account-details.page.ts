import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Route, ActivatedRoute } from '@angular/router';
import { TransactionService } from '../../services/transaction/transaction.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.page.html',
  styleUrls: ['./account-details.page.scss'],
})
export class AccountDetailsPage implements OnInit {

  user;
  transactId;
  _transactList:any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private transact: TransactionService
    ) { }

  ngOnInit() {
    this.transactId = this.route.snapshot.paramMap.get('transactId');

  }

  getTransactions() {
    this.transact.getTransactList(this.transactId).then((data) => {
      console.log(data)
    })
  }

  getTransactList() {
    const data = this.getTransactions()
  }

}
