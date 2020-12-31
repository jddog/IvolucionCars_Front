import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatenowComponent } from './datenow.component';

describe('DatenowComponent', () => {
  let component: DatenowComponent;
  let fixture: ComponentFixture<DatenowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatenowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatenowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
