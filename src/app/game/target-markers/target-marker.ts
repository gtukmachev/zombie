import {GameObj} from '../../../lib/game-core/objects/game-obj';
import {ImagesSuitsDrawer} from '../../../lib/game-core/drawers/images-suits-drawer';
import {Mover} from '../../../lib/game-core/movers/mover';


export class TargetMarker extends GameObj {
  
    target: GameObj;
    locked = false;
  
    constructor() {
        super(0, 0, new TargetMarkerDrawer(), new TargetMarkerMover());
        
        this.r = 37;
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
      false
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
