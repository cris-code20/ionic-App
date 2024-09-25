import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablaMultiplicacionPage } from './tabla-multiplicacion.page';

const routes: Routes = [
  {
    path: '',
    component: TablaMultiplicacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablaMultiplicacionPageRoutingModule {}
