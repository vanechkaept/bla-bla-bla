import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePaintingComponent } from './game-painting.component';

describe('GamePaintingComponent', () => {
  let component: GamePaintingComponent;
  let fixture: ComponentFixture<GamePaintingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamePaintingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePaintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
