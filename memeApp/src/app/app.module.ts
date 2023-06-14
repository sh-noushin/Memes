import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MemeGeneratorComponent } from './meme-generator/meme-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MemeGeneratorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
