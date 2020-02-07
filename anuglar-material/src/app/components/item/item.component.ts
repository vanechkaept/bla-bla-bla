import { FormControl } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Subject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, OnDestroy {



  routeSubscription: Subscription;
  querySubscription: Subscription;

  id: number ;
  product: string;
  price = 0;
  name: string;
  pic: string;

  FormId = new FormControl( {value: this.id, disabled: false} );
  FormPrice = new FormControl( {value: this.price , disabled: false} );
  FormProduct = new FormControl( {value: this.product, disabled: false} );

  private readonly unsubscribe$: Subject<void>;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    ) {
      this.unsubscribe$ = new Subject<void>();

      this.route.params.pipe(takeUntil(this.unsubscribe$)).subscribe(
        params => {
          this.id = params.id;
          // this.FormId.patchValue(this.id);
          this.name = this.nameById(params.id);
        }
      );

      this.route.queryParams.pipe(takeUntil(this.unsubscribe$)).subscribe(
        (queryParams: any) => {
          this.price = queryParams.price ;
          // this.FormPrice.patchValue(this.price);
          this.product = queryParams.product;
          // this.FormProduct.patchValue(this.product);
          this.pic = this.searchPic(queryParams.product);
        }
      );
    }



  ngOnInit() {


    // this.id = this.activateRoute.snapshot.params.id;


  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  addPrice() {
    console.log(this.route.snapshot.url['0'].path);
    this.router.navigate([`/item/${this.FormId.value}`], {queryParams:
            { price: this.FormPrice.value, product : this.FormProduct.value }});

    // console.log(this.route.queryParams);
    // this.route.queryParams.subscribe(
    //   next => { next.price = 'w' }
    // );

  }


  nameById(id): string {

    switch (+id) {
      case 3 : { return 'Петя';  }
      case 10 : { return 'Вася';  }
      default: return ;
    }

  }


  searchPic(product): string {


    console.log(product);
    return 'https://material.angular.io/assets/img/examples/shiba1.jpg';

  }



}
