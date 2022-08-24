import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTicketComponent } from './ajouter-ticket.component';

describe('AjouterTicketComponent', () => {
  let component: AjouterTicketComponent;
  let fixture: ComponentFixture<AjouterTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
