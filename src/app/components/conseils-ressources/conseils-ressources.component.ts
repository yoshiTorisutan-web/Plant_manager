import { Component } from '@angular/core';

@Component({
  selector: 'app-conseils-ressources',
  templateUrl: './conseils-ressources.component.html',
  styleUrls: ['./conseils-ressources.component.css']
})
export class ConseilsRessourcesComponent {
  conseils = [
    'Arrosez vos plantes le matin pour éviter l’évaporation rapide.',
    'Utilisez des pots avec des trous de drainage pour éviter l’excès d’eau.',
    // Ajoutez plus de conseils ici
  ];
}
