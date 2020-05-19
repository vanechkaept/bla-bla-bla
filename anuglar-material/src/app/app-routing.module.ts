import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ItemComponent } from './components/item/item.component';
import { SubmarineComponent } from './components/submarine/submarine.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ItemUserComponent } from './components/item-user/item-user.component';
import { LogginComponent } from './components/loggin/loggin.component';
import { GameFindMeComponent } from './components/game-find-me/game-find-me.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameKrestikiNolikiComponent } from './components/game-krestiki-noliki/game-krestiki-noliki.component';
import { GamePaintingComponent } from './components/game-painting/game-painting.component';
import { OrganaizerComponent } from './components/organaizer/organaizer.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'submarine', component: SubmarineComponent, canDeactivate: [AuthGuard]},
  { path: 'login', component: LogginComponent},
  { path: 'calendar', component: OrganaizerComponent},
  { path: 'game',
    children: [
      { path: '', component: GameListComponent  },
      { path: 'findCard', component: GameFindMeComponent },
      { path: 'XO', component: GameKrestikiNolikiComponent },
      { path: 'paint', component: GamePaintingComponent }
    ] },
  { path: 'item',
    children: [
      { path: '', component: ItemComponent },
      { path: ':id', component: ItemUserComponent, canActivate: [AuthGuard]},
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
