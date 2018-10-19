import {Mover} from '../../../lib/game-core/movers/mover';
import {TowerGun1} from './tower-gun-1';
import {Vector} from '../../../lib/game-core/vector';

export class TowerMover extends Mover {



  move(): void {

    const tower = <TowerGun1>this.gObj;
    const eyeAngle = tower.eye.angle();

    if ( !(tower.target == null) ) {
      const t = tower.target.p;

      const targetAngle = new Vector( t.x - tower.p.x, t.y - tower.p.y ).norm().angle();

      const angleDelta = Math.abs(eyeAngle - targetAngle);

      if ( angleDelta < tower.minAngle ) {
        tower.locked = true;
      }

      if (angleDelta < tower.angleSpeed) {
        tower.setEyeDirectionOn( t );
      } else {
        // todo: ROTATE ON target
        tower.eye.setAngle(eyeAngle + tower.angleSpeed);
      }
    } else {
      tower.eye.setAngle(eyeAngle + tower.angleSpeed);
    }

  }
}
