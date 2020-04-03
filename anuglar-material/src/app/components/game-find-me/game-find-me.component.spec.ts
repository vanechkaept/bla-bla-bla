import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFindMeComponent } from './game-find-me.component';

describe('GameFindMeComponent', () => {
  let component: GameFindMeComponent;
  let fixture: ComponentFixture<GameFindMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameFindMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameFindMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
