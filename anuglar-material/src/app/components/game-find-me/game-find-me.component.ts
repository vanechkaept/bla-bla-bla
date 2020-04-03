import { Router } from '@angular/router';
import { Component, OnInit, ɵConsole } from '@angular/core';
import { Card } from 'src/app/shared/interfaces/card';
import { CARDS } from 'src/app/shared/arrays/cards-array';
import { Subject, Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';


@Component({
  selector: 'app-game-find-me',
  templateUrl: './game-find-me.component.html',
  styleUrls: ['./game-find-me.component.scss']
})
export class GameFindMeComponent implements OnInit {

  cards: Card[] = CARDS;
  choseOne: Card;
  choseTwo: Card;

  choseCount: number;

  templates$: Observable<Card[]>;

  pairCard: number;
  tryingOpenCount: number;

  constructor(
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {

    this.choseCount = 0;
    this.pairCard = 0;
    this.tryingOpenCount = 0;

  }

  openCard(card: Card) {


    switch (this.choseCount) {

        case 0: {
          console.log('---0');
          if (card.active === true ) { console.log('1 карточка уже открыта'); return;  }
          card.active = true;
          this.choseOne = card;
          this.choseCount++;
          break;
        }

        case 1: {
          console.log('---1');
          if (card.active === true ) { console.log('2 карточка уже открыта'); return;  }
          card.active = true;
          this.choseTwo = card;
          this.choseCount++;
          this.tryingOpen();
          if (this.choseOne.simbolNumber === this.choseTwo.simbolNumber ) {
            this.cards.forEach(c => {
              if (c.id  === this.choseOne.id || c.id  === this.choseTwo.id) {
                c.active = true;
                return setTimeout(() => {this.choseCount = 0; } , 1000);
              }
            });
            setTimeout(() => {this.rightOpenCard(); } , 500);

          } else {
            setTimeout(() => {
              this.choseOne.active = false;
              this.choseTwo.active = false;
              this.choseCount = 0;
            }, 1000);
          }
          break;
        }

        default: {
          console.log('---default');
          this.choseCount = 0;
          this.choseOne.active = false;
          this.choseTwo.active = false;
        }

    } // Switch
  }

  rightOpenCard() {
    console.log('открыта пара ');
    this.pairCard = 0;
    this.cards.forEach(c => {
      if (c.active === true) {
        this.pairCard++ ;
      }
    });
    if (this.cards.length === this.pairCard) {
      this.openDialog();
    }
  }

  tryingOpen() {
    this.tryingOpenCount++;
  }

  createPicture(simbolNumber: number) {
    switch (simbolNumber) {
      case 1: return 'airport_shuttle';
      case 2: return 'beach_access';
      case 3: return 'directions_run';
      case 4: return 'emoji_people';
      case 5: return 'drive_eta';
      case 6: return 'home_work';
      case 7: return 'home';
      case 8: return 'child_friendly';
      case 9: return 'directions_walk';
    }
  }

   refresh() {
      this.cards.forEach(c => {
        if (c.active || !c.active) {
          delete c.active;
        }
      });
      this.choseCount = 0;
      this.pairCard = 0;
      this.tryingOpenCount = 0 ;
   }

   openDialog() {
    const count = this.tryingOpenCount;
    console.log(count);
    const dialogRef = this.dialog.open(DialogComponent, { data: {count} });
    dialogRef.afterClosed().subscribe( res => {
    if (res === 'false' ) {
        this.router.navigate(['']);
      } else {
        this.refresh();
      }
    });

   }

}
