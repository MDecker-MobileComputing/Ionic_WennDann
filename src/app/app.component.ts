import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  /** Array enthält für jeden Menü-Eintrag ein Objekt mit den keys `titel` und `ziel`. */
  private menueEintraegeArray: Array<Object>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {

    this.fuelleMenueEintrageArray();
    this.initializeApp();
  }

  initializeApp() {

    this.platform.ready().then(() => {

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


  /**
   * Füllt Member-Variable `menueEintraegeArray` mit einem
   * Element pro Navigationsziel/Seite.
   */
  private fuelleMenueEintrageArray() {

    this.menueEintraegeArray = [
      {
        titel: "Zufallszahlen 1",
        ziel: "/home"
      },
      {
        titel: "Zufallszahlen 2",
        ziel: "/seite2"
      },
      {
        titel: "Zufallszahlen 3",
        ziel: "/seite3"
      },
      {
        titel: "Zufällige Stadt 1",
        ziel: "/seite4"
      },
      {
        titel: "Zufällige Stadt 2",
        ziel: "/seite5"
      }
    ];
  }

}
