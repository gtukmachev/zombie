import {Component} from '@angular/core';
import {Game} from '../lib/game-core/game';
import {ZombiesGame} from './game/zombies-game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  game: Game;


  constructor() {
    //this.game = new TestGame();
    this.game = new ZombiesGame();
  }


  public go(): void { this.game.toggleStartPause(); }
  public restart(): void {
    this.game.clearGameState();
    this.game.initLevel(0);
    this.game.gameFrameDraw();
  }

}
