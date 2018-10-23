import {GameObj} from '../../../lib/game-core/objects/game-obj';
import {ImagesSuitsDrawer} from '../../../lib/game-core/drawers/images-suits-drawer';
import {Mover} from '../../../lib/game-core/movers/mover';


export class TargetMarker extends GameObj {
  
  
    constructor(x: number, y: number) {
        super(x, y,
            new ImagesSuitsDrawer<TargetMarker>(
                [ "assets/target-marker1.png"
                , "assets/target-marker2.png"
                , "assets/target-marker3.png"
                ],
                false
            ),
            new TargetMarkerMover());
    }
    
    
  
  
}

export class TargetMarkerMover extends Mover<TargetMarker> {
  
  constructor() {
    super();
  }
  
  move(): void {
  }
  
  
}
