import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCommonModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { PluginLoaderComponent } from './plugin.component';

@NgModule({
  declarations: [
    AppComponent,
    PluginLoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCommonModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
