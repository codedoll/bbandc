import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/authentication/authentication.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { MenuController, NavController } from '@ionic/angular';
import AuthProvider = firebase.auth.AuthProvider;
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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
    private auth: AuthService,
    private router: Router,
    private menuCtrl: MenuController,
    private navCtrl: NavController
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
    this.menuCtrl.enable(false);
  }

  signIn(){
    let loginUser = this.loginUser.value;
    this.auth.signInWithEmail(loginUser);
  }

  signUp() {
    let newUser = this.newUser.value;
    this.auth.signUpWithEmailAndPassword(newUser);
  }

}
