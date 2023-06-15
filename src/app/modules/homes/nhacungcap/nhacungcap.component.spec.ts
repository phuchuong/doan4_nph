import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhacungcapComponent } from './nhacungcap.component';

describe('NhacungcapComponent', () => {
  let component: NhacungcapComponent;
  let fixture: ComponentFixture<NhacungcapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhacungcapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NhacungcapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
