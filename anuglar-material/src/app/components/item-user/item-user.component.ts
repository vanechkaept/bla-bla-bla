import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from 'src/app/shared/interfaces/user';
import { ItemService } from 'src/app/shared/services/item.service';
import { switchMap, filter, map, tap, takeUntil } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { Subscription, Subject } from 'rxjs';

@Component({
  selector: 'app-item-user',
  templateUrl: './item-user.component.html',
  styleUrls: ['./item-user.component.scss']
})
export class ItemUserComponent implements OnInit, OnDestroy {

  private readonly unsubscribe$: ReplaySubject<void>;

  subscription: Subject<void>;

  routeId: number;

  user: User;
  userList: any = 'close';

  defaultImage = this.itemService.getDefaultImage();

  constructor(
    public itemService: ItemService,
    public route: ActivatedRoute,
    public router: Router,
  ) {
    this.unsubscribe$ = new ReplaySubject<void>(1);


   }

  ngOnInit() {

    this.route.params.subscribe(param => {
      this.routeId = (+param.id);
      this.getUser();
      this.getLastShopList();
    });

  }

  ngOnDestroy() {
    this.unsubscribe$.next(null);
    this.unsubscribe$.complete();
  }



  getUser() {

    this.itemService.getUsers().pipe(
      takeUntil(this.unsubscribe$),
      map(users => {
        return users.filter(f => f.id === (+this.routeId));
      }),
    ).subscribe( user => {
      this.user = user[0];
    });

  }

  getLastShopList() {

    this.itemService.getLastShopList().pipe(
      takeUntil(this.unsubscribe$),
      map(usersList => {
        return usersList.filter(f => f.id === (+this.routeId));
      }),
    ).subscribe( userList => {
      if (userList !== undefined) {
         this.userList = userList[0];
      }
    });

  }


  navigateBack() {
    this.router.navigate(['item/']);
  }



}
