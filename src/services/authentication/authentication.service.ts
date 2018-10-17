import { createAct } from '../../models/create-act/create-acct';
import { Transaction } from '../../models/transaction/transaction';
import { TransactionService } from '../../services/transaction/transaction.service'

import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { NavController, MenuController } from '@ionic/angular';
import {
	AngularFirestoreDocument,
	AngularFirestore,
	AngularFirestoreCollection
} from 'angularfire2/firestore';

@Injectable()
export class AuthService {
	private user: firebase.User;
	acctDoc: any;
	accountInfo;
	transaction;
	userDoc: any;


	constructor(
		public afAuth: AngularFireAuth,
		public navCtrl: NavController,
		private menuCtrl: MenuController,
		private fireStore: AngularFirestore,
		private transact: TransactionService
	) {
		afAuth.authState.subscribe(user => {
			this.user = user;
		});
	}

	signUpWithEmailAndPassword(newUser) {
		return new Promise((resolve, reject) => {
			this.afAuth.auth.createUserWithEmailAndPassword(
				newUser.email,
				newUser.password
			).then((newUserData) => {
				let createdUserData = newUserData;
				this.createAccounts(newUserData, newUser);
				resolve();
			})
				.catch(error => console.log(error))
		})
	}

	signInWithEmail(credentials) {
		// Log in with the email registered on Firebase
		this.afAuth.auth.signInWithEmailAndPassword(
			credentials.email,
			credentials.password
		).then((user) => {
			this.navCtrl.navigateForward('/home'), { user: user };
		})
			.catch(error => console.log(error));
	}

	signOut() {
		this.afAuth.auth.signOut();
		this.navCtrl.navigateForward('/login');
	}

	getUserId() {
		return this.user.uid;
	}

	createActId() {
		let transactID = Math.floor(Math.random() * 900000) + 100000;
		return transactID;
	}

	randMonies() {
		let transactID = Math.floor(Math.random() * 900) + 10;
		return transactID;
	}

	addTransaction(transaction: Transaction) {
		console.log(transaction)
		// Create a unique transaction ID
		let transactID = this.createTransactId(transaction.user);

		// Set the transaction id value before pushing it to the db
		transaction.transactId = transactID;

		// Set which collection and name of document
		this.userDoc = this.fireStore.doc<any>('Transactions/' + transaction.transactId);

		// Push it to db
		this.userDoc.set(transaction);
	}

	createTransactId(userID) {
		let transactID = `${userID.substring(1, 6)}-${Math.floor(Math.random() * 9000) + 10000}`
		return transactID;
	}


	createAccounts(createdUserData, userForm) {

		// Create the object to make a NEW ACCOUNT
		let createAcctData = {
			actId: this.createActId(),
			actName: userForm.actName,
			actType: "checking",
			userId: createdUserData.user.uid
		}

		var accounts = this.fireStore.collection('Accounts');

		// Create the object for automatic NEW DEPOSIT for newly made account
		// Create 3 accounts

		accounts.add(createAcctData).then(() => {
			let transaction = {
				transactType: "deposit",
				transactId: null,
				accountName: userForm.actName,
				accountNumber: createAcctData.actId,
				date: new Date,
				amt: this.randMonies(),
				user: createdUserData.user.uid
			}

			for (var i = 0, len = 10; i < len; i++) {
				transaction.amt = this.randMonies();
				this.addTransaction(transaction);
			}

			this.navCtrl.navigateForward('/home');
		})



	}



}

export class AuthenticationService {

	constructor() { }
}