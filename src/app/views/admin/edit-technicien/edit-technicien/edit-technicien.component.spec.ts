import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTechnicienComponent } from './edit-technicien.component';

describe('EditTechnicienComponent', () => {
  let component: EditTechnicienComponent;
  let fixture: ComponentFixture<EditTechnicienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTechnicienComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTechnicienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
