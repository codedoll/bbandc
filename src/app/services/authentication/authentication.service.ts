import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Subscription } from 'rxjs';

@Injectable()
export class AuthService {

	private user: firebase.User;

	constructor(
		public afAuth: AngularFireAuth
	) {
		afAuth.authState.subscribe(user => {
			this.user = user;
		});
	}

	signInWithEmail(credentials) {
		// Log in with the email registered on Firebase
		return this.afAuth.auth.signInWithEmailAndPassword(
			credentials.email,
			credentials.password
		);
	}

	signOut() {
		this.afAuth.auth.signOut()
	}

	getUserId() {
		return this.user.uid;
	}


}

export class AuthenticationService {

	constructor() { }
}