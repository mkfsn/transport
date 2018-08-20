import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThsrComponent } from './thsr.component';

describe('ThsrComponent', () => {
  let component: ThsrComponent;
  let fixture: ComponentFixture<ThsrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThsrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
