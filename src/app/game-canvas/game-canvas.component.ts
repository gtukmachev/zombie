import {Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CachedFilmGameObject} from '../../lib/game-core/cached-film-game-object';
import {ZombiesGame} from '../game/zombies-game';

@Component({
  selector: 'app-game-canvas',
  templateUrl: './game-canvas.component.html',
  styleUrls: ['./game-canvas.component.css']
})
export class GameCanvasComponent implements OnInit, OnDestroy {

  @ViewChild('myCanvas') canvasRef: ElementRef;

  xSize: number = 960;
  ySize: number = 540;

  game: ZombiesGame;

  constructor () {
  }

  ngOnInit () {
    const canvas: HTMLCanvasElement = this.canvasRef.nativeElement;

    this.xSize = canvas.width;
    this.ySize = canvas.height;

    this.game = new ZombiesGame(canvas, this.xSize, this.ySize);

  }

  @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    this.game.onMouseMove(event);
  }

  @HostListener('mousedown', ['$event']) onMouseDown(event: MouseEvent) {
    this.game.onMouseDown(event);
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


