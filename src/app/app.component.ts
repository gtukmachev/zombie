import {Component} from '@angular/core';
import {Game} from '../lib/game-core/game';
import {ZombiesGame} from './game/zombies-game';
import {CachedFilmGameObject} from '../lib/game-core/cached-film-game-object';

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
  public restartGame(): void {
    this.game.runLevel(1);
    this.game.startGame();
  }
  public restartLevel(): void {
    this.game.runLevel(this.game.level_n);
    this.game.startGame();
  }

  public CachedFilmGameObjectFCL(): number {
    return Object.keys(CachedFilmGameObject.framesCache).length;
  }


}
