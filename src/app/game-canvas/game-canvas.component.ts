import {Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CachedFilmGameObject} from '../../lib/game-core/cached-film-game-object';
import {TestGame} from '../game/test-game';
import {Game} from '../../lib/game-core/game';
import {TestLine} from '../game/tests/test-line';

@Component({
  selector: 'app-game-canvas',
  templateUrl: './game-canvas.component.html',
  styleUrls: ['./game-canvas.component.css']
})
export class GameCanvasComponent implements OnInit, OnDestroy {

  @ViewChild('myCanvas') canvasRef: ElementRef;

  xSize: number = 960;
  ySize: number = 540;

  game: TestGame;
  angle: number = 1;
  aTxt: string = this.angle.toString()


  constructor () {
  }

  ngOnInit () {
    const canvas: HTMLCanvasElement = this.canvasRef.nativeElement;

    this.xSize = canvas.width;
    this.ySize = canvas.height;

    this.game = new TestGame(canvas, this.xSize, this.ySize);

  }

  setAngle(a: number): void {
    this.game.line.setDirectionAngle(Math.PI * this.angle);
  }

  changeAngle(ad: number) {
    this.angle += ad; this.setAngle(this.angle)
  }

  toggleRotation(): void {
    this.game.line.rotationOn = !this.game.line.rotationOn;
  }

  @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    this.game.onMouseMove(event);
  }

  @HostListener('mousedown', ['$event']) onMouseDown(event: MouseEvent) {
    this.game.onMouseDown(event);
    //console.log(event);
  }

  @HostListener('mouseup', ['$event']) onMouseUp(event: MouseEvent) {
    this.game.onMouseUp(event);
  }

  @HostListener('document:keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    this.game.onKeyDown(event);
  }
  @HostListener('document:keyup', ['$event']) onKeyUp(event: KeyboardEvent) {
    this.game.onKeyUp(event);
  }


  ngOnDestroy (): void {
    this.game.onDestroy();
  }

  public CachedFilmGameObjectFCL(): number {
    return Object.keys(CachedFilmGameObject.framesCache).length;
  }

}


