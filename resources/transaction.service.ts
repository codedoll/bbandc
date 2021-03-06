import { Transaction } from '../../models/transaction/transaction';
import { Injectable } from '@angular/core';
import { 
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  transactions: AngularFirestoreCollection<Transaction>;
  
  private taskDoc: AngularFirestoreDocument<Transaction>;

  userDoc: any;

  constructor(
    private fireStore: AngularFirestore
  ) {

  }

  getTransactionList() {
    // Get transactions in an account by searching using accountNo
    // console.log(this.fireStore.doc<any>('userProfile/we45tfgy8ij'))
    // return this.fireStore.doc<any>('userProfile/we45tfgy8ij')
  }

  addTransaction(transaction: Transaction) {

    // Get a unique transaction ID
    let transactID = this.getTransactId(transaction.user);

    // Set the transaction id value before pushing it to the db
    transaction.transactId = transactID;

    // Set which collection and name of document
    this.userDoc = this.fireStore.doc<any>('Transactions/'+ transaction.transactId);

    // Push it to db
    this.userDoc.set(transaction);
  }

  getTransactId(userID) {
    let transactID = `${userID.substring(1, 6)}-${Math.floor(Math.random()*90000) + 10000}`
    return transactID;
  }

}
