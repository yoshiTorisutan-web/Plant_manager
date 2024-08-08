import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanteService, Plante } from '../../services/plante.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css'],
})
export class HistoriqueComponent implements OnInit {
  plante!: Plante; // La plante dont on affiche l'historique

  constructor(
    private route: ActivatedRoute,
    private planteService: PlanteService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Convertir l'ID en nombre
    if (id) {
      this.planteService.obtenirPlanteParId(id).subscribe((plante) => {
        if (plante) {
          this.plante = plante; // Plante trouvée
          // Si la plante n'a pas d'historique, vous pouvez initialiser un tableau vide ou gérer cette situation
          if (!this.plante.historique) {
            this.plante.historique = [];
          }
        } else {
          console.error('Plante non trouvée');
          // Gérer le cas où la plante n'est pas trouvée
        }
      });
    }
  }
}
