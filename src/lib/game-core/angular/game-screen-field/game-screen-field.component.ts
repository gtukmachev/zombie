import {Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {Game2} from '../../game-2';

@Component({
  selector: 'app-game-screen-field',
  templateUrl: './game-screen-field.component.html',
  styleUrls: ['./game-screen-field.component.css']
})
export class GameScreenFieldComponent implements OnInit {

  @Input() game: Game2;

  @ViewChild('gameCanvasBg') canvasBgRef: ElementRef;
  @ViewChild('gameCanvasField') canvasRef: ElementRef;

  constructor () { }

  ngOnInit () {
    const canvas: HTMLCanvasElement = this.canvasRef.nativeElement;
    canvas.width = 1280; canvas.height = 720;

    const bgCanvas: HTMLCanvasElement = this.canvasBgRef.nativeElement;
    canvas.width = 1280; canvas.height = 720;

    this.game.initCanvas(bgCanvas, canvas);

  }

  @HostListener('document:mousemove', ['$event'])     onMouseMove(event: MouseEvent) { this.game.onMouseMove(event); }
  @HostListener('document:mousedown', ['$event'])     onMouseDown(event: MouseEvent) { this.game.onMouseDown(event); }
  @HostListener('document:mouseup',   ['$event'])       onMouseUp(event: MouseEvent) { this.game.onMouseUp(event);   }
  @HostListener('document:click',     ['$event'])    onMouseClick(event: MouseEvent) { this.game.onMouseClick(event);}
  @HostListener('document:dblclick',  ['$event']) onMouseDblClick(event: MouseEvent) { this.game.onMouseDblClick(event);}
  @HostListener('document:mouseenter',['$event'])    onMouseEnter(event: MouseEvent) { this.game.onMouseEnter(event);}
  @HostListener('document:mouseleave',['$event'])    onMouseLeave(event: MouseEvent) { this.game.onMouseLeave(event);}

  @HostListener('document:keypress',['$event']) onKeyPress(event: KeyboardEvent) { this.game.onKeyboardPress(event);}
  @HostListener('document:keydown', ['$event'])  onKeyDown(event: KeyboardEvent) { this.game.onKeyboardDown(event);}
  @HostListener('document:keyup',   ['$event'])    onKeyUp(event: KeyboardEvent) { this.game.onKeyboardUp(event);  }


  ngOnDestroy (): void {
    this.game.onDestroy();
  }

}
