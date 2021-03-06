import {SimpleGameObj} from '../objects/simple-draw-game-obj';
import {HashSetOfGameObjects} from './location-matrix';

export class MatrixVisualizerGameObject extends SimpleGameObj {
  
  public colorPassive: string | CanvasGradient | CanvasPattern;
  public colorActive: string | CanvasGradient | CanvasPattern;
  public font: string;
  
  constructor(font: string, colorPassive: string | CanvasGradient | CanvasPattern, colorActive: string | CanvasGradient | CanvasPattern) {
    super(0, 0);
    this.colorPassive = colorPassive;
    this.colorActive = colorActive;
    this.font = font;
  }
  
  
  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.lineWidth = 1;
    ctx.strokeStyle = this.colorPassive;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.font = this.font;
    
    const mx = this.game.worldSize.x;
    const my = this.game.worldSize.y;
    const s = this.game.matrix.size;
    
    ctx.beginPath();
    for (let x = 0; x < mx; x += s) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, my);
    }
    for (let y = 0; y < my; y += s) {
      ctx.moveTo(0, y);
      ctx.lineTo(mx, y);
    }
    ctx.stroke();
    
    
    ctx.strokeStyle = this.colorActive;
    ctx.fillStyle = this.colorActive;
    const index = this.game.matrix.index;
    
    for (let l = 0; l < index.length; l++) {
      let line = index[l];
      for (let c = 0; c < line.length; c++) {
        let objectsSet: HashSetOfGameObjects = line[c];
        if (objectsSet) {
          let count = 0;
          for (let objId in objectsSet) {
            count++;
          }
          if (count > 0) {
            ctx.beginPath();
            ctx.rect(c * s, l * s, s, s);
            ctx.stroke();
          }
          this.game.ctx.fillText(`${count}`, c * s, l * s);
        }
      }
    }
    
  }
}
