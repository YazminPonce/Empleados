import { Component, OnInit } from '@angular/core';
import { EmpleadoService, Empleado } from '../empleado.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  empleados?: Empleado[];

  constructor(private empleadoService: EmpleadoService) {}

  ngOnInit() {
    this.empleados = this.empleadoService.obtenerEmpleados();
  }

  eliminarEmpleado(index: number) {
    this.empleadoService.eliminarEmpleado(index);
    this.empleados = this.empleadoService.obtenerEmpleados();
  }
}
