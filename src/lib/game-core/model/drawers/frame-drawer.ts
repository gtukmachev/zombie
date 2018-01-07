import {Drawer} from './drawer';
import {Vector} from '../../vector';
import {AngleType} from '../objects/game-obj';


/**
 * The class FrameDrawer is basic for an easy objects drawing based on frames.
 * Each frame can be cached and reused in the future.
 * Also, this class takes care about:
 * <ul>
 *  <li>rotation (angle on speed-vector or on eye-vector)</li>
 *  <li>scaling</li>
 *  <li>positioning frame on game field</li>
 *  <li>opacity - doesn't implemented yet</li>
 * </ul>
 */
export abstract class FrameDrawer<T extends FrameDescription> extends Drawer {

  static framesCache: ClassesFramesCache = { };

  draw(): void {
    const currentFrameDescr: T = this.getCurrentFrameDescription();
    let actualFrame:  FrameDescription;

    const currentClassName = this.constructor.name;
    if (!(FrameDrawer.framesCache[currentClassName])) {
      FrameDrawer.framesCache[currentClassName] = {};
    }

    if (currentFrameDescr.key in FrameDrawer.framesCache ) {
      actualFrame = FrameDrawer.framesCache[currentClassName][currentFrameDescr.key];
    } else {

      const image: HTMLImageElement | HTMLCanvasElement | ImageBitmap | T
        = this.drawFrame(currentFrameDescr);

      if (image instanceof FrameDescription) {
        actualFrame = image;
      } else {
        actualFrame = currentFrameDescr.copyFrameDescriptionWithImage( image );
      }
      FrameDrawer.framesCache[currentClassName][currentFrameDescr.key] = actualFrame;

    }

    const ctx = this.gObj.game.ctx;
    const gObj = this.gObj;

    // affine matrix (rotate, movement, scale)
    // [   cos(a)*scale    sin(a)*scale   0  ]
    // [  -sin(a)*scale    cos(a)*scale   0  ]
    // [   tx              ty             1  ]
    let cosa = 1;

    let cosa_scale = 0;
    let sina_scale = 0;



    if (gObj.angleType === AngleType.ON_MOVEMET) {
      cosa = gObj.sd.x;
      if (gObj.scale === 1) {
        cosa_scale = gObj.sd.x;
        sina_scale = gObj.sd.y;
      } else {
        cosa_scale = gObj.sd.x * gObj.scale;
        sina_scale = gObj.sd.y * gObj.scale;
      }
    } else if (gObj.angleType === AngleType.ON_EYE) {
      cosa = gObj.eye.x;
      if (gObj.scale === 1) {
        cosa_scale = gObj.eye.x;
        sina_scale = gObj.eye.y;
      } else {
        cosa_scale = gObj.eye.x * gObj.scale;
        sina_scale = gObj.eye.y * gObj.scale;
      }
    }

    if (gObj.feetInBottom && cosa < 0) {
      ctx.transform(-1,0,0, 1,gObj.p.x, gObj.p.y);
      ctx.transform(
        -cosa_scale,  sina_scale,
        -sina_scale, -cosa_scale,
        0,     0
      );
    } else {
      ctx.transform(
         cosa_scale,  sina_scale,
        -sina_scale,  cosa_scale,
        gObj.p.x,     gObj.p.y
      );
    }

    //todo: implement the checking: "if the frame in bounds of visible part of the game field"

    ctx.drawImage( actualFrame.image,
      -actualFrame.center.x,
      -actualFrame.center.y,
    );

  }

  abstract getCurrentFrameDescription(): T;
  abstract drawFrame(frameDescr: T): HTMLImageElement | HTMLCanvasElement | ImageBitmap | T;

  protected createCanvas(width: number, height: number): HTMLCanvasElement {
    const frameCanvas = <HTMLCanvasElement> document.createElement('canvas');
    frameCanvas.width = width;
    frameCanvas.height = height;
    return frameCanvas; //const ctx: CanvasRenderingContext2D = frameCanvas.getContext('2d');
  }

}

export class FrameDescription {
  private   _key: string;                get key(): string { return this._key; }
  protected _size: Vector;             get size(): Vector { return this._size; }
  protected _center: Vector;           get center(): Vector { return this._center; }
  protected _image: HTMLImageElement | HTMLCanvasElement | ImageBitmap;
      get image(): HTMLImageElement | HTMLCanvasElement | ImageBitmap { return this._image; }

  constructor(key: string) {
    this._key = key;
  }

  public copyFrameDescriptionWithImage(image: HTMLImageElement | HTMLCanvasElement | ImageBitmap): FrameDescription {
    const newFD = new FrameDescription(this.key);
    this._size = new Vector(image.width, image.height);
    this._center = new Vector(image.width / 2, image.height / 2);
    newFD._image = image;
    return newFD;
  }

}

interface ClassesFramesCache {
  [key: string]: FramesCache;
}

interface FramesCache {
  [key: string]: FrameDescription;
}

