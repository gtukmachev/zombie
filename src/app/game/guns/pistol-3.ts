import {Gun} from './gun';
import {PointBullet} from '../bullets/point-bullet';
import {GameObj} from '../../../lib/game-core/objects/game-obj';

export class Pistol3 extends Gun {

  constructor() {
    super('Magnum pistol', false, 3, 20, 1000);
  }

  public makeBullet(actor: GameObj): GameObj {
      return new PointBullet(
        actor.p.x + 20 * actor.eye.x,
        actor.p.y + 20 * actor.eye.y,
        3,
        3,
        '#7be2b7',
        actor.eye
      );
  }

}
