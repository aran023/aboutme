import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{SMS} from '@ionic-native/sms';


@IonicPage()
@Component({
  selector: 'page-phone-book-detail',
  templateUrl: 'phone-book-detail.html',
})
export class PhoneBookDetailPage {
  contact = {name: '', telephon: '',imageUrl:''};
  constructor(public navCtrl: NavController, public navParams: NavParams, public mysms: SMS) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookDetailPage');
    this.contact = this.navParams.data;
    console.log(this.contact);

  }
  call(){
    window.open('tel:'+this.contact.telephon);
  }
  sms(){
    this.mysms.send(this.contact.telephon, 'Hello woeld');
  }

}//end
