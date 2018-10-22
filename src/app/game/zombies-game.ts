import {TransparentBackground} from '../../lib/game-core/objects/background/transparent-background';
import {Actor} from './actor/actor';
import {TextGameObject} from '../../lib/game-core/objects/text/text-game-object';
import {Level1} from './levels/level-1';
import {Level} from '../../lib/game-core/objects/level/level';
import {Level2} from './levels/level-2';
import {Level3} from './levels/level-3';
import {Game2} from '../../lib/game-core/game-2';
import {GameObj} from '../../lib/game-core/objects/game-obj';
import {Vector} from '../../lib/game-core/vector';
import {MatrixVisualizerGameObject} from '../../lib/game-core/matrix/matrix-visualizer-game-object';
import {TowerGun1} from './towers/tower-gun-1';

export class ZombiesGame extends Game2 {



  backGround: GameObj;
  actor: Actor;


  constructor () {
    super(1280, 720, 80);
    //this.gameTimeFrame = 20;
    this.showOuterFrames = true;
    //this.followingActor = true;
    this.backGround  = new TransparentBackground();
    this.actor       = new Actor(Math.floor(this.worldSize.x / 2), Math.floor(this.worldSize.y / 2) );

    this.cameraPos = this.actor.p.copy();
    this.cameraInitialPos = this.cameraPos.copy();

  }


  public initCanvas(bgCanvas: HTMLCanvasElement, canvas: HTMLCanvasElement): void {
    super.initCanvas(bgCanvas, canvas);
    this.cameraActorFrame = new Vector( Math.floor(this.canvas.width / 4), Math.floor(this.canvas.height / 4) );
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
    this.actor.refreshLife();

    this.add( this.backGround  );
    this.add( this.actor       );
    //this.add( new WorldFrameObject('#f3ffa2') );
    this.add( new MatrixVisualizerGameObject('Arial', '#727b4c', '#f3ffa2') );
    //this.add( new CameraFrameObject('#727b4c') );

    this.add( new TowerGun1( this.worldSize.x/2 + 30, this.worldSize.y/2 + 30 ) );

    this.actor.moveOn_xy(this.worldSize.x/2, this.worldSize.y/2);
    this.actor.setDirectionOn_xy(1,0);
    this.actor.suit = Math.floor(Math.random()*11) + 1;
    this.actor.s.x = 0;
    this.actor.s.y = 0;

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
    this.actor.drawHealth(this.ctx);


  }
}
