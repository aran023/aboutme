import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //property
  loginResult;

  constructor(public navCtrl: NavController) {

  }
  signIn(_username, _password){
    if (_password == '1234') {
      this.loginResult = 'ยินดีต้อนรับเข้าสู่ระบบครับ  ' + _username;
      this.navCtrl.push("PhoneBookPage");
    } else {
      this.loginResult = 'คุณ '+ _username + ' กดรหัสผิดครับ!!!'
      
    }
  }
}//end class
