import { Component } from '@angular/core';

@Component({
  selector: 'app-seite2',
  templateUrl: './seite2.page.html',
  styleUrls: ['./seite2.page.scss'],
})
export class Seite2Page  {

  /**
   * Member-Variable mit Zufallszahl, wird durch Interpolation dargestellt
   * und von Lifecycle-Methode gefüllt.
   */
  private zufallszahl : number = -1;


  /**
   * Zuweisung einer neuen Zufallszahl von 1 bis 99 wenn Seite neu geladen wird.
   */
  private ionViewWillEnter() {

    this.zufallszahl = 1 + Math.round( Math.random()*99 );
  }

}
