import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanteService, Plante } from '../../services/plante.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editer-plante',
  templateUrl: './editer-plante.component.html',
  styleUrls: ['./editer-plante.component.css'],
})
export class EditerPlanteComponent implements OnInit {
  planteForm!: FormGroup;
  plante!: Plante;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private planteService: PlanteService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Convertir l'ID en nombre
    if (id) {
      this.planteService.obtenirPlanteParId(id).subscribe((plante) => {
        if (plante) {
          this.plante = plante; // Plante trouvée
          this.initForm();
        } else {
          console.error('Plante non trouvée');
          // Vous pouvez rediriger ou afficher un message d'erreur ici
        }
      });
    }
  }

  initForm() {
    this.planteForm = this.fb.group({
      nom: [this.plante.nom],
      espece: [this.plante.espece],
      // Ajoutez d'autres champs si nécessaire
    });
  }

  onSubmit() {
    const planteModifiee: Plante = {
      ...this.plante,
      ...this.planteForm.value,
    };

    this.planteService.editerPlante(planteModifiee).subscribe(() => {
      this.router.navigate(['/']); // Redirige vers la liste des plantes après l'édition
    });
  }
}
