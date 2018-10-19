import {AngleType, GameObj} from '../../../lib/game-core/objects/game-obj';
import {ImagesSuitsDrawer} from '../../../lib/game-core/drawers/images-suits-drawer';
import {Zombie} from '../zombies/zombie';
import {SuitsDrawer} from '../../../lib/game-core/drawers/suits-drawer';
import {TowerMover} from './tower-mover';
import {Pistol3} from '../guns/pistol-3';


export class TowerGun1 extends GameObj {

  target: GameObj;
  locked = false;
  minAngle = Math.PI / 8;
  angleSpeed = Math.PI / 90;
  gun = new Pistol3();

  constructor(x: number, y: number) {
    super(x, y, new ImagesSuitsDrawer(["assets/tower1.png"], false), new TowerMover());
    (<SuitsDrawer>this.drawer).currentSuitNumber = 0;
    this.angleType = AngleType.ON_EYE;
    this.r = 500;
    this.scale = 0.2;
  }


  public beforeTurn(): void {
     super.beforeTurn();

      let minDist = 999999;

      if (!(
        this.target
          && this.target instanceof Zombie
          && this.target.isAlife
      )){
          this.target = null;
          this.locked = false;
          this.gun.isShotModeOn = false;

          // find a new target: the nearest Zombie
          this.game.matrix.applyForNearestObjects(this, (z) => {
              if (z instanceof Zombie && z.isAlife) {
                  const dist = this.p.distanceTo(z.p);
                  if (dist < minDist) {
                      minDist = dist;
                      this.target = z;
                  }
              }
          });

      }

      if (this.locked) {
        this.gun.isShotModeOn = true;
        let bullet = this.gun.shot(this);
        if (bullet) { this.game.add(bullet); }
      }
  }


}

