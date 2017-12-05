

import {GameObject} from '../../../lib/game-core/game-object';
import {TimeCounter} from '../../../lib/game-core/time-counter';

export abstract class Gun {

  protected reloadingDuration: TimeCounter;

  public capacity: number;
  public bullets: number;
  protected isRelodingInProcess = false;


  constructor(capacity: number, reloadingDuration: number) {
    this.capacity = capacity;
    this.bullets = capacity;
    this.reloadingDuration = new TimeCounter(reloadingDuration);
  }

  public shot(actor: GameObject): GameObject {

    if (this.bullets > 0) {
      this.bullets -= 1;
      return this.makeBullet(actor);
    } else {
      this.startReaload();
    }

    return null;
  }

  public abstract makeBullet(actor: GameObject): GameObject;


  public startReaload(): void {
    if (this.isRelodingInProcess) {
      return;
    }
    this.isRelodingInProcess = true;
    this.reloadingDuration.isItTime();
    this.reloadingDuration.fixLastChecking();
    this.bullets = 0;
  }

  public finishReloading(): void {
    if (this.isRelodingInProcess && this.reloadingDuration.isItTime()) {
      this.bullets = this.capacity;
      this.isRelodingInProcess = false;
    }
  }

}
