import {Gun} from './gun';
import {PointBullet} from '../bullets/point-bullet';
import {GameObj} from '../../../lib/game-core/model/objects/game-obj';

export class MachineGun extends Gun {

  constructor() {
    super(300, 1200);
  }

  public makeBullet(actor: GameObj): GameObj {
      return new PointBullet(
        actor.p.x + 40 * actor.eye.x,
        actor.p.y + 40 * actor.eye.y,
        actor.eye
      );
  }

}
