import {Game} from '../../lib/game-core/game';
import {TransparentBackground} from '../../lib/game-core/transparent-background';
import {GameObject} from '../../lib/game-core/game-object';
import {CameraFrameObject} from '../../lib/game-core/camera-frame-object';
import {WorldFrameObject} from '../../lib/game-core/world-frame-object';
import {Actor} from './actor/actor';

export class ZombiesGame extends Game {


  backGround: GameObject;
  actor: Actor;

  constructor (canvas: HTMLCanvasElement, xSize: number, ySize: number) {
    super(canvas, xSize, ySize);


    this.backGround  = new  TransparentBackground(this);
    this.actor       = new       Actor(this, Math.floor(xSize / 2), Math.floor(ySize / 2) );

    this.add( this.backGround  );
    this.add( this.actor       );

    this.add( new CameraFrameObject(this, '#253c54') );
    this.add( new WorldFrameObject(this, '#f3ffa2') );

    this.gameTimeFrame = 20;

  }

  public onMouseMove(event: MouseEvent): void {
    super.onMouseMove(event);
    this.actor.setDirection(this.mousePos.x, this.mousePos.y);
  }

  public onMouseDown(event: MouseEvent): void {
    super.onMouseDown(event);
    this.actor.setDirection(this.mousePos.x, this.mousePos.y);
  }

}
