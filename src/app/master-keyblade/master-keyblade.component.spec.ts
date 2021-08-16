import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterKeybladeComponent } from './master-keyblade.component';

describe('MasterKeybladeComponent', () => {
  let component: MasterKeybladeComponent;
  let fixture: ComponentFixture<MasterKeybladeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterKeybladeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterKeybladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
