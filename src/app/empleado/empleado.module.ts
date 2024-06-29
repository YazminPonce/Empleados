import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormularioComponent } from './formulario/formulario.component';
import { ListaComponent } from './lista/lista.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { TituloComponent } from './titulo/titulo.component';

@NgModule({
  declarations: [
    FormularioComponent,
    ListaComponent,
    EliminarComponent,
    TituloComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormularioComponent,
    ListaComponent,
    TituloComponent
  ]
})
export class EmpleadoModule { }
