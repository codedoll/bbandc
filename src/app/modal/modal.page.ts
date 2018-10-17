import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  passedData;

  constructor( 
    private modalCtrl: ModalController,
    private navParams: NavParams
    ) {}

  ngOnInit() {
    this.passedData = this.navParams.get('passedData').acct_transactions;
    console.log(this.passedData)
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }


}
