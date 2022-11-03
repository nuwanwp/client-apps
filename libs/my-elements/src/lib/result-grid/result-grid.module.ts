import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultGridComponent } from './result-grid.component';
import { BaseWebComponentModule } from '../utils/base-web-component.module';

@NgModule({
  declarations: [ResultGridComponent],
  entryComponents: [ResultGridComponent],
  imports: [
    CommonModule
  ],
  exports: [ResultGridComponent]
})
export class ResultGridModule extends BaseWebComponentModule {
  constructor(injector: Injector) {
    super(injector, ResultGridComponent, 'result-grid');
  }
}
