import { JsonMenuPage } from './../pages/json-menu/json-menu';
import { BarcodeScannerPage } from './../pages/barcode-scanner/barcode-scanner';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { GmapPage } from './../pages/gmap/gmap';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Icon } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SocialInfoPage } from '../pages/social-info/social-info';





@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'เกียวกับฉัน', component:SocialInfoPage, icon:'arrow-dropright'},
      { title: 'Home', component: HomePage, icon:'arrow-dropright' },
      { title: 'List', component: ListPage, icon:'arrow-dropright' },
      { title: 'scaner', component: BarcodeScannerPage, icon:'arrow-dropright' },
      { title: 'map', component: GmapPage, icon:'arrow-dropright' },
      { title: 'JsonMenu', component: JsonMenuPage, icon:'arrow-dropright' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
