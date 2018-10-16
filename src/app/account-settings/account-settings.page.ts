import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.page.html',
  styleUrls: ['./account-settings.page.scss'],
})
export class AccountSettingsPage implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  signOut() {
    this.auth.signOut()
  };

}
