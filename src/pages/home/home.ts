import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MidataService } from '../../services/midataService';
import { AuthPage } from '../auth/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public ms: MidataService) {

  }

  // swipe(event) {
  //   if(event.direction === 2) {
  //     this.navCtrl.parent.select(1);
  //   }
  // }

  logout() {
    this.ms.logout();
    this.navCtrl.setRoot(AuthPage);
  }
}
