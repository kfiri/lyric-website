import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsMenuComponent } from './songs-menu.component';

describe('SongsMenuComponent', () => {
  let component: SongsMenuComponent;
  let fixture: ComponentFixture<SongsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
