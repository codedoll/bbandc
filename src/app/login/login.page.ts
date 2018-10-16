import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/authentication/authentication.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  private loginUser : FormGroup;
  private newUser: FormGroup;

  constructor(
    public afAuth: AngularFireAuth,
    private formBuilder: FormBuilder,
    private auth: AuthService
  ) { 

    // Log in user
    this.loginUser = this.formBuilder.group({
      email: ['', Validators.required],
      password: [''],
    });
    
    // Create a new user
    this.newUser = this.formBuilder.group({
      email: ['', Validators.required],
      password: [''],
    });

  }

  ngOnInit() {
  }

  signIn() {
    let loginUser = this.loginUser.value;
    return this.afAuth.auth.signInWithEmailAndPassword(
      loginUser.email,
      loginUser.password
      );
  }

  signOut() {
    this.afAuth.auth.signOut()

  };

  signUp() {
    // Create instance of newUser formgroup
    let newUser = this.newUser.value;
    return this.afAuth.auth.createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
      );
  }

}
