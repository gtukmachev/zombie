import {AngleType, GameObj} from '../../../lib/game-core/objects/game-obj';
import {Zombie} from '../zombies/zombie';
import {SuitsDrawer} from '../../../lib/game-core/drawers/suits-drawer';
import {TowerMover} from './tower-mover';
import {TowerDrawer} from './tower-drawer';
import {Pistol2} from '../guns/pistol-2';


export class TowerGun1 extends GameObj {

  target: GameObj;
  locked = false;
  minAngle = Math.PI / 16;
  angleSpeed = Math.PI / 90;
  gun = new Pistol2();
  
  
  constructor(x: number, y: number) {
      super(x, y,
          new TowerDrawer(),
          new TowerMover()
      );
      (<SuitsDrawer>this.drawer).currentSuitNumber = 0;
      
      this.angleType = AngleType.ON_EYE;
      this.r = 500;
      this.scale = 0.2;
      this.feetInBottom = false;
  }


  public beforeTurn(): void {
      super.beforeTurn();
  
      if (this.target == null) {
          let minDist = 999999;
  
          // find a new target: the nearest Zombie
          this.game.matrix.applyForNearestObjects(this, (z) => {
              //todo: optimize = search across a small number of zombies per turn (5 - 10 items only)
              if (z instanceof Zombie && z.isAlife) {
                  const dist = this.p.distanceTo(z.p);
                  if (dist < minDist) {
                      minDist = dist;
                      this.target = z;
                  }
              }
          });

      } else {
          
          if ((<Zombie>this.target).isAlife) {
            
              if (this.locked) {
                  this.gun.isShotModeOn = true;
                  const bullet = this.gun.shot(this);
                  if (bullet) { this.game.add(bullet); }
              }
            
          } else {
              this.target = null;
          }

      }
     
  }
  
  

}

