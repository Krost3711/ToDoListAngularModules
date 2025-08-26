import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID } from '@angular/core';
//**************************************************** */
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { UsuarioComponent } from './usuario/usuario.component';

import { CompartidaModule } from './compartida/tarjeta/compartida.module';
import { TareasModule } from './tareas/tareas.module';

@NgModule({
  declarations: [AppComponent, EncabezadoComponent, UsuarioComponent], // Aqui dentro va todos los componentes que debemos agrupar.
  bootstrap: [AppComponent], // Definimos que este es el componente Raiz
  imports: [BrowserModule, CompartidaModule, TareasModule], // Componentes Independientes
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
})
export class AppModule {}
