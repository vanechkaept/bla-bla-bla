import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, combineLatest, ReplaySubject, Subject, timer } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { tap, startWith, takeUntil, delay, exhaustMap, debounceTime } from 'rxjs/operators';

export interface FilmsList {
  partialFilmName: string;
  partialActorName: string;
}

export const FILM: FilmsList[] = [
  {
    partialFilmName: 'Мстители',
    partialActorName: 'Дауни'
  },
  {
    partialFilmName: 'Однажды в сказке',
    partialActorName: 'Дженнифер Моррисон'
  },
  {
    partialFilmName: 'Джон уик',
    partialActorName: 'Киану Ривз'
  },
  {
    partialFilmName: 'Шерлок Холмс: Игра теней',
    partialActorName: 'Дауни'
  },
];



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  private readonly unsubscribe$: ReplaySubject<void>;

  filmsList: FilmsList[] = FILM;

  filmsList$: Observable<FilmsList[]>;
  filterFilms$: Observable<any>;
  inputFindFilm$: Observable<string>;
  inputFindActor$: Observable<string>;

  timer = timer(0, 1000);

  form = new FormGroup({
    FindFilm: new FormControl({value: '', disabled: false}),
    FindActor: new FormControl({value: '', disabled: false}),
  });

  constructor() {
    this.unsubscribe$ = new ReplaySubject<void>(1);
   }

  ngOnInit() {
    this.filmsList$ = of(FILM);
    this.inputFindFilm$ = this.form.controls.FindFilm.valueChanges.pipe(startWith(''));
    this.inputFindActor$ = this.form.controls.FindActor.valueChanges.pipe(startWith(''));

    // filter for back
    // this.backFilter();

    // filter for front
    this.frontFilter();

  }

  ngOnDestroy() {
    this.unsubscribe$.next(null);
    this.unsubscribe$.complete();
  }

  backFilter() {
    this.filterFilms$ = combineLatest(
      this.inputFindFilm$,
      this.inputFindActor$,
      ).pipe(
        debounceTime(400),
        exhaustMap(([inputFindFilm, inputFindActor])  =>  {
          const partialFilmName = inputFindFilm;
          const partialActorName = inputFindActor;
          return this.fetchFilm({partialFilmName , partialActorName });
          }
        ),
        takeUntil(this.unsubscribe$),
      );
  }

  fetchFilm(key): Observable<FilmsList[]> {
    return of(FILM);
  }

  frontFilter() {
    this.filterFilms$ = combineLatest(
      this.inputFindFilm$,
      this.inputFindActor$
      ).pipe(
        debounceTime(400),
        map(([inputFindFilm, inputFindActor]) => {
          inputFindFilm.trim();
          inputFindActor.trim();
          if (inputFindFilm ===  '' && inputFindActor !== '') {
            return FILM.filter(film => film.partialActorName.toLowerCase().includes(inputFindActor.toLowerCase()) );
          } else if (inputFindFilm !==  '' && inputFindActor === '') {
            return FILM.filter(film => film.partialFilmName.toLowerCase().includes(inputFindFilm.toLowerCase()) );
          } else if (inputFindFilm !==  '' && inputFindActor !== '') {
            return FILM.filter(film => film.partialFilmName.toLowerCase().includes(inputFindFilm.toLowerCase()) &&
            film.partialActorName.toLowerCase().includes(inputFindActor.toLowerCase()) );
          } else { return FILM; }
        } ),
        takeUntil(this.unsubscribe$ )
      );
  }



} // AboutComponent
