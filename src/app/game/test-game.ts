import {TransparentBackground} from '../../lib/game-core/model/objects/background/transparent-background';
import {WorldFrameObject} from '../../lib/game-core/model/objects/camera/world-frame-object';
import {TestLine} from './tests/test-line';
import {TestCircle} from './tests/test-circle';
import {Level} from '../../lib/game-core/model/objects/level/level';
import {GameObj} from '../../lib/game-core/model/objects/game-obj';
import {Game2} from '../../lib/game-core/game-2';

export class TestGame extends Game2 {

  backGround: GameObj;

  line: TestLine;
  circle: TestCircle;

  constructor () { super(1280, 720, 60); }


  public initLevel(levelNumber: number): Level {

    const xSize = this.worldSize.x;
    const ySize = this.worldSize.y;

    this.backGround  = new  TransparentBackground();

    this.add( this.backGround  );

    this.line =  new TestLine(xSize / 3 * 2, ySize / 4 );
    this.circle =  new TestCircle(this.line, xSize / 3, ySize / 4 * 2 );
    this.add( this.line );
    this.add( this.circle );

    this.add( new WorldFrameObject('#f3ffa2') );

    this.gameTimeFrame = 20;

    return null;
  }
}
