import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultGridComponent } from './result-grid.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [ResultGridComponent],
  entryComponents: [ResultGridComponent],
  imports: [
    CommonModule
  ],
  exports: [ResultGridComponent]
})
export class ResultGridModule {

  constructor(private injector: Injector) {

  }
}
