import {TextGameObject} from '../text/text-game-object';
import {GameObj} from '../game-obj';
import {Game2} from '../../../game-2';


export abstract class Level extends GameObj {

  public n: number;
  protected textFillColor = '#3c3f41';
  protected textColor = '#f7ffb4';

  protected caption: TextGameObject;
  public isFinishingAnimation = false;
  public isCompleted = false;


  constructor(n: number) {
    super(0, 0, null, null);
    this.n = n;
  }


  public onAddIntoGame(game: Game2): void {
    super.onAddIntoGame(game);
    this.caption = this.createStartCaption();
    if (this.caption) {
      //this.caption.isDrawable = false;
      game.add( this.caption );
    }
    this.initLevelScenario();
  }

  abstract initLevelScenario(): void;

  protected createStartCaption(): TextGameObject {
    return new TextGameObject(this.game.worldSize.x/2, this.game.worldSize.y/4, `Level ${this.n}`, 50, 'Arial', this.textColor, this.textFillColor)
  }

  protected createCompleteCaption(): TextGameObject {
    return new TextGameObject(this.game.worldSize.x/2, this.game.worldSize.y/4, `Level ${this.n} completed` , 50, 'Arial', this.textColor, this.textFillColor)
  }


  afterTurn(): void {
    if (this.caption) {
      this.caption.r += 1.5;
      if (this.caption.r > 130) {
        this.game.markForDelete(this.caption);
        this.caption = null;
      }
    }

    if (this.isFinishingAnimation && !(this.caption)) {
        this.isFinishingAnimation = false;
    }

  }

  public onRemovingFromGame(): void {
    super.onRemovingFromGame();
    this.caption = null;
  }

  protected completeLevel(): void {
    this.isFinishingAnimation = true;
    this.isCompleted = true;

    this.caption = this.createCompleteCaption();
    if (this.caption) { this.game.add( this.caption ); }

  }

}
