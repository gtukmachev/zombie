import {Drawer} from '../../drawers/drawer';
import {GameObj} from '../game-obj';

export class TransparentBackground extends GameObj {

  constructor () {
    super(0,0, new TransparentBackgroundDrawer(), null);
  }

}

class TransparentBackgroundDrawer extends Drawer<any> {

  draw(): void {
    // Draw background: optimized 'magic' hack-version
    this.gObj.game.canvas.width = this.gObj.game.canvas.width;
  }

}
