import {Gun} from './gun';
import {PointBullet} from '../bullets/point-bullet';
import {GameObj} from '../../../lib/game-core/objects/game-obj';

export class TwoBlusterGun extends Gun {

  constructor() {
    super('two-bluster gun', false, 20, 2, 700);
  }

  public makeBullet(actor: GameObj): GameObj {
      return new PointBullet(
        actor.p.x + 20 * actor.eye.x,
        actor.p.y + 20 * actor.eye.y,
        4,
        3,
        '#b559bb',
        actor.eye
      );
  }

}
