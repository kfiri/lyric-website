import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidiBackgroundComponent } from './midi-background.component';

describe('MidiBackgroundComponent', () => {
  let component: MidiBackgroundComponent;
  let fixture: ComponentFixture<MidiBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidiBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidiBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
