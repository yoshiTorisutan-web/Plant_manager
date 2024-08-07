import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseilsRessourcesComponent } from './conseils-ressources.component';

describe('ConseilsRessourcesComponent', () => {
  let component: ConseilsRessourcesComponent;
  let fixture: ComponentFixture<ConseilsRessourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConseilsRessourcesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConseilsRessourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
