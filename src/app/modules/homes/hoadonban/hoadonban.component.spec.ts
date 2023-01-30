import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoadonbanComponent } from './hoadonban.component';

describe('HoadonbanComponent', () => {
  let component: HoadonbanComponent;
  let fixture: ComponentFixture<HoadonbanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoadonbanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoadonbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
