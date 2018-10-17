import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { NavController, MenuController } from '@ionic/angular';

@Injectable()
export class AuthService {
	private user: firebase.User;

	constructor(
		public afAuth: AngularFireAuth,
		public navCtrl: NavController,
		private menuCtrl: MenuController,

	) {
		afAuth.authState.subscribe(user => {
			this.user = user;
		});
	}

	signUpWithEmailAndPassword(newUser){
		this.afAuth.auth.createUserWithEmailAndPassword(
		  newUser.email,
		  newUser.password
		).then((user) => {
			this.navCtrl.navigateForward('/home'), { user : user };
		})
		.catch(error => console.log(error));
	}

	signInWithEmail(credentials) {
		// Log in with the email registered on Firebase
		this.afAuth.auth.signInWithEmailAndPassword(
			credentials.email,
			credentials.password
		).then((user) => {
			this.navCtrl.navigateForward('/home'), { user : user };
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


}

export class AuthenticationService {

	constructor() { }
}