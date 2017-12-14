import {GameObject} from './game-object';
import {Pos} from './position';
import {TimeCounter} from './time-counter';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';
import {GameMouseEvent, MouseEventType} from './events/game-mouse-event';
import {GameKeyboardEvent, KeyboardEventType} from './events/game-keyboard-event';
import {LocationMatrix} from './location-matrix';

export class Game {

  running: boolean = false;
  isLoose: boolean = false;

  showOuterFrames = false;
  outerFramesColor = '#596193';

  secondsTimerCounter = new TimeCounter(1000); // every second
  framesCounter = 0;
  turnsCounter = 0;
  framesPerSecond = 0;
  turnsPerSecond = 0;
  lastFrameDuration = 0;
  framesCounterSubscription: Subscription;

  gameTimeFrame = 1;
  gameTimer: Subscription;

  public mouse = new Subject<GameMouseEvent>();
  public keyboard = new  Subject<GameKeyboardEvent>();

  public followingActor = false;

  public canvas: HTMLCanvasElement;
  public ctx: CanvasRenderingContext2D;
  public gameObjects: GameObject[] = [];
  public gameObjectsForDelete: GameObject[] = [];
  public mousePos: Pos = new Pos(0, 0);

  public worldSize: Pos = new Pos(0, 0);
  public matrix: LocationMatrix;

  public cameraInitialPos: Pos; // center of rendered canvas
  public cameraPos: Pos; // in the beggining - this pos will be in center of rendered canvas
  public cameraShift = new Pos(0,0); //
  public cameraActorFrame: Pos; // frame size around camera where actor can getOffsetVector without camera movement

  public actor: GameObject; // main game object - camera will follow this object

  constructor () { }

  public init(canvas: HTMLCanvasElement, xWorldSize: number, yWorldSize: number, matrixStepSize): void {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.worldSize.x = xWorldSize;
    this.worldSize.y = yWorldSize;

    this.matrix = new LocationMatrix(matrixStepSize, this.worldSize);

    this.gameTimeFrame = 20;

    this.cameraPos = new Pos( Math.floor(canvas.width / 2), Math.floor(canvas.height / 2) );
    this.cameraInitialPos = new Pos( this.cameraPos.x, this.cameraPos.y );
    this.cameraActorFrame = new Pos( Math.floor(canvas.width / 9), Math.floor(canvas.height / 8) );

  }

  public clearGameState() {
    this.pauseGame();
    this.matrix.forceClear()
    this.gameObjects.forEach(o => o.onRemovingFromGame());
    this.gameObjects = [];
  }

  public initLevel(levelNumber: number): void {}

  private gameStep(): void {
    if (!this.running) { return; }
    this.gameActionTurn();
    this.turnsCounter++;
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
        this.lastFrameDuration = this.secondsTimerCounter.lastDuration;

        this.framesPerSecond = Math.floor(this.framesCounter / this.lastFrameDuration * 1000);
        this.framesCounter = 0;

        this.turnsPerSecond = Math.floor(this.turnsCounter / this.lastFrameDuration * 1000);
        this.turnsCounter = 0;
      }
    });


    this.running = true;
    this.paint();
  }

  public pauseGame(): void {
    this.running = false;
    this.gameTimer.unsubscribe();
    this.framesCounterSubscription.unsubscribe();
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

  public gameActionTurn(): void {
    if (this.followingActor && this.actor) { this.followActor() }
    this.gameObjects.forEach( (go: GameObject) => { go.checkHealth(); go.beforeTurn(); } ); this.deleteMarkedElements();
    this.gameObjects.forEach( (go: GameObject) => go.turn() );                             this.deleteMarkedElements();
    this.gameObjects.forEach( (go: GameObject) => go.afterTurn() );                        this.deleteMarkedElements();
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

  public gameFrameDraw(): void {
    this.gameObjects.forEach( (it: GameObject) => { if (it.isDrawable) {
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

        it.draw();
        if (this.showOuterFrames) {
          this.ctx.beginPath();
          this.ctx.rect(it.p.x + it.outerFrame.x, it.p.y + it.outerFrame.y, it.outerFrame.w, it.outerFrame.h );
          this.ctx.strokeStyle = this.outerFramesColor;
          this.ctx.stroke();
        }
    }});
  }

  public add(gameObject: GameObject): void {
    this.gameObjects.push( gameObject );
    gameObject.onAddIntoGame(this);

  }

  protected del(gameObject: GameObject): void {
    this.rmFromArr(this.gameObjects, gameObject);
    if (gameObject === this.actor) { this.pauseGame(); }
    this.matrix.remove(gameObject);
  }

  protected rmFromArr(arr: any[], obj: any) {
    const i = arr.indexOf(obj);
    if (i !== -1) { arr.splice(i, 1); }
  }

  public markForDelete(gameObject: GameObject): void {
    this.gameObjectsForDelete.push( gameObject );
  };

  private deleteMarkedElements(): void {
    if (this.gameObjectsForDelete.length === 0) { return; }

    this.gameObjectsForDelete.forEach( it => this.del( it ) );
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
