import {GameObject} from '../../../lib/game-core/game-object';

export class Actor extends GameObject {

  isDrawable = true;


  draw(): void {

    this.fcCircle(this.p.x, this.p.y, 15, '#65b9b3', '#6a8dff')

  }

  beforeTurn(): void {
  }

  turn(): void {
  }

  afterTurn(): void {
  }
}
