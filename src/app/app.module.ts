import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {GameModuleModule} from '../lib/game-core/angular/game-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GameModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
