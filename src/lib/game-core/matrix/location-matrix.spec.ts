import 'jasmine';
import {LocationMatrix} from './location-matrix';
import {Vector} from '../vector';

describe('Location Matrix', () => {
  
  const matrixSize = 10;
  const worldSize = new Vector(1080, 1024);
  
  let matrix: LocationMatrix;
  
  beforeEach(() => {
    matrix = new LocationMatrix(matrixSize, worldSize);
  });
  
  
  it("Should be constructed", () => {
    expect(matrix).toBeDefined();
  });
  
});
