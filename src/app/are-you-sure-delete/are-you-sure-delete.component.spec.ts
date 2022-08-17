import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreYouSureDeleteComponent } from './are-you-sure-delete.component';

describe('AreYouSureDeleteComponent', () => {
  let component: AreYouSureDeleteComponent;
  let fixture: ComponentFixture<AreYouSureDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreYouSureDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreYouSureDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
