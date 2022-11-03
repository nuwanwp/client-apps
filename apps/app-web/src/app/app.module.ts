import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomElementsModule } from 'libs/custom-elements/src';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CustomElementsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
