import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangthaiComponent } from './trangthai.component';

describe('TrangthaiComponent', () => {
  let component: TrangthaiComponent;
  let fixture: ComponentFixture<TrangthaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrangthaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrangthaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
