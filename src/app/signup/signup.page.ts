import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/authentication/authentication.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { MenuController, NavController } from '@ionic/angular';
import AuthProvider = firebase.auth.AuthProvider;
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  private newUser: FormGroup;

  constructor(
    public afAuth: AngularFireAuth,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private menuCtrl: MenuController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    // Create a new user
    this.newUser = this.formBuilder.group({
      email: ['', Validators.required],
      password: [''],
    });
  }

  signUp() {
    let newUser = this.newUser.value;
    this.auth.signUpWithEmailAndPassword(newUser);
  }

}
