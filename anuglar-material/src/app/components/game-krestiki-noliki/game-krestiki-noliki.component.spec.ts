import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameKrestikiNolikiComponent } from './game-krestiki-noliki.component';

describe('GameKrestikiNolikiComponent', () => {
  let component: GameKrestikiNolikiComponent;
  let fixture: ComponentFixture<GameKrestikiNolikiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameKrestikiNolikiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameKrestikiNolikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
