import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InsecureComponent } from './components/insecure/insecure.component';
import { SecureComponent } from './components/secure/secure.component';

@NgModule({
  declarations: [
    AppComponent,
    InsecureComponent,
    SecureComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
