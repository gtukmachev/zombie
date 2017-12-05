import {Game} from '../../lib/game-core/game';
import {TransparentBackground} from '../../lib/game-core/transparent-background';
import {GameObject} from '../../lib/game-core/game-object';
import {WorldFrameObject} from '../../lib/game-core/world-frame-object';
import {Actor} from './actor/actor';
import {Zombie} from './zombies/zombie';
import {TimeCounter} from '../../lib/game-core/time-counter';

export class ZombiesGame extends Game {

  backGround: GameObject;
  actor: Actor;

  private ztc = new TimeCounter(1000);

  constructor (canvas: HTMLCanvasElement, xSize: number, ySize: number) {
    super(canvas, xSize, ySize);

    this.backGround  = new  TransparentBackground(this);
    this.actor       = new       Actor(this, Math.floor(xSize / 2), Math.floor(ySize / 2) );
    this.followingActor = false;

    this.add( this.backGround  );
    this.add( this.actor       );

    let zr = 30;
    this.add( new Zombie(this, zr,       zr) );
    this.add( new Zombie(this, xSize-zr, zr) );
    this.add( new Zombie(this, xSize-zr, ySize-zr) );
    this.add( new Zombie(this, zr,       ySize-zr) );

    this.add( new WorldFrameObject(this, '#f3ffa2') );

    this.gameTimeFrame = 20;
  }

  public gameActionTurn(): void {
    super.gameActionTurn();

    if (this.ztc.isItTime()) {
      this.ztc.fixLastChecking();

      let factor = this.rnd01();
      let zx, zy :number;

      if (Math.random() > 0.5) { zx = factor        * this.worldSize.x; zy = Math.random() * this.worldSize.y }
      else                     { zx = Math.random() * this.worldSize.x; zy = factor        * this.worldSize.y}


      this.add( new Zombie( this, zx, zy ) );
    }
  }

  public rnd01() { return Math.round(Math.random()); }

  public onMouseDown(event: MouseEvent   ) { super.onMouseDown(event); this.actor.onMouseDown(event); }
  public onMouseUp  (event: MouseEvent   ) {                           this.actor.onMouseUp(event);   }
  public onKeyDown  (event: KeyboardEvent) {                           this.actor.onKeyDown(event);   }
  public onKeyUp    (event: KeyboardEvent) {                           this.actor.onKeyUp(event);     }


}
