import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NuevaTareaInfo } from '../tarea/tarea.model';
import { TareasService } from '../tareas.service';

// Este es un Componente Independiente
@Component({
  selector: 'app-nueva-tarea',
  templateUrl: './nueva-tarea.component.html',
  styleUrl: './nueva-tarea.component.css',
})
export class NuevaTareaComponent {
  
  @Input({ required: true }) idUsuario!: string;

  @Output() cerrar = new EventEmitter<void>();

  @Output() agregar = new EventEmitter<NuevaTareaInfo>();

  tituloIngresado = '';

  resumenIngreado = '';

  fechaIngresada = '';

  private tareasService = inject(TareasService);

  alCancelar() {
    this.cerrar.emit();
  }

  alEnviar() {
    this.tareasService.agregarTarea(
      {
        titulo: this.tituloIngresado,
        resumen: this.resumenIngreado,
        fecha: this.fechaIngresada,
      },
      this.idUsuario
    );
    this.cerrar.emit();
  }
}
