import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooderComponent } from './fooder.component';

describe('FooderComponent', () => {
  let component: FooderComponent;
  let fixture: ComponentFixture<FooderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
