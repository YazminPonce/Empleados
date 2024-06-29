import { Injectable } from '@angular/core';

export interface Empleado {
  nombre: string;
  correo: string;
  telefono: string;
  fechaNacimiento: string;
  sexo: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private empleados: Empleado[] = [];

  constructor() {}

  agregarEmpleado(empleado: Empleado) {
    this.empleados.push(empleado);
  }

  obtenerEmpleados() {
    return this.empleados;
  }

  eliminarEmpleado(index: number) {
    this.empleados.splice(index, 1);
  }
}
