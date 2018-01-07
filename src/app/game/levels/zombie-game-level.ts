import {Level} from '../../../lib/game-core/objects/level/level';
import {TimeCounter} from '../../../lib/game-core/time/time-counter';
import {Zombie} from '../zombies/zombie';

export abstract class ZombieGameAbstractLevel extends Level {

  protected waveTimer: TimeCounter;
  protected waveCounter: number;
  protected wavesAmount: number;

  constructor(levelNumber: number, wavesAmount: number, waveTimerMs: number, textFillColor: string, textStrokeColor: string) {
    super(levelNumber);
    this.textFillColor = textFillColor;
    this.textColor = textStrokeColor;
    this.waveTimer = new TimeCounter(waveTimerMs);
    this.waveCounter = 0;
    this.wavesAmount = wavesAmount;
  }

  abstract nextWave(): void;

  initLevelScenario(): void {
  }

  beforeTurn(): void {
    super.beforeTurn();
    if (this.waveCounter < this.wavesAmount && this.waveTimer.isItTime()) {
      this.waveTimer.fixLastChecking();
      this.waveCounter++;
      this.nextWave();
    }
  }

  afterTurn(): void {
    super.afterTurn();

    if (!this.isCompleted && this.waveCounter >= this.wavesAmount && !this.game.gameObjects.find(o => o instanceof Zombie )) {
      this.completeLevel();
    }

  }



}
