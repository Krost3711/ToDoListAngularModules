import { Injectable } from '@angular/core';
import { type NuevaTareaInfo } from './tarea/tarea.model';

@Injectable({ providedIn: 'root' }) // Hacer que el Servicio sea Inyectable
export class TareasService {
  private tareas = [
    {
      id: 't1',
      idUsuario: 'u1',
      titulo: 'Dominar Angular',
      resumen:
        'Apreder todas las características básicas y avanzasAngular cómo apicarlas.',
      expira: '2025-01-01',
    },
    {
      id: 't2',
      idUsuario: 'u3',
      titulo: 'Crear el primer prototipo',
      resumen: 'Crear el primer prototipo del sitio web de la tienda',
      expira: '2025-11-05',
    },
    {
      id: 't3',
      idUsuario: 'u3',
      titulo: 'Preparar la plantilla del carrito',
      resumen:
        'Preparar y describir una plantilla de carrito de compras de la tienda online',
      expira: '2025-05-16',
    },
  ];

  // Conectar con una Base de Datos Local. En Este caso un JSON
  constructor() {
    const tareas = localStorage.getItem('tareas');

    if (tareas) {
      this.tareas = JSON.parse(tareas);
    }
  }

  // Obtener las Tareas Especificas de cada Usuario.
  obtenerTareasDeUsuario(idUsuario: string) {
    return this.tareas.filter((tarea) => tarea.idUsuario === idUsuario);
  }

  // Agregar Tarea Especifica al un Usuario
  agregarTarea(infoDeTarea: NuevaTareaInfo, idUsuario: string) {
    this.tareas.unshift({
      id: new Date().getTime().toString(),
      titulo: infoDeTarea.titulo,
      resumen: infoDeTarea.resumen,
      expira: infoDeTarea.fecha,
      idUsuario: idUsuario,
    });

    // Para que se guarde la modificacion cuando se agregue una tarea.
    this.guardarTareas(); // Es decir, actualizamos la tarea.
  }

  // Quitar la Tarea del Usuario Especifico.
  eliminarTarea(id: string) {
    this.tareas = this.tareas.filter((tarea) => tarea.id !== id);
    // Para que se guarde la modificacion cuando se elimine una tarea.
    this.guardarTareas(); // Es decir, actualizamos la tarea.
    this;
  }

  // Metodo Auxiliar. Para Guardar las Tareas
  private guardarTareas() {
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
    // stringify se encarga de trasformar en un string lo que existe en tareas.
  }
}
