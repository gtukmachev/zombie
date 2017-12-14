import {AngleType, GameObject} from './game-object';
import {Pos} from './position';

export abstract class CachedFilmGameObject<T> extends GameObject {

  static framesCache: any = { target: 'cache'};

  draw (): void {
    const currentFrameDescr:  FilmFrameDescription<T> = this.getCurrentFilmFrameDescription();
    let actualFrame:  FilmFrameDescription<T>;

    if (currentFrameDescr.key in CachedFilmGameObject.framesCache ) {
      actualFrame = CachedFilmGameObject.framesCache[currentFrameDescr.key];
    } else {

      const frameCanvas = <HTMLCanvasElement> document.createElement('canvas');
      frameCanvas.width = currentFrameDescr.size.x;
      frameCanvas.height = currentFrameDescr.size.y;
      const frameCtx: CanvasRenderingContext2D = frameCanvas.getContext('2d');

      this.drawFrame(frameCtx, currentFrameDescr);

      actualFrame = currentFrameDescr.withImage( frameCanvas );
      CachedFilmGameObject.framesCache[currentFrameDescr.key] = actualFrame;
    }

    // affine matrix (rotate and movement)
    // [   cos(a)    sin(a)   0  ]
    // [  -sin(a)    cos(a)   0  ]
    // [   tx        ty       1  ]
    let cosa = 1;
    let sina = 0;
    if (this.angleType === AngleType.ON_MOVEMET) {
      cosa = this.directionVector.x; sina = this.directionVector.y;
    } else if (this.angleType === AngleType.ON_EYE) {
      cosa = this.eyeDirectionVector.x; sina = this.eyeDirectionVector.y;
    }

    this.game.ctx.transform(
       cosa*this.scale,     sina*this.scale,
      -sina*this.scale,     cosa*this.scale,
       this.p.x, this.p.y
    );

    this.game.ctx.drawImage( actualFrame.image,
      -actualFrame.center.x,
      -actualFrame.center.y,
    );

  }

  abstract getCurrentFilmFrameDescription(): FilmFrameDescription<T>;
  abstract drawFrame(frameCtx: CanvasRenderingContext2D, frameDescr: FilmFrameDescription<T> );

}

export class FilmFrameDescription<T> {
  get key(): string {
    return this._key;
  }

  get size(): Pos {
    return this._size;
  }

  get center(): Pos {
    return this._center;
  }

  get details(): T {
    return this._details;
  }

  get image(): HTMLCanvasElement {
    return this._image;
  }

  private _key: string;
  private _size: Pos;
  private _center: Pos;
  private _details: T;
  private _image: HTMLCanvasElement;


  constructor(key: string, size: Pos, center: Pos, details: T) {
    this._key = key;
    this._size = size;
    this._center = center;
    this._details = details;
  }

  withImage(image: HTMLCanvasElement): FilmFrameDescription<T> {
    const v = new FilmFrameDescription(this._key, this._size, this._center, this._details);
    v._image = image;
    return v;
  }

}
