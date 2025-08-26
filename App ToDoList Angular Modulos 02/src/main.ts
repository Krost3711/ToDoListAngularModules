import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

import { registerLocaleData } from '@angular/common'; // Para registrar los datos de la configuracion regional
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs, 'es');

// Con esto declaro cual va ser el Modulo con el cual la Aplicacion va a Iniciar
platformBrowserDynamic().bootstrapModule(AppModule)



