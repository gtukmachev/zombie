import {Gun} from './gun';
import {PointBullet} from '../bullets/point-bullet';
import {GameObj} from '../../../lib/game-core/objects/game-obj';

export class Pistol1 extends Gun {

  constructor() {
    super('small pistol', false, 2, 10, 500);
  }

  public makeBullet(actor: GameObj): GameObj {
      return new PointBullet(
        actor.p.x + 20 * actor.eye.x,
        actor.p.y + 20 * actor.eye.y,
        1.5,
        3,
        '#bbbbbb',
        actor.eye
      );
  }

}
