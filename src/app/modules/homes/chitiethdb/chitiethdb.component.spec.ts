import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitiethdbComponent } from './chitiethdb.component';

describe('ChitiethdbComponent', () => {
  let component: ChitiethdbComponent;
  let fixture: ComponentFixture<ChitiethdbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChitiethdbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChitiethdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
