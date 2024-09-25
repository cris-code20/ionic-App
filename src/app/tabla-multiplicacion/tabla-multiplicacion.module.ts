import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TablaMultiplicacionPageRoutingModule } from './tabla-multiplicacion-routing.module';

import { TablaMultiplicacionPage } from './tabla-multiplicacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TablaMultiplicacionPageRoutingModule
  ],
  declarations: [TablaMultiplicacionPage]
})
export class TablaMultiplicacionPageModule {}
