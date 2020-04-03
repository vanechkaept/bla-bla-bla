import { Component, OnInit } from '@angular/core';
import { Observable, of, combineLatest, Subscription, from, fromEvent, Subject, ReplaySubject } from 'rxjs';
import { tap, map, pairwise, switchMap, takeUntil, startWith, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-game-painting',
  templateUrl: './game-painting.component.html',
  styleUrls: ['./game-painting.component.scss']
})
export class GamePaintingComponent implements OnInit {

  doc = document;

  canvas: any;
  ctx: any;
  rect: any;
  scale: any;
  value: any;
  range: any;
  color: any;

  mouseMove$: Observable<any>;
  mouseDown$: Subscription;
  mouseUp$: Observable<any>;
  mouseOut$: Observable<any>;
  rangeChange$: Observable<any>;
  colorChange$: Observable<any>;


  constructor() { }

  ngOnInit() {

   this.initParam();

   this.mouseUp$ = from(fromEvent(this.canvas, 'mouseup')).pipe(
     tap(val => console.log('--------') )
   );

   this.colorChange$ = from(fromEvent(this.color, 'input' )).pipe(
    tap(e => console.log(e)),
    // раскомментировать для функционирования
    // map( e => e.target.value),
   );

   this.rangeChange$ = from(fromEvent(this.range, 'mouseup')).pipe(
    tap(e => console.log(e)),
    map(e => (this.value))
   );

   this.mouseOut$ = from(fromEvent(this.canvas, 'mouseout'));

   this.mouseDown$ = from(fromEvent(this.canvas, 'mousedown')).pipe(
     withLatestFrom(
       this.colorChange$.pipe(startWith(this.color.value)),
       this.rangeChange$.pipe(startWith(this.value)),
       (_, color, range) => {
       return {
        color,
        range
       }
     } ),
     switchMap(options  => {
       console.log(options);
       return   this.mouseMove$ = from(fromEvent(this.canvas , 'mousemove')).pipe(
          map((e: any) => {
            const x = e.offsetX;
            const y = e.offsetY;
            return {x, y, options}

          } ),
          pairwise(),
          takeUntil(this.mouseUp$),
          takeUntil(this.mouseOut$)
          );
     }),
   ).subscribe(
    ([prev , act]) => {
          // console.log(prev);
          console.log(this.ctx);
          this.ctx.lineWidth = prev.options.range;
          this.ctx.strokeStyle = prev.options.color;
          this.ctx.beginPath();
          this.ctx.moveTo(prev.x, prev.y);
          this.ctx.lineTo(act.x, act.y);
          this.ctx.stroke();
    }

   );


  //  this.rangeChange$ = of(this.value).pipe(
  //   map( e => e.target.value),
  //   tap(e => console.log(e.value))
  //  );






  //  this.mouseMove$ = from(fromEvent(this.canvas , 'mousemove')).pipe(
  //     tap(val => console.log('Input ' ,  val)),
  //     map((e: any) => {
  //       const x = e.offsetX;
  //       const y = e.offsetY;
  //       return {x, y};
  //     } ),
  //     pairwise()
  //  ).subscribe(
  //    ([prev , act]) => {
  //      //  this.ctx.fillRect(pos.x, pos.y, 5, 5);
  //      this.ctx.beginPath();
  //      this.ctx.moveTo(prev.x, prev.y);
  //      this.ctx.lineTo(act.x, act.y);
  //      this.ctx.stroke();

  //    }

  //  );

  }

  initParam() {

    this.canvas = this.doc.querySelector('canvas') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d');
    this.rect = this.canvas.getBoundingClientRect();
    this.scale = window.devicePixelRatio;
    this.canvas.width = this.rect.width * this.scale;
    this.canvas.height = this.rect.height * this.scale;
    this.ctx.scale(this.scale, this.scale );

    this.value = 2;

    this.range = this.doc.querySelector('#range');
    this.color = this.doc.querySelector('#color');

    console.log(this.doc.querySelector('#range'));
    console.log('', this.color.value);

  }

}
