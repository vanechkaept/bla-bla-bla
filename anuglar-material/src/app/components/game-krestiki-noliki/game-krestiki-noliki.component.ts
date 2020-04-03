import { FormGroup, FormControl } from '@angular/forms';
import { takeUntil, mapTo, tap, map, startWith, debounceTime, filter, scan, takeWhile, take, takeLast } from 'rxjs/operators';
import { inject } from '@angular/core/testing';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { timer, ReplaySubject, BehaviorSubject, Subject, Observable, of, combineLatest, fromEvent, from } from 'rxjs';

@Component({
  selector: 'app-game-krestiki-noliki',
  templateUrl: './game-krestiki-noliki.component.html',
  styleUrls: ['./game-krestiki-noliki.component.scss']
})
export class GameKrestikiNolikiComponent implements OnInit, OnDestroy {

  private readonly unsubscribe$: ReplaySubject<void>;
  private readonly subSubject: Subject<number>;
  blocks: any;
  step: number;
  stopGame: boolean;
  winCountK: number;
  winCountO: number;
  gameCount: number;

  form = new FormGroup({
    Food: new FormControl({value: '', disabled: false }),
  });

  // stream$ = timer(500, 1000);
  stream$: Observable<any>;
  readInput$: Observable<any>;

  constructor() {
    this.unsubscribe$ = new ReplaySubject<void>(1);
    this.subSubject = new BehaviorSubject<number>(null);
   }

  ngOnDestroy(): void {
    this.unsubscribe$.next(null);
    this.unsubscribe$.complete();
  }

  ngOnInit() {
    this.stopGame = false;
    this.step = 0;
    this.winCountK = 0;
    this.winCountO = 0;
    this.gameCount = 0;

    this.blocks = document.querySelectorAll('.general-blocks');

    // this.readInput$ = this.form.controls.Food.valueChanges.pipe(
    //           tap(() => console.log('first emergancy')),
    //           debounceTime(400),
    //           startWith(''),
    //           tap(() => console.log('second ')),
    //           );

    this.readInput$ = from(timer(2000, 500)).pipe(
      tap(val => console.log('Tap: ' + val )),
      take(10),
    );

    this.readInput$.pipe(
      tap(b => console.log('вызвал observable'))
    );

    // fromEvent(document.getElementById('btn'), 'click' ).pipe(
    // ).subscribe(
    //   val => { console.log(val); },
    //   err => { console.log(err); },
    //   () => {console.log('complite'); },
    // );





    // this.stream$ = combineLatest(this.readInput$).pipe(
    //   takeUntil(this.unsubscribe$),
    //   map(v => {
    //     console.log(v);
    //     return v;
    //   })
    // );

  }


  click() {
    // this.subSubject.next(1);



  }

  onClick(i: number) {
    if ( this.stopGame) {
      return;
    }
    if ( this.blocks[i].innerHTML !== '' ) {
      return;
    }
    console.log(this.blocks[0]);
    switch (this.step % 2) {
      case 0: {
        console.log('0');
        this.blocks[i].innerHTML = 'o';
        this.blocks[i].style.color = 'red';
        break;
      }
      default: {
        this.blocks[i].innerHTML = 'x';
        this.blocks[i].style.color = 'black';
        console.log('default');
      }
    }

    this.step++;
    this.checkWinner();
  }

  checkWinner() {

    if ( this.getBlock(0) === 'o' && this.getBlock(2) === 'o' &&  this.getBlock(1) === 'o' ) {
      console.log('победительверхняя строка '); this.win(0, 0, 2 , 1) ; return;
    } else  if ( this.getBlock(3) === 'o' && this.getBlock(4) === 'o' && this.getBlock(5) === 'o' ) {
      console.log('победитель средняя  строка '); this.win(0, 3 , 4 , 5 ) ; return;
    } else  if ( this.getBlock(6) === 'o' && this.getBlock(7) === 'o' && this.getBlock(8) === 'o' ) {
      console.log('победитель нижняя строка '); this.win(0, 6, 7, 8) ; return;
    } else  if ( this.getBlock(0) === 'o' && this.getBlock(3) === 'o' && this.getBlock(6) === 'o' ) {
      console.log('победитель левая вертикаль  '); this.win(0, 0, 3, 6) ; return;
    } else  if ( this.getBlock(1) === 'o' && this.getBlock(4) === 'o' && this.getBlock(7) === 'o' ) {
      console.log('победитель средняя вертикать '); this.win(0, 1, 4, 7) ; return;
    } else  if ( this.getBlock(2) === 'o' && this.getBlock(5) === 'o' && this.getBlock(8) === 'o' ) {
      console.log('победитель правая вертикаль '); this.win(0, 2, 5, 8) ; return;
    } else  if ( this.getBlock(2) === 'o' && this.getBlock(4) === 'o' && this.getBlock(6) === 'o' ) {
      console.log('победитель диагональ 1 '); this.win(0, 2, 4, 6) ; return;
    } else  if ( this.getBlock(0) === 'o' && this.getBlock(4) === 'o' && this.getBlock(8) === 'o' ) {
      console.log('победитель диагональ 0  '); this.win(0, 0, 4, 8) ; return;
    }

    if ( this.getBlock(0) === 'x' && this.getBlock(2) === 'x' &&  this.getBlock(1) === 'x' ) {
      console.log('победительверхняя строка '); this.win(1, 0, 2, 1) ; return;
    } else  if ( this.getBlock(3) === 'x' && this.getBlock(4) === 'x' && this.getBlock(5) === 'x' ) {
      console.log('победитель средняя  строка '); this.win(1, 3, 4, 5) ; return;
    } else  if ( this.getBlock(6) === 'x' && this.getBlock(7) === 'x' && this.getBlock(8) === 'x' ) {
      console.log('победитель нижняя строка '); this.win(1, 6, 7, 8) ; return;
    } else  if ( this.getBlock(0) === 'x' && this.getBlock(3) === 'x' && this.getBlock(6) === 'x' ) {
      console.log('победитель левая вертикаль  '); this.win(1, 0, 3, 6) ; return;
    } else  if ( this.getBlock(1) === 'x' && this.getBlock(4) === 'x' && this.getBlock(7) === 'x' ) {
      console.log('победитель средняя вертикать '); this.win(1, 1, 4, 7) ; return;
    } else  if ( this.getBlock(2) === 'x' && this.getBlock(5) === 'x' && this.getBlock(8) === 'x' ) {
      console.log('победитель правая вертикаль '); this.win(1, 2, 5, 8) ; return;
    } else  if ( this.getBlock(2) === 'x' && this.getBlock(4) === 'x' && this.getBlock(6) === 'x' ) {
      console.log('победитель диагональ 1 '); this.win(1, 2, 4, 6) ; return;
    } else  if ( this.getBlock(0) === 'x' && this.getBlock(4) === 'x' && this.getBlock(8) === 'x' ) {
      console.log('победитель диагональ 0  '); this.win(1, 0, 4, 8) ; return;
    }

    if (this.step > 8) {
      this.win(3);
    }

  }

  getBlock(i: number) {
    return this.blocks[i].innerHTML.toLowerCase();
  }

  win(winner: number, c1?: number, c2?: number, c3?: number) {
    this.stopGame = true;

    if (winner !== 3) {
      this.blocks[c1].style.backgroundColor = '#FDE574';
      this.blocks[c2].style.backgroundColor = '#FDE574';
      this.blocks[c3].style.backgroundColor = '#FDE574';
    }



    setTimeout(() => {
      this.gameCount++;

      if (winner === 0 ) {
        this.winCountO++;
        this.restart();
      } else if (winner === 1) {
        this.winCountK++;
        this.restart();
      } else if (winner === 3 ) {
        this.restart();
      }
    }, 1000);

  }

  restart() {
    this.step = 0;
    for ( let i = 0; i < 9; i++) {
      this.blocks[i].style.backgroundColor = 'transparent';
      this.blocks[i].innerHTML = '';
    }
    this.stopGame = false;
  }



}


