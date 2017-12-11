import {GameObject} from './game-object';
import {Pos} from './position';

export class LocationMatrix {

  public size;
  public index: Array<Array<Array<GameObject>>>; //[line][column] - list of elements in each line-column crossing

  // public positions: MatrixPositionsIndex = {};
  public positions: MatrixPosIndex= {};

  constructor(size, worldSize: Pos) {
    this.size = size;

    let lines = Math.ceil(worldSize.y / size) + 1;
    let columns = Math.ceil(worldSize.x / size) + 1;

    this.index = [];
    for (let l = 0; l < lines; l++) {
      this.index[l] = [];
      for (let c=0; c < columns; c++) {
        this.index[l][c] = [];
      }
    }

  }

  public remove(o: GameObject): void {
    const id = `${o.id}`;
    const prevPosition = this.positions[id];
    if (prevPosition) this.removeFromSet(this.index[prevPosition.l][prevPosition.c], o);
    this.positions[id] = undefined;
  }

  public update(o: GameObject): void {
    const id = `${o.id}`;

    const prevPosition = this.positions[id];
    const newPosition = {l: Math.floor(o.p.y / this.size), c: Math.floor(o.p.x / this.size)};

    if (prevPosition && (newPosition.l === prevPosition.l && newPosition.c === prevPosition.c) ) {
      return;
    }

    if (prevPosition) {
      const prevIndex = this.index[prevPosition.l][prevPosition.c];
      this.removeFromSet(prevIndex, o);
    }

    const newIndexLine = this.index[newPosition.l];
    if (newIndexLine){
      const newIndex = newIndexLine[newPosition.c];
      if (newIndex) {
        this.addIntoSet(newIndex, o);
        this.positions[id] = newPosition;
      }
    }


  }

  private addIntoSet(set: Array<GameObject>, o: GameObject): void {
    let i = 0;
    while (i < set.length && set[i] !== o) { i++; }
    if (i == set.length) set.push(o);
  }

  private removeFromSet(set: Array<GameObject>, o: GameObject): void {
    let i = 0;
    while (i < set.length && set[i] !== o) { i++; }
    if (i < set.length)  set.splice(i);
  }

}

interface MatrixPos {l: number, c: number}
interface MatrixPosIndex {
  [key: string]: MatrixPos
}
