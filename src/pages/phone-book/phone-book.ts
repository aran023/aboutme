import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class PhoneBookPage {

  contacArray = [
    { name: 'Mouse',telephon:'0950979240',imageUrl:'assets/imgs/pic1.jpg'}
    ,{ name: 'Mon',telephon:'0950979240',imageUrl:'assets/imgs/pic2.png'}
    ,{ name: 'Minian',telephon:'0950979240',imageUrl:'assets/imgs/pic3.jpg'}
    ,{ name: 'Lufy',telephon:'0950979240',imageUrl:'assets/imgs/pic4.png'}
  ];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }

  viewDetail(item){
    this.navCtrl.push("PhoneBookDetailPage", item);
  }

}//end class
