import {Game} from '../../lib/game-core/game';
import {TransparentBackground} from '../../lib/game-core/transparent-background';
import {GameObject} from '../../lib/game-core/game-object';
import {WorldFrameObject} from '../../lib/game-core/world-frame-object';
import {TestLine} from './tests/test-line';
import {TestCircle} from './tests/test-circle';
import {Level} from '../../lib/game-core/level';

export class TestGame extends Game {

  backGround: GameObject;

  line: TestLine;
  circle: TestCircle;

  constructor () { super(1280, 720, 60); }


  public initLevel(levelNumber: number): Level {

    const xSize = this.worldSize.x;
    const ySize = this.worldSize.y;

    this.backGround  = new  TransparentBackground();

    this.add( this.backGround  );

    this.line =  new TestLine( this, xSize / 3 * 2, ySize / 4 );
    this.circle =  new TestCircle( this, this.line, xSize / 3, ySize / 4 * 2 );
    this.add( this.line );
    this.add( this.circle );

    this.add( new WorldFrameObject('#f3ffa2') );

    this.gameTimeFrame = 20;

    return null;
  }
}
