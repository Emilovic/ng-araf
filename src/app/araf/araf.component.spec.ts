import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArafComponent } from './araf.component';

describe('ArafComponent', () => {
  let component: ArafComponent;
  let fixture: ComponentFixture<ArafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
