import {Game} from '../../lib/game-core/game';
import {TransparentBackground} from '../../lib/game-core/transparent-background';
import {GameObject} from '../../lib/game-core/game-object';
import {WorldFrameObject} from '../../lib/game-core/world-frame-object';
import {Actor} from './actor/actor';
import {Zombie} from './zombies/zombie';
import {TimeCounter} from '../../lib/game-core/time-counter';
import {TestLine} from './tests/test-line';
import {TestCircle} from './tests/test-circle';

export class TestGame extends Game {

  backGround: GameObject;

  line: TestLine;
  circle: TestCircle;

  constructor () { super(); }


  public initLevel(levelNumber: number): void {

    const xSize = this.worldSize.x;
    const ySize = this.worldSize.y;

    this.backGround  = new  TransparentBackground(this);

    this.add( this.backGround  );

    this.line =  new TestLine( this, xSize / 3 * 2, ySize / 4 );
    this.circle =  new TestCircle( this, this.line, xSize / 3, ySize / 4 * 2 );
    this.add( this.line );
    this.add( this.circle );

    this.add( new WorldFrameObject(this, '#f3ffa2') );

    this.gameTimeFrame = 20;
  }
}
