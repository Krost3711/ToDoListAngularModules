import { Component } from '@angular/core';
import { USUARIOS_FALSOS } from './usuarios-falsos';

// Esta es la App GLOBAL
// La cual importa el Encabezado, los Usuarios y las Tareas.

@Component({
  selector: 'app-raiz', // Este Nombre fue el que se decidio utilizar.
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {

  usuarios = USUARIOS_FALSOS; // Esto viene desde un Arreglo, un Archivo .ts

  idUsuarioSeleccionado? : string; // *1 // Declaracion de la Propiedad

  alSeleccionarUsuario(id: string) { // *2
    this.idUsuarioSeleccionado = id; // Indicamos que la seleccion corresponde al Id
  }

   get usuarioSeleccionado(){ // -3
    // find es un metodo propietario de JavaScript
    return this.usuarios.find((usuario) => usuario.id == this.idUsuarioSeleccionado)!; 
    // Indicamos que dentro del Array Usuarios encuentre los datos del usuario segun si Id
  }

}
