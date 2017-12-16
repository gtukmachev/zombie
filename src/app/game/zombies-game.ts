import {Game} from '../../lib/game-core/game';
import {TransparentBackground} from '../../lib/game-core/transparent-background';
import {GameObject} from '../../lib/game-core/game-object';
import {WorldFrameObject} from '../../lib/game-core/world-frame-object';
import {Actor} from './actor/actor';
import {TextGameObject} from '../../lib/game-core/text-game-object';
import {Level1} from './levels/level-1';
import {Level} from '../../lib/game-core/level';
import {Level2} from './levels/level-2';
import {Level3} from './levels/level-3';

export class ZombiesGame extends Game {

  //showOuterFrames = true;

  backGround: GameObject;
  actor: Actor;


  constructor () {
    super();
    //this.gameTimeFrame = 20;
    this.followingActor = false;
    this.backGround  = new TransparentBackground();
    this.actor       = new Actor(Math.floor(this.worldSize.x / 2), Math.floor(this.worldSize.y / 2) );
  }


  public initLevel(levelNumber: number): Level {
    this.init_standard_objects();
         if (levelNumber === 1) { return new Level1(); }
    else if (levelNumber === 2) { return new Level2(); }
    else if (levelNumber === 3) { return new Level3(); }
    return null;
  }

  private init_standard_objects(): void {
    //this.add( new MatrixVisualizerGameObject('15px Arial', '#6b6e70', '#f68200' ) );
    //this.actor.suit
    this.isLoose = false;
    this.actor.withHelth(500, 30);

    this.add( this.backGround  );
    this.add( this.actor       );
    this.add( new WorldFrameObject('#f3ffa2') );

    this.actor.moveTo(this.worldSize.x/2, this.worldSize.y/2);
    this.actor.setDirectionOn_xy(1,0);
    this.actor.suit = Math.floor(Math.random()*11) + 1;
    this.actor.speedVector.x = 0;
    this.actor.speedVector.y = 0;

  }

  public loose(): void {
    super.loose();
    this.add( new TextGameObject(this.worldSize.x/2, this.worldSize.y/2, 'Game Over !', 80, 'Arial', '#ff7716', '#6b6e70' ) );
  }

  public gameActionTurn(): void {
    super.gameActionTurn();

  }


  public gameFrameDraw(): void {
    super.gameFrameDraw();

    this.ctx.setTransform(
      1, 0,
      0, 1,
      0, 0
    );
    this.actor.gun.drawBullets(this.ctx);
    this.actor.drawHelth(this.ctx);


  }
}
