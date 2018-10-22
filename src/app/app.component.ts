import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AuthService } from '../services/authentication/authentication.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Account',
      url: '/account-settings',
      icon: ''
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthService,
    private navCtrl: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // this.checkLogIn();

    });
  }

  async checkLogIn() {
    const user = await this.auth.isLoggedIn()
    if (user) {
      console.log(user);
      this.navCtrl.navigateForward('/home');
    } else {
      console.log("User is logged out");
      this.navCtrl.navigateForward('/login');
   }
 }
}
