import { Component } from '@angular/core';

@Component({
  selector: 'app-seite6',
  templateUrl: './seite6.page.html',
  styleUrls: ['./seite6.page.scss'],
})
export class Seite6Page {

    /** Liste von Produkten, die mit *ngFor angezeigt wird. */
    private readonly PRODUKTE_ARRAY = [
        {
            name: "Dockingstation für AX250",
            exklusiv: false
        },
        {
            name: "Laptop CA 3550",
            exklusiv: true
        },
        {
            name: "Laptop CA 3660",
            exklusiv: true
        },
        {
            name: "Audio Modul Z33",
            exklusiv: false
        }
    ];

}
