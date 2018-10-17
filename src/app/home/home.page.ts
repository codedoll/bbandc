import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { first } from 'rxjs/operators';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user_accts;
  transactions;

  constructor (
    private fireStore: AngularFirestore,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController
  ){

  }
  ngAfterViewInit() {
    this.getActNum();
  }

  isLoggedIn() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  getAccounts(userId) {
    return new Promise((resolve, reject) => {
      this.fireStore.collection('Accounts').ref.where('userId', '==', userId).get().then((querySnapshot) => {
        this.user_accts = querySnapshot.docs.map(doc => doc.data());
        this.user_accts.forEach(function(obj) { obj.acct_transactions = []; });
        console.log(this.user_accts)
      })
        resolve();
    });
  };

  getTransactions(userId) {
    return new Promise((resolve, reject) => {
      this.fireStore.collection('Transactions').ref.where("user", "==", userId).get().then((querySnapshot) => {
        this.transactions = querySnapshot.docs.map(doc => doc.data());
        resolve(this.transactions);
      })
    });
  };

  separateTransacts(transactArr) {
    this.user_accts.forEach(function(element) {
      var result = transactArr.filter(obj => {
        return obj.accountNumber === element.actId
      })

      // Create a sum property in our array
      var actSum = result.reduce(function(prev, cur) {
        return prev + cur.amt;
      }, 0);

      // Add the sum in each act in the obj
      element.actTotal = actSum;

      // Add the transactions obj
      element.acct_transactions = result;
    });
    console.log(this.user_accts)
  }


  async getActNum() {
    // Wait for isLoggedIn to finish checking the logged in user
      const user = await this.isLoggedIn();
      if (user) {
        let userId = user.uid;
        this.getAccounts(userId).then((res) => {
          // Get all transactions under this use
          this.getTransactions(userId).then((res) => {
            // Separating the transactions manually because we don't have a real json from a real api
            this.separateTransacts(res);
          }).catch(
  
          )
        }).catch(

        )

      } else {
        this.navCtrl.navigateRoot('/login');
      }

    }
  }
  


