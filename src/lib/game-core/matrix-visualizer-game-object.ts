import {GameObject} from './game-object';
import {Game} from './game';

export class MatrixVisualizerGameObject extends GameObject {

  public isDrawable = true;
  public colorPassive: string | CanvasGradient | CanvasPattern;
  public colorActive: string | CanvasGradient | CanvasPattern;
  public font: string;

  constructor (field: Game, font:string, colorPassive: string | CanvasGradient | CanvasPattern, colorActive: string | CanvasGradient | CanvasPattern) {
    super(field, 0, 0);
    this.colorPassive = colorPassive;
    this.colorActive = colorActive;
    this.font = font;
  }


  draw (): void {
    let ctx = this.game.ctx;

    ctx.lineWidth = 1;
    ctx.strokeStyle = this.colorPassive;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.font = this.font;

    const mx = this.game.worldSize.x;
    const my = this.game.worldSize.y;
    const s = this.game.matrix.size;

    ctx.beginPath();
    for( let x = 0; x < mx; x += s ) { ctx.moveTo(x, 0); ctx.lineTo(x, my); }
    for( let y = 0; y < my; y += s ) { ctx.moveTo(0, y); ctx.lineTo(mx, y); }
    ctx.stroke();

    ctx.strokeStyle = this.colorActive;
    const index = this.game.matrix.index;

    for (let l = 0; l < index.length; l++) {
      let line = index[l];
      for (let c = 0; c < line.length; c++) {
        let objectsList = line[c];
        if (objectsList.length > 0) {
          ctx.rect(c*s, l*s, (c+1)*s, (l+1)*s);
          this.game.ctx.fillText(`${objectsList.length}`,c*s, l*s );
        }
      }
    }

    //this.game.ctx.strokeText(this.text,this.game.worldSize.x / 2, this.game.worldSize.y / 2 );
  }

  beforeTurn (): void {
  }

  turn (): void {
  }

  afterTurn (): void {
  }
}
