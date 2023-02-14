import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FristComponent } from './component/frist/frist.component';
import { SecoundComponent } from './component/secound/secound.component';

@NgModule({
  declarations: [
    AppComponent,
    FristComponent,
    SecoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
