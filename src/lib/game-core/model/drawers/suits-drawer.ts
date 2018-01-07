import {FrameDescription, FrameDrawer} from './frame-drawer';
import {Vector} from '../../vector';

export abstract class SuitsDrawer extends FrameDrawer<SuitsFrameDescription> {

  public currentSuitNumber: number = 1;

  getCurrentFrameDescription(): SuitsFrameDescription {
    return new SuitsFrameDescription(this.currentSuitNumber);
  }

  drawFrame(frameDescr: SuitsFrameDescription): HTMLImageElement | HTMLCanvasElement | ImageBitmap | SuitsFrameDescription {
    return this.drawSuit(frameDescr.suitNumber);
  }

  abstract drawSuit(suitNumber: number): HTMLImageElement | HTMLCanvasElement | ImageBitmap | SuitsFrameDescription

}

export class SuitsFrameDescription extends FrameDescription {

  private _suitNumber: number;
      get suitNumber(): number { return this._suitNumber; }


  constructor(suitNumber:  number) {
    super(""+suitNumber);
    this._suitNumber = suitNumber;
  }

  public copyFrameDescriptionWithImage(image: HTMLImageElement | HTMLCanvasElement | ImageBitmap): SuitsFrameDescription {
    const newFD = new SuitsFrameDescription(this._suitNumber);
    this._size = new Vector(image.width, image.height);
    this._center = new Vector(image.width / 2, image.height / 2);
    newFD._image = image;
    return newFD;
  }

}
