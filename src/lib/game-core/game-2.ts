import {TimeCounter} from './time/time-counter';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';
import {GameMouseEvent, MouseEventType} from './events/game-mouse-event';
import {GameKeyboardEvent, KeyboardEventType} from './events/game-keyboard-event';
import {LocationMatrix} from './matrix/location-matrix';
import {Level} from './model/objects/level/level';
import {Vector} from './vector';
import {GameObj} from './model/objects/game-obj';

export abstract class Game2 {

  running:        boolean = false;
  isLoose:        boolean = false;
  followingActor: boolean  = false;

  showOuterFrames = false;
  outerFramesColor = '#596193';

  secondsTimerCounter = new TimeCounter(1000); // every second
  framesCounter = 0;
  turnsCounter = 0;
  framesPerSecond = 0;
  turnsPerSecond = 0;
  lastSecondFrameDuration = 0;
  framesCounterSubscription: Subscription;

  gameTimeFrame = 1;
  gameTimer: Subscription;

  mouse = new Subject<GameMouseEvent>();
  keyboard = new  Subject<GameKeyboardEvent>();


  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  gameObjects: GameObj[] = [];
  gameObjectsForDelete: GameObj[] = [];
  mousePos: Vector = new Vector(0, 0);

  worldSize: Vector = new Vector(0, 0);
  matrix: LocationMatrix;

  cameraInitialPos: Vector; // center of rendered canvas
  cameraPos: Vector; // in the beggining - this pos will be in center of rendered canvas
  cameraShift = new Vector(0,0); //
  cameraActorFrame: Vector; // frame size around camera where actor can getOffsetVector without camera movement

  actor: GameObj; // main game object - camera will follow this object

  level_n: number = 0;
  level: Level;

  constructor (xWorldSize: number, yWorldSize: number, matrixStepSize: number) {
    this.worldSize.x = xWorldSize;
    this.worldSize.y = yWorldSize;

    this.matrix = new LocationMatrix(matrixStepSize, this.worldSize);
    this.gameTimeFrame = 20;

  }

  public initCanvas(canvas: HTMLCanvasElement): void {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');

    this.cameraPos = new Vector( Math.floor(canvas.width / 2), Math.floor(canvas.height / 2) );
    this.cameraInitialPos = new Vector( this.cameraPos.x, this.cameraPos.y );
    this.cameraActorFrame = new Vector( Math.floor(canvas.width / 9), Math.floor(canvas.height / 8) );

  }

  public clearGameState() {
    this.pauseGame();
    this.matrix.forceClear();
    this.gameObjects.forEach(o => o.onRemovingFromGame());
    this.gameObjects = [];
    this.level = null;
  }

  public runLevel(levelNumber: number): void {
    this.clearGameState();
    this.level = this.initLevel(levelNumber);
    this.level_n = levelNumber;

    if (this.level) { this.add(this.level); }

    this.startGame();

  }

  abstract initLevel(levelNumber: number): Level;

  public goToNextLevel(): void {
    this.runLevel(this.level_n + 1);
  }

  private gameStep(): void {
    if (!this.running) { return; }
    this.gameActionTurn();
    this.turnsCounter++;
  }

  public gameActionTurn(): void {
    // step 01 - calling before-turn hooks
    this.gameObjects.forEach( (go: GameObj) => go.beforeTurn() ); this.deleteMarkedElements();

    // step 02 - moving
    this.gameTurn_moving(); // on this step - objects cannot be removed

    // step 03 - handle objects crossing (applying actions on objects touching)
    this.gameTurn_crossing(); this.deleteMarkedElements();

    // step 04 - calling before-turn hooks
    this.gameObjects.forEach( (go: GameObj) => go.afterTurn()  ); this.deleteMarkedElements();

    // step 05 - checking the current level on completion. todo: move this login inside "Level" class
    if (this.level) {
      if (this.level.isCompleted && !this.level.isFinishingAnimation) {
        this.goToNextLevel();
      }
    }

    // step 06 - moving 'camera' to meet a new position of the actor
    if (this.followingActor && this.actor) { this.followActor() }
  }

  private gameTurn_moving(): void {
    const len = this.gameObjects.length;
    for (let i = 0; i < len; i++) {
      let go = this.gameObjects[i];
      if (go.mover) {
        go.pBefore.setAs( go.p );
        go.mover.move();
        if (!(go.p.equals(go.pBefore))) {
          this.matrix.update(go);
        }
      }
    }
  }

  private gameTurn_crossing(): void {
    // todo: implement
  }

  private paint(): void {
    if (!this.running) { return; }
    this.gameFrameDraw();
    this.framesCounter ++;
    requestAnimationFrame(() => this.paint());
  }

  public startGame(): void {
    if (this.running) { return; }

    this.gameTimer = Observable.timer(500, this.gameTimeFrame)
      .subscribe(
        () => this.gameStep()
      );

    this.secondsTimerCounter.isItTime();
    this.secondsTimerCounter.fixLastChecking();

    this.framesCounterSubscription = Observable.timer(1000, 1000).subscribe(() => {
      if (this.secondsTimerCounter.isItTime()) {
        this.secondsTimerCounter.fixLastChecking();
        this.lastSecondFrameDuration = this.secondsTimerCounter.lastDuration;

        this.framesPerSecond = Math.floor(this.framesCounter / this.lastSecondFrameDuration * 1000);
        this.framesCounter = 0;

        this.turnsPerSecond = Math.floor(this.turnsCounter / this.lastSecondFrameDuration * 1000);
        this.turnsCounter = 0;
      }
    });


    this.running = true;
    this.paint();
  }

  public pauseGame(): void {
    this.running = false;
    if (this.gameTimer) { this.gameTimer.unsubscribe(); }
    if (this.framesCounterSubscription) { this.framesCounterSubscription.unsubscribe(); }
  }

  public toggleStartPause () {
    if (this.running) {
      this.pauseGame();
    } else {
      this.startGame();
    }
  }

  public loose(): void {
    this.isLoose = true;
  }

  private followActor(): void {
    const p = this.actor.p;

    if (p.x < this.cameraPos.x - this.cameraActorFrame.x) {
      this.cameraPos.x = Math.floor(p.x + this.cameraActorFrame.x);
      this.cameraShift.x = this.cameraInitialPos.x - this.cameraPos.x;
    } else if (p.x > this.cameraPos.x + this.cameraActorFrame.x) {
      this.cameraPos.x = Math.floor(p.x - this.cameraActorFrame.x);
      this.cameraShift.x = this.cameraInitialPos.x - this.cameraPos.x;
    }

    if (p.y < this.cameraPos.y - this.cameraActorFrame.y) {
      this.cameraPos.y = Math.floor(p.y + this.cameraActorFrame.y);
      this.cameraShift.y = this.cameraInitialPos.y - this.cameraPos.y;
    } else if (p.y > this.cameraPos.y + this.cameraActorFrame.y) {
      this.cameraPos.y = Math.floor(p.y - this.cameraActorFrame.y);
      this.cameraShift.y = this.cameraInitialPos.y - this.cameraPos.y;
    }

  }

  public resetCanvasTransform() {
    // affine matrix (rotate and movement)
    // [ cos(phi)  sin(phi)  0 ]
    // [-sin(phi)  cos(phi)  0 ]
    // [ tx        ty        1 ]

    // affine matrix (scaling)
    // [ Kx        0         0 ]
    // [ 0         Ky        0 ]
    // [ 0         0         1 ]

    // (dx,dy) - the offset to follow the camera
    let dx = 0; let dy = 0;
    if (!this.cameraPos.equals( this.cameraInitialPos )){
      dx = this.cameraInitialPos.x - this.cameraPos.x;
      dy = this.cameraInitialPos.y - this.cameraPos.y
    }

    this.ctx.setTransform(
      1, 0,
      0, 1,
      dx, dy
    );

  }

  public gameFrameDraw(): void {
    this.gameObjects.forEach( (gameObj: GameObj) => { if (gameObj.drawer) {
      this.resetCanvasTransform();
      gameObj.drawer.draw();
      if (this.showOuterFrames) {
        this.resetCanvasTransform();
        this.ctx.beginPath();
        this.ctx.rect(gameObj.p.x + gameObj.outerFrame.x, gameObj.p.y + gameObj.outerFrame.y, gameObj.outerFrame.w, gameObj.outerFrame.h );
        this.ctx.strokeStyle = this.outerFramesColor;
        this.ctx.stroke();
      }
    }});
  }

  public add(gameObj: GameObj): void {
    gameObj.id = this.getNextId();
    gameObj.game = this;
    this.gameObjects.push( gameObj );
    this.matrix.update(gameObj); // todo: check, maybe not all objects should be registered in crossing matrix
    gameObj.onAddIntoGame(this);
  }

  protected del(gameObj: GameObj): void {
    this.rmFromArr(this.gameObjects, gameObj);
    this.matrix.remove(gameObj);
    gameObj.game = null;
    if (gameObj === this.actor) { this.pauseGame(); }
  }

  protected rmFromArr(arr: any[], obj: any) {
    const i = arr.indexOf(obj);
    if (i !== -1) { arr.splice(i, 1); }
  }

  public markForDelete(gameObj: GameObj): void {
    this.gameObjectsForDelete.push( gameObj );
  };

  private deleteMarkedElements(): void {
    if (this.gameObjectsForDelete.length === 0) { return; }
    this.gameObjectsForDelete.forEach( it => this.del( it ) );
    this.gameObjectsForDelete.length = 0;
  }

  public     onMouseMove(event: MouseEvent): void { this.processMouseEvent(event, MouseEventType.MOVE); }
  public     onMouseDown(event: MouseEvent): void { this.processMouseEvent(event, MouseEventType.DOWN); }
  public       onMouseUp(event: MouseEvent): void { this.processMouseEvent(event, MouseEventType.UP);   }
  public    onMouseClick(event: MouseEvent): void { this.processMouseEvent(event, MouseEventType.CLICK);}
  public    onMouseEnter(event: MouseEvent): void { this.processMouseEvent(event, MouseEventType.ENTER);}
  public    onMouseLeave(event: MouseEvent): void { this.processMouseEvent(event, MouseEventType.LEAVE);}
  public onMouseDblClick(event: MouseEvent): void { this.processMouseEvent(event, MouseEventType.DBL_CLICK);}

  public  onKeyboardDown(event: KeyboardEvent): void { this.processKeyboardEvent(event, KeyboardEventType.DOWN);}
  public    onKeyboardUp(event: KeyboardEvent): void { this.processKeyboardEvent(event, KeyboardEventType.UP);}
  public onKeyboardPress(event: KeyboardEvent): void { this.processKeyboardEvent(event, KeyboardEventType.PRESS);}

  private processMouseEvent(event: MouseEvent, type: MouseEventType): void {
    this.mousePos.setVector(event.layerX - this.cameraShift.x, event.layerY - this.cameraShift.y);
    this.mouse.next( new GameMouseEvent(event, type, this.mousePos.copy()) );
  }
  private processKeyboardEvent(event: KeyboardEvent, type: KeyboardEventType): void {
    this.keyboard.next( new GameKeyboardEvent(event, type) );
  }

  public onDestroy(): void {
    this.gameTimer.unsubscribe();
    this.framesCounterSubscription.unsubscribe();
  }

  private _idCounter = 0;
  public getNextId(): number { return ++this._idCounter; }


}
