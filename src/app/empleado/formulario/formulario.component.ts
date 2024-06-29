import { Component } from '@angular/core';
import { EmpleadoService, Empleado } from '../empleado.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  empleado: Empleado = { nombre: '', correo: '', telefono: '', fechaNacimiento: '', sexo: '' };

  constructor(private empleadoService: EmpleadoService) {}

  agregarEmpleado() {
    const form = document.querySelector('.needs-validation') as HTMLFormElement;
    if (form.checkValidity() === false) {
      form.classList.add('was-validated');
      return;
    }
    this.empleadoService.agregarEmpleado(this.empleado);
    this.empleado = { nombre: '', correo: '', telefono: '', fechaNacimiento: '', sexo: '' };
    form.classList.remove('was-validated');
  }
}
