import { appConfig } from './app/app.config';

console.log(appConfig.apiUrl); // Exemple d'utilisation

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Assurez-vous que le chemin est correct

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
