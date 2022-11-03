import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CustomElementsModule } from './custom-elements.module';

enableProdMode();

platformBrowserDynamic()
  .bootstrapModule(CustomElementsModule)
  .catch((err) => console.error(err));
