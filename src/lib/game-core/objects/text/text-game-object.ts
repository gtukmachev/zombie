import {GameObj} from '../game-obj';
import {SimpleTextDrawer} from '../../drawers/simple-text-drawer';

export class TextGameObject extends GameObj {

  constructor (x: number, y: number, text: string, size: number, font:string, color: string | CanvasGradient | CanvasPattern, fill: string | CanvasGradient | CanvasPattern) {
    super(x, y, new SimpleTextDrawer(color, fill, text, font), null);
    this.r = size;
  }

}
