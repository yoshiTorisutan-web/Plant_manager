import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerPlanteComponent } from './editer-plante.component';

describe('EditerPlanteComponent', () => {
  let component: EditerPlanteComponent;
  let fixture: ComponentFixture<EditerPlanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditerPlanteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditerPlanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
