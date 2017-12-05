

import {Gun} from './gun';
import {GameObject} from '../../../lib/game-core/game-object';
import {PointBullet} from '../bullets/point-bullet';

export class MachineGun extends Gun {

  constructor() {
    super(300, 1000);
  }

  public makeBullet(actor: GameObject): GameObject {
      return new PointBullet(
        actor.game,
        actor.p.x + 40 * actor.eyeDirectionVector.x,
        actor.p.y + 40 * actor.eyeDirectionVector.y,
        actor.eyeDirectionVector
      );
  }

}
