import { Component } from '@angular/core';
import { PlanteService } from '../../services/plante.service';

@Component({
  selector: 'app-ajouter-plante',
  templateUrl: './ajouter-plante.component.html',
  styleUrls: ['./ajouter-plante.component.css']
})
export class AjouterPlanteComponent {
  plante = {
    nom: '',
    espece: '',
    dateAchat: new Date(),
    image: '',
    besoins: { quantite: 0, frequence: 0 },
    dernierArrosage: null,
  };

  constructor(private planteService: PlanteService) {}

  ajouterPlante() {
    const planteSansId = {
      ...this.plante,
      dateAchat: new Date(this.plante.dateAchat), // Pour s'assurer que la date est correcte
    };
    this.planteService.ajouterPlante(planteSansId).subscribe(() => {
      // Réinitialiser le formulaire ou afficher un message de succès
      this.plante = {
        nom: '',
        espece: '',
        dateAchat: new Date(),
        image: '',
        besoins: { quantite: 0, frequence: 0 },
        dernierArrosage: null,
      };
    });
  }
}
