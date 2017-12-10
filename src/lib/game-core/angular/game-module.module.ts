import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GameScreenFieldComponent} from './game-screen-field/game-screen-field.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GameScreenFieldComponent
  ],
  exports: [
    GameScreenFieldComponent
  ]
})
export class GameModuleModule {

}
