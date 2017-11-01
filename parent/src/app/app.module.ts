import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DynamicComponentLoader } from './dynamic-plugin-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicComponentLoader
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
