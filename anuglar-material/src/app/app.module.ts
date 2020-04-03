import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ItemComponent } from './components/item/item.component';
import { SubmarineComponent } from './components/submarine/submarine.component';
import { ItemUserComponent } from './components/item-user/item-user.component';
import { LogginComponent } from './components/loggin/loggin.component';
import { GameFindMeComponent } from './components/game-find-me/game-find-me.component';
import { DialogComponent } from './shared/dialog/dialog.component';
import { GameKrestikiNolikiComponent } from './components/game-krestiki-noliki/game-krestiki-noliki.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GamePaintingComponent } from './components/game-painting/game-painting.component';
import { OrganaizerComponent } from './components/organaizer/organaizer.component';
import { OrgSelectorComponent } from './components/organaizer/org-selector/org-selector.component';
import { OrgOrganaizerComponent } from './components/organaizer/org-organaizer/org-organaizer.component';
import { CalendarComponent } from './components/organaizer/calendar/calendar.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    ItemComponent,
    SubmarineComponent,
    ItemUserComponent,
    LogginComponent,
    GameFindMeComponent,
    DialogComponent,
    GameListComponent,
    GameKrestikiNolikiComponent,
    GamePaintingComponent,
    OrganaizerComponent,
    CalendarComponent,
    OrgSelectorComponent,
    OrgOrganaizerComponent,

  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
