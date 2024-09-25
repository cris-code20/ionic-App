import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConvertidorNumericoPageRoutingModule } from './convertidor-numerico-routing.module';

import { ConvertidorNumericoPage } from './convertidor-numerico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConvertidorNumericoPageRoutingModule
  ],
  declarations: [ConvertidorNumericoPage]
})
export class ConvertidorNumericoPageModule {}
