import {ManagerGameObject} from '../../../lib/game-core/manager-game-object';
import {Game} from '../../../lib/game-core/game';
import {TextGameObject} from '../../../lib/game-core/text-game-object';


export abstract class Level extends ManagerGameObject {

  protected n: number;

  protected caption: TextGameObject;

  constructor(n: number) {
    super();
    this.n = n;
  }


  public onAddIntoGame(game: Game): void {
    super.onAddIntoGame(game);
    this.caption = this.createCaption();
    if (this.caption) {
      this.caption.isDrawable = false;
      game.add( this.caption );
    }
    this.initLevelScenario();
  }

  abstract initLevelScenario(): void;

  protected createCaption(): TextGameObject {
    return new TextGameObject(`Level ${this.n}`, 50, 'Arial', '#f7ffb4', '#4e9c94')
  }


  afterTurn(): void {
    if (this.caption) {
      this.caption.r += 1;
      if (this.caption.r > 100) this.game.markForDelete(this.caption);
      this.caption = null;
    }
  }

  public onRemovingFromGame(): void {
    super.onRemovingFromGame();
    this.caption = null;
  }

}
