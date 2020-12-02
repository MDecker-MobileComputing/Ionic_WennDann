import { Component } from '@angular/core';

@Component({
  selector: 'app-seite5',
  templateUrl: './seite5.page.html',
  styleUrls: ['./seite5.page.scss'],
})
export class Seite5Page  {

  /** Array von Codes, aus denen jeder für eine Stadt steht. */
  private readonly CODE_ARRAY = [ "A1", "B2", "C3", "D4" ];

  /** Member-Variable, die von `ngSwitch` ausgewertet wird. Enthält einen zufällig ausgewählten Code aus `CODE_ARRAY`. */
  private zufaelligerCode = "";

  /**
   * Immer wenn die Seite neu geladen wird, dann wird in dieser Lifecycle-Methode
   * ein neuer Code aus einer Liste zufällig ausgewählt und in die Member-Variable
   * geschrieben.
   */
  private ionViewWillEnter() {

    const zufallsIndex = Math.floor( Math.random() * this.CODE_ARRAY.length );

    this.zufaelligerCode = this.CODE_ARRAY[zufallsIndex];
  }

}
