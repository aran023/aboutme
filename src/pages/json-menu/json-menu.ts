import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, NavPush } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-json-menu',
  templateUrl: 'json-menu.html',
})
export class JsonMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JsonMenuPage');
  }
  choie(_ch_){
    if (_ch_ == 1) {
      this.navCtrl.push("SimpleJsonPage");
    } else if (_ch_ == 2) {
     alert("ยังกดไม่ได้ครับ")
    }else if (_ch_ == 3) {
      this.navCtrl.push("PostJsonPage");
    }
  }

}
