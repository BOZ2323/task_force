import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';


import { AppComponent } from './app.component';
import { WidgetComponent } from './components/widget/widget.component';


@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class BaseAppModule { }  // was: AppModule

///////////////////////



