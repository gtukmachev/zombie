import {GameObj} from '../../../lib/game-core/objects/game-obj';
import {ImagesSuitsDrawer} from '../../../lib/game-core/drawers/images-suits-drawer';
import {Mover} from '../../../lib/game-core/movers/mover';


export class TargetMarker extends GameObj {
  
    target: GameObj;
    locked = false;
  
    private static initSize = 17;
    
    constructor() {
        super(0, 0, new TargetMarkerDrawer(), new TargetMarkerMover());
        
        this.r = TargetMarker.initSize;
    }
  
  
    beforeTurn(): void {
        if (this.target != null) {
            if (! this.locked) {
                this.scale = 1 + (1 + Math.sin( new Date().getTime()/100 )) / 2;
            } else {
                this.scale = 2;
            }
        }
        super.beforeTurn();
    }
}

class TargetMarkerMover extends Mover<TargetMarker> {
  
  constructor() {
    super();
  }
  
  move(): void {

      if (this.gObj.target != null) {
          this.gObj.p.setAs( this.gObj.target.p );
      }
    
  }
  
  
}

class TargetMarkerDrawer extends  ImagesSuitsDrawer<TargetMarker> {
  
  constructor() {
    super(
      [ "assets/target-marker1.png"
        , "assets/target-marker2.png"
        , "assets/target-marker3.png"
      ],
      true
    );
  
    this.resizeToObjectSize = true;
    
  }
  
  
  draw(): void {
    if (this.gObj.target != null) {
      this.currentSuitNumber = this.gObj.locked ? 0 : 2;
      //this.gObj.r = this.gObj.locked ? 32 : 40;
      
      super.draw();
    }
  }
}
