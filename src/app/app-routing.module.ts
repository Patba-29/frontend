import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FacturaComponent} from './factura/factura.component';
import {ProductoComponent} from './producto/producto.component';
const routes: Routes = [
  {path:'',                  component: FacturaComponent},
  {path:'producto',          component: ProductoComponent},
  // debe ir de ultimo, que puede ser cualquier caso
  //{path:'**',               component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
