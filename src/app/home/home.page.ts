import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  /**
   * Member-Variable mit Zufallszahl, wird durch Interpolation dargestellt
   * und von Lifecycle-Methode gefüllt.
   */
  private zufallszahl : number = -1;

  /** Bool'sche Variable, die genau dann `true` ist, wenn `zufallszahl` eine gerade Zahl ist. */
  private istGerade = false;


  /**
   * Zuweisung einer neuen Zufallszahl von 1 bis 99 wenn Seite neu geladen wird.
   */
  private ionViewWillEnter() {

    this.zufallszahl = 1 + Math.round( Math.random()*99 );

    if (this.zufallszahl % 2 === 0) {

        this.istGerade = true;

    } else {

        this.istGerade = false;
    }
  }

}
