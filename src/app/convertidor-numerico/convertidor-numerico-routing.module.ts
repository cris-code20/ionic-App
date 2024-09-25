import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConvertidorNumericoPage } from './convertidor-numerico.page';

const routes: Routes = [
  {
    path: '',
    component: ConvertidorNumericoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConvertidorNumericoPageRoutingModule {}
