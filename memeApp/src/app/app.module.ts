import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ColorChromeModule} from 'ngx-color/chrome';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MemeGeneratorComponent } from './meme-generator/meme-generator.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MemeGeneratorComponent
  ],
  imports: [
    BrowserModule,
    ColorChromeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
