import {TimeCounter} from '../../../lib/game-core/time/time-counter';
import {GameObj} from '../../../lib/game-core/objects/game-obj';

export abstract class Gun {

  protected reloadingTimer: TimeCounter;
  protected shotTimer: TimeCounter;

  public isAutomatic: boolean; // false - one shot per mouse click
  public shotSpeed: number;    // shots per second
  public capacity: number;     // amount of shots per single magazine
  public bullets: number;      // the current rest of bullets in the current ma
  protected isReloadingInProcess = false;

  public isShotModeOn = false;

  constructor(isAutomatic: boolean, shotSpeed: number, capacity: number, reloadingDurationMillis: number) {
    this.isAutomatic = isAutomatic;
    this.shotSpeed = shotSpeed;
    this.capacity = capacity;
    this.bullets = capacity;
    this.reloadingTimer = new TimeCounter(reloadingDurationMillis);
    this.shotTimer = new TimeCounter(1000 / shotSpeed);
  }


  public shot(actor: GameObj): GameObj {
    if (!this.isShotModeOn) { return; }

    if (this.bullets > 0) {
        this.bullets -= 1;
        if (!this.isAutomatic) { this.isShotModeOn = false; }
        return this.makeBullet(actor);
    } else {
        this.startReload();
    }

    return null;
  }

  public abstract makeBullet(actor: GameObj): GameObj;


  public drawBullets(ctx: CanvasRenderingContext2D) {

    ctx.lineWidth = 3;
    ctx.strokeStyle ='#b97686';

    for (let i = 0; i < this.bullets; i++) {
      this.drawBullet(ctx, i);
    }
  }

  public drawBullet(ctx: CanvasRenderingContext2D, i: number) {
    let path = new Path2D();

    path.moveTo(10 + (i % 100)*5, 10 + (Math.floor(i / 100))* 10 );
    path.lineTo(10 + (i % 100)*5, 10 + (Math.floor(i / 100))* 10 + 7);

    ctx.stroke(path);
  }

  public startReload(): void {
    if (this.isReloadingInProcess) {
      return;
    }
    this.isReloadingInProcess = true;
    this.reloadingTimer.startFromNow();
    this.bullets = 0;
  }

  public finishReloading(): void {
    if (this.isReloadingInProcess && this.reloadingTimer.isItTime()) {
      this.bullets = this.capacity;
      this.isReloadingInProcess = false;
    }
  }

  public onMouseDown(event: MouseEvent): void {
    this.isShotModeOn = true;
  }

  public onMouseUp(event: MouseEvent): void {
    this.isShotModeOn = false;
  }


}
