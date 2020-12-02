import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Seite6PageRoutingModule } from './seite6-routing.module';

import { Seite6Page } from './seite6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Seite6PageRoutingModule
  ],
  declarations: [Seite6Page]
})
export class Seite6PageModule {}
