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
  protected name: string = 'gun';

  public isShotModeOn = false;

  protected constructor(name: string, isAutomatic: boolean, shotSpeed: number, capacity: number, reloadingDurationMillis: number) {
    this.isAutomatic = isAutomatic;
    this.shotSpeed = shotSpeed;
    this.capacity = capacity;
    this.bullets = capacity;
    this.reloadingTimer = new TimeCounter(reloadingDurationMillis);
    this.shotTimer = new TimeCounter(1000 / shotSpeed);
    this.name = name;
  }


  public shot(actor: GameObj): GameObj {
    if (!this.isShotModeOn) { return; }
    
    if (this.isReloadingInProcess) { this.finishReloading(); }
    if (this.isReloadingInProcess) { return; }

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

    let path = new Path2D();
    for (let i = 0; i < this.bullets; i++) {

      path.moveTo(10 + (i % 100)*5, 30 + (Math.floor(i / 100))* 10 );
      path.lineTo(10 + (i % 100)*5, 30 + (Math.floor(i / 100))* 10 + 7);

    }
    ctx.stroke(path);

    ctx.lineWidth = 1;
    //ctx.strokeStyle = 'white';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.font = `12px Arial`;
    ctx.fillStyle = 'white';

      ctx.fillText(this.name, 10, 15);

  }

  public startReload(): void {
    if (this.isReloadingInProcess) {
      return;
    }
    this.isReloadingInProcess = true;
    this.reloadingTimer.startFromNow();
    this.bullets = 0;
  }

  protected finishReloading(): void {
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
