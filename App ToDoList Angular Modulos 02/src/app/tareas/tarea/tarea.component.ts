import { Component, inject, Input } from '@angular/core';
import { type Tarea } from './tarea.model';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.css'
})

export class TareaComponent {

  @Input({ required: true }) tarea!: Tarea;

  private tareasService = inject(TareasService); 
  // Aqui estamos inyectando el Servicio con todas sus funciones que vienen de tareas.service.ts
  // Importante entender que el contructor utilizando en tareas.components es otra forma de inyectar el servicio.
  // Ejemplo: constructor(private tareasService: TareasService) {}

  // Funcion que llama a eliminarTarea desde el Servicio tareas.services.ts
  alCompletarTarea() {
    this.tareasService.eliminarTarea(this.tarea.id);
  }
}
