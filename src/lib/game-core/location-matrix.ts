import {GameObject} from './game-object';
import {Pos} from './position';

export class LocationMatrix {

  public size;

  public index: Array<Array<Array<GameObject>>>; // map matrix cel (l,c) -> set of objects inside this ceil
  public positions: MatrixPosIndex= {}; // map object -> ceils of the matrix where this project present

  public lines: number;
  public columns: number;

  private worldSize: Pos;

  constructor(size, worldSize: Pos) {
    this.size = size;
    this.worldSize = worldSize.copy();
    this.forceClear();
  }

  public forceClear(): void {
    this.lines = Math.ceil(this.worldSize.y / this.size) + 1;
    this.columns = Math.ceil(this.worldSize.x / this.size) + 1;

    this.index = [];
    for (let l = 0; l < this.lines; l++) {
      this.index[l] = [];
      for (let c=0; c < this.columns; c++) {
        this.index[l][c] = [];
      }
    }

    this.positions = {};
  }

  public remove(o: GameObject): void {
    const id = `${o.id}`;
    const prevPositions = this.positions[id];
    if (prevPositions) {
      for (let l = prevPositions.lb; l <= prevPositions.le; l++){
        let prevIndexLine = this.index[l];
        if (prevIndexLine) {
          for (let c = prevPositions.cb; c <= prevPositions.ce; c++) {

            const prevIndex = prevIndexLine[c];
            if (prevIndex) {
              this.removeFromSet(prevIndex, o);
            }

          }
        }
      }
    }

    this.positions[id] = undefined;
  }

  public update(o: GameObject): void {
    const id = `${o.id}`;

    const pTopY  = o.p.y + o.outerFrame.y;
    const pLeftX = o.p.x + o.outerFrame.x;


    const prevPositions: MatrixPos = this.positions[id];
    const newPositions: MatrixPos = {
      lb: Math.floor( pTopY                   / this.size), cb: Math.floor( pLeftX                   / this.size),
      le: Math.floor((pTopY + o.outerFrame.h) / this.size), ce: Math.floor((pLeftX + o.outerFrame.w) / this.size)
    };

    if (prevPositions && newPositions.lb === prevPositions.lb && newPositions.cb === prevPositions.cb
                      && newPositions.le === prevPositions.le && newPositions.ce === prevPositions.ce
    ) {
      return;
    }

    if (prevPositions) {


      for (let l = prevPositions.lb; l <= prevPositions.le; l++){
        let prevIndexLine = this.index[l];
        if (prevIndexLine) {
          for (let c = prevPositions.cb; c <= prevPositions.ce; c++) {

            const prevIndex = prevIndexLine[c];
            if (prevIndex) {
              this.removeFromSet(prevIndex, o);
            }

          }
        }
      }


      /*
        // removing from previous matrix parts/indexes
        for (let l = prevPositions.lb; l <= prevPositions.le; l++){
          let prevIndexLine = this.index[l];
          if (prevIndexLine) {

            for (let c = prevPositions.cb; c <= prevPositions.ce; c++) {
              if (
                !( l >= newPositions.lb && l <= newPositions.le)
                ||
                !( c >= newPositions.cb && l <= newPositions.ce)
              ) {
                const prevIndex = prevIndexLine[c];
                if (prevIndex) this.removeFromSet(prevIndex, o);
              }
            }
          }
        }
*/
    }

//    this.applyForRegion(newPositions, cellObjectsSet => this.addIntoSet(cellObjectsSet, o));

    for (let l = newPositions.lb; l <= newPositions.le; l++){

      let newIndexLine = this.index[l];

      if (newIndexLine) {
        for (let c = newPositions.cb; c <= newPositions.ce; c++) {
          const newIndex = newIndexLine[c];
          if (newIndex) {
            this.addIntoSet(newIndex, o);
          }
          /*if (
               !(prevPositions)
            ||
               !( l >= prevPositions.lb && l <= prevPositions.le)
            ||
              !( c >= prevPositions.cb && l <= prevPositions.ce)
          ) {
            const newIndex = newIndexLine[c];
            if (newIndex) {
              this.addIntoSet(newIndex, o);
            }
          }*/

        }
      }
    }

    this.positions[id] = newPositions;



  }

  public applyForNearestObjects(o: GameObject, callback: (GameObject) => void): void {
    this.applyForRegionObjects(this.positions[`${o.id}`], callback);
  }

  public applyForRegion(pos: MatrixPos, callback: (Array) => void) {
      if (pos) {
          for (let l = pos.lb; l <= pos.le; l++) {
              let line = this.index[l];
              if (line) {
                  for (let c = pos.cb; c <= pos.ce; c++) {
                      const col = line[c];
                      if (col) {
                        callback(col);
                      }
                  }
              }
          }
      }
  }

  public applyForRegionObjects(pos: MatrixPos, callback: (GameObject) => void) {
    this.applyForRegion(pos, index => index.forEach(callback));
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

interface MatrixPos {lb: number, cb: number, le: number, ce: number}
interface MatrixPosIndex {
  [key: string]: MatrixPos
}
