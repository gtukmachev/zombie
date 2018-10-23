import {AngleType, GameObj} from '../../../lib/game-core/objects/game-obj';
import {Zombie} from '../zombies/zombie';
import {TwoBlusterGun} from '../guns/two-bluster-gun';
import {Mover} from '../../../lib/game-core/movers/mover';
import {Vector} from '../../../lib/game-core/vector';
import {ImagesSuitsDrawer} from '../../../lib/game-core/drawers/images-suits-drawer';
import {TargetMarker} from '../target-markers/target-marker';
import {Game2} from '../../../lib/game-core/game-2';


export class TowerGun1 extends GameObj {

  _target: GameObj;
        set target(t: GameObj) {
          this._target = t;
          this.targetMarker.target = t;
        }
        get target(): GameObj { return this._target; }
  
  _locked = false;
        set locked(l: boolean) {
            this._locked = l;
            if (this.targetMarker) {
              this.targetMarker.locked = l;
            }
        }
        get locked(): boolean { return this._locked; }
        
  minAngle = Math.PI / 16;
  angleSpeed = Math.PI / 90;
  gun = new TwoBlusterGun();
  targetMarker = new TargetMarker();
  
  constructor(x: number, y: number) {
      super(x, y,
          new TowerDrawer(),
          new TowerMover()
      );
      (<TowerDrawer>this.drawer).currentSuitNumber = 0;
  
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
  
  
  onAddIntoGame(game: Game2): void {
    super.onAddIntoGame(game);
    game.add(this.targetMarker);
  }
  
  
  onRemovingFromGame(): void {
    this.game.markForDelete( this.targetMarker );
    super.onRemovingFromGame();
  }
  
}

export class TowerDrawer extends ImagesSuitsDrawer<TowerGun1> {
  
  constructor() {
    super(["assets/tower1.png"], false);
  }
  
}


export class TowerMover extends Mover<TowerGun1> {
  move(): void {
    
    const tower = <TowerGun1>this.gObj;
    const eyeAngle = tower.eye.angle();
    
    if (tower.target == null) { // search a target
      tower.eye.setAngle(eyeAngle + tower.angleSpeed);
      
    } else { // track the target
      
      const t = tower.target.p; // target position
      const targetAngle = new Vector( t.x - tower.p.x, t.y - tower.p.y ).norm().angle();
      const angleDelta = Math.abs(eyeAngle - targetAngle);
      
      if ( angleDelta < tower.minAngle ) {
        tower.locked = true;
        tower.setEyeDirectionOn( t ); // rotate TO the target
      } else {
        tower.locked = false;
        tower.eye.setAngle(eyeAngle + tower.angleSpeed); // continue rotation
      }
      
    }
    
    
  }
  
}
