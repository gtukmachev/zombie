import {Drawer} from './drawer';
import {Vector} from '../../vector';
import {AngleType} from '../../game-object';


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
export abstract class FrameDrawer extends Drawer {

  static framesCache: FramesCache = { };

  draw(): void {
    const currentFrameDescr: FrameDescription = this.getCurrentFrameDescription();
    let actualFrame:  FrameDescription;

    if (currentFrameDescr.key in FrameDrawer.framesCache ) {
      actualFrame = FrameDrawer.framesCache[currentFrameDescr.key];
    } else {

      const image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap
        = this.drawFrame(currentFrameDescr);

      actualFrame = currentFrameDescr.copyFrameDescriptionWithImage( image );
      FrameDrawer.framesCache[currentFrameDescr.key] = actualFrame;
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


    ctx.drawImage( actualFrame.image,
      -actualFrame.center.x,
      -actualFrame.center.y,
    );

  }

  abstract getCurrentFrameDescription(): FrameDescription;
  abstract drawFrame(frameDescr: FrameDescription): HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap;

  protected helperCreateIndividualFrameCanvas(currentFrameDescr: FrameDescription): HTMLCanvasElement {
    const frameCanvas = <HTMLCanvasElement> document.createElement('canvas');
    frameCanvas.width = currentFrameDescr.size.x;
    frameCanvas.height = currentFrameDescr.size.y;
    //const frameCtx: CanvasRenderingContext2D = frameCanvas.getContext('2d');
    return frameCanvas;
  }

}


export class FrameDescription {
  private _key: string;              get key(): string { return this._key; }
  private _size: Vector;             get size(): Vector { return this._size; }
  private _center: Vector;           get center(): Vector { return this._center; }
  private _image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap;
      get image(): HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap { return this._image; }


  constructor(key: string, size: Vector, center: Vector) {
    this._key = key;
    this._size = size;
    this._center = center;
  }

  copyFrameDescriptionWithImage(image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap) {
    const newFD = new FrameDescription(this.key, this.size, this.center);
    newFD._image = image;
    return newFD;
  }

}

interface FramesCache {
  [key: string]: FrameDescription;
}
