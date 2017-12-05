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

    //this.add( new CameraFrameObject(this, '#253c54') );
    this.add( new WorldFrameObject(this, '#f3ffa2') );

    this.gameTimeFrame = 20;

  }

  public onMouseMove(event: MouseEvent): void {
    super.onMouseMove(event);
    this.actor.setEyeDirectionOn_xy(this.mousePos.x, this.mousePos.y);
  }

  public onMouseDown(event: MouseEvent): void {
    super.onMouseDown(event);
    this.actor.setEyeDirectionOn_xy(this.mousePos.x, this.mousePos.y);
    this.actor.isShotModeOn = true;
  }

  public onMouseUp(event: MouseEvent): void {
    this.actor.isShotModeOn = false;
  }


  public onKeyDown(event: KeyboardEvent) {
    if      (event.code === 'KeyW') {this.actor.m_up    = true; }
    else if (event.code === 'KeyS') {this.actor.m_down  = true; }
    else if (event.code === 'KeyA') {this.actor.m_left  = true; }
    else if (event.code === 'KeyD') {this.actor.m_right = true; }
  }

  public onKeyUp(event: KeyboardEvent) {
    if      (event.code === 'KeyW') {this.actor.m_up    = false; }
    else if (event.code === 'KeyS') {this.actor.m_down  = false; }
    else if (event.code === 'KeyA') {this.actor.m_left  = false; }
    else if (event.code === 'KeyD') {this.actor.m_right = false; }
  }

  public gameActionTurn(): void {
    super.gameActionTurn();

    if (this.ztc.isItTime()) {
      this.ztc.fixLastChecking();

      this.add( new Zombie( this, Math.random() * this.worldSize.x, Math.random() * this.worldSize.y ) );

    }

  }


  }
