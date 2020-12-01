import { Component } from '@angular/core';

@Component({
  selector: 'app-seite4',
  templateUrl: './seite4.page.html',
  styleUrls: ['./seite4.page.scss'],
})
export class Seite4Page {

  /**
   * Member-Variable mit Zufallszahl, wird durch Interpolation dargestellt
   * und von Lifecycle-Methode gefüllt.
   */
  private zufallszahl : number = -1;


  /**
   * Zuweisung einer neuen Zufallszahl (1, 2, 3 oder 4).
   */
  private ionViewWillEnter() {

    this.zufallszahl = 1 + Math.round( Math.random()*3 );
  }

}
