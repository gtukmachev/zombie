import {Vector} from '../vector';
import {GameObj} from '../objects/game-obj';

export class LocationMatrix {
  
  public size;
  
  public index: Array<Array<HashSetOfGameObjects>>; // map "matrix cell (l,c)" -> "set of objects inside this cell"
  public positions: MatrixPosIndex = {}; // map object -> cells of the matrix where this object present
  
  public lines: number;
  public columns: number;
  
  private worldSize: Vector;
  
  constructor(size, worldSize: Vector) {
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
      for (let c = 0; c < this.columns; c++) {
        this.index[l][c] = {};
      }
    }
    
    this.positions = {};
  }
  
  public remove(o: GameObj): void {
    const id = `${o.id}`;
    const prevPositions = this.positions[id];
    if (prevPositions) {
      for (let l = prevPositions.lb; l <= prevPositions.le; l++) {
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
  
  public update(o: GameObj): void {
    if (!(o.outerFrame)) return;
    
    const id = `${o.id}`;
    
    const pTopY = o.p.y + o.outerFrame.y;
    const pLeftX = o.p.x + o.outerFrame.x;
    
    const prevPositions: MatrixPos = this.positions[id];
    const newPositions: MatrixPos = {
      lb: Math.floor(pTopY / this.size),
      cb: Math.floor(pLeftX / this.size),
      
      le: Math.floor((pTopY + o.outerFrame.h) / this.size),
      ce: Math.floor((pLeftX + o.outerFrame.w) / this.size)
    };
    
    if (prevPositions && newPositions.lb === prevPositions.lb && newPositions.cb === prevPositions.cb
      && newPositions.le === prevPositions.le && newPositions.ce === prevPositions.ce
    ) {
      return;
    }
    
    // todo: replace "REMOVE-at-all and ADD again" algorithm to INCREMENTAL matrix updating
    this.applyForSetsOfRegion(prevPositions, cellObjectsSet => {
      this.removeFromSet(cellObjectsSet, o);
    });
    
    this.applyForSetsOfRegion(newPositions, cellObjectsSet => {
      this.addIntoSet(cellObjectsSet, o);
    });
    
    this.positions[id] = newPositions;
  }
  
  public applyForNearestObjects(o: GameObj, callbackForGameObj: (GameObj) => void): void {
    this.applyForRegionObjects(this.positions[`${o.id}`], callbackForGameObj);
  }
  
  private applyForSetsOfRegion(pos: MatrixPos, callbackForGameObjSet: (HashSetOfGameObjects) => void) {
    if (pos) {
      for (let l = pos.lb; l <= pos.le; l++) {
        let line = this.index[l];
        if (line) {
          for (let c = pos.cb; c <= pos.ce; c++) {
            const objectsInTheMatrixCell: HashSetOfGameObjects = line[c];
            if (objectsInTheMatrixCell) {
              callbackForGameObjSet(objectsInTheMatrixCell);
            }
          }
        }
      }
    }
  }
  
  private applyForRegionObjects(pos: MatrixPos, callbackForGameObj: (GameObj) => void) {
    this.applyForSetsOfRegion(pos, (gameObjectsInCell: HashSetOfGameObjects) => {
      for (let objId in gameObjectsInCell) {
        callbackForGameObj(gameObjectsInCell[objId]);
      }
    });
  }
  
  
  private addIntoSet(set: HashSetOfGameObjects, o: GameObj): void {
    set[`${o.id}`] = o;
  }
  
  private removeFromSet(set: HashSetOfGameObjects, o: GameObj): void {
    delete set[`${o.id}`];
  }
  
}

interface MatrixPos {
  lb: number,
  cb: number,
  le: number,
  ce: number
}

interface MatrixPosIndex {
  [key: string]: MatrixPos
}

export interface HashSetOfGameObjects {
  [key: string]: GameObj
}
