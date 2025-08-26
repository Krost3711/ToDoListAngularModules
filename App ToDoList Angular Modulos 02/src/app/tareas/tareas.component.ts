import { Component, Input } from '@angular/core';
import { TareasService } from './tareas.service';

// Tareas fue creado con el comando ng g c tareas --skip-tests
// Esto creo tareas css, html y ts

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css',
})
export class TareasComponent {
  @Input({ required: true }) idUsuario!: string;
  @Input({ required: true }) nombre!: string;

  estaAgregandoTareaNueva = false;

  constructor(private tareasService: TareasService) {}
  // Esto es lo mismo que utilizar el inject de tarea.component.ts
  // private tareasService = inject(TareasService);
  // El constructor es la forma mas tradicional.

  get tareasUsuarioSelecionado() {
    return this.tareasService.obtenerTareasDeUsuario(this.idUsuario);
    // Esto viene desde el servicio tareas.services.ts
  }

  alIniciarNuevaTarea() {
    // ?
    this.estaAgregandoTareaNueva = true;
  }

  alCerrarTareaNueva() {
    // ?
    this.estaAgregandoTareaNueva = false;
  }
}
