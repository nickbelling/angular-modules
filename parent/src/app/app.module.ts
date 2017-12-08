import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCommonModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DynamicComponentLoader } from './dynamic-plugin-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicComponentLoader
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCommonModule,
    MatButtonModule,
  ],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
