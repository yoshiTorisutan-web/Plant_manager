import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueArrosageComponent } from './historique-arrosage.component';

describe('HistoriqueArrosageComponent', () => {
  let component: HistoriqueArrosageComponent;
  let fixture: ComponentFixture<HistoriqueArrosageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoriqueArrosageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriqueArrosageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
