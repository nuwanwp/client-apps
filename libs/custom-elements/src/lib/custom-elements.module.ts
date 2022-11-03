import { Injector, NgModule } from '@angular/core';
import { ResultGridComponent } from './result-grid/result-grid.component';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { ResultGridModule } from './result-grid/result-grid.module';

@NgModule({
  imports: [
      BrowserModule,
      ResultGridModule
  ],
  providers: [],
  exports : [ResultGridModule]
})
export class CustomElementsModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
      const customElement = createCustomElement(ResultGridComponent, {injector: this.injector});
      customElements.define('app-button', customElement);
  }
}
