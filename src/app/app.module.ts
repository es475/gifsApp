import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { GifsModule } from './gifs/gifs.module';
import { SidebarModule } from './sidebar/sidebar.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SidebarModule,
    GifsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
