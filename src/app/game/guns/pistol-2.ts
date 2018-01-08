import {Gun} from './gun';
import {PointBullet} from '../bullets/point-bullet';
import {GameObj} from '../../../lib/game-core/objects/game-obj';

export class Pistol2 extends Gun {

  constructor() {
    super('medium pistol', false, 10, 18, 500);
  }

  public makeBullet(actor: GameObj): GameObj {
      return new PointBullet(
        actor.p.x + 20 * actor.eye.x,
        actor.p.y + 20 * actor.eye.y,
        2,
        2,
        '#7f87e2',
        actor.eye
      );
  }

}
