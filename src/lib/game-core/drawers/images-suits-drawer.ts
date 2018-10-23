import {SuitsDrawer, SuitsFrameDescription} from './suits-drawer';
import {GameObj} from '../objects/game-obj';


export class ImagesSuitsDrawer<ParentGameObjectType extends GameObj> extends SuitsDrawer<ParentGameObjectType> {

  private suits: Array<HTMLImageElement>;
  private _isImagesLoaded: boolean = false;
                get isImagesLoaded(): boolean { return this._isImagesLoaded; }

  private loadedCount;
  private imagesCount;

  public resizeToObjectSize = false;

  constructor(images: Array<string>, resizeToObjectSize: boolean) {
    super();

    this.imagesCount = images.length;
    this.resizeToObjectSize = resizeToObjectSize;
    this.loadedCount = 0;

    // this.suits = images.map( htmlElementId => document.getElementById(htmlElementId) as HTMLImageElement);
    this.suits = images.map( src => {
      const image = new Image();
      image.onload = event => { this.loadedCount++; this.checkForLoading() };
      image.src = src; //todo: await, while all images will be loaded
      return image;
    });
  }

  private checkForLoading(){
    if (this.loadedCount >= this.imagesCount) this._isImagesLoaded = true;
  }

  drawSuit(suitNumber: number): HTMLImageElement | HTMLCanvasElement | ImageBitmap | SuitsFrameDescription {
    const image: HTMLImageElement = this.suits[suitNumber];
    return this.resizeToObjectSize ? this.resizeImage(image) : image;
  }

  private resizeImage(image: HTMLImageElement): HTMLImageElement | HTMLCanvasElement | ImageBitmap | SuitsFrameDescription {
    const sz = this.gObj.r * 2;
    const canvas = this.createCanvas(sz, sz);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0, sz, sz);
    return canvas;
  }

}

