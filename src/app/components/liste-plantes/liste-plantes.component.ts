import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Pour naviguer vers d'autres pages
import { PlanteService, Plante } from '../../services/plante.service';

@Component({
  selector: 'app-liste-plantes',
  templateUrl: './liste-plantes.component.html',
  styleUrls: ['./liste-plantes.component.css'],
})
export class ListePlantesComponent implements OnInit {
  plantes: Plante[] = [];

  constructor(private planteService: PlanteService, private router: Router) {}

  ngOnInit() {
    this.planteService.obtenirPlantes().subscribe((plantes) => {
      this.plantes = plantes;
    });
  }

  voirHistorique(id: number) {
    console.log("Voir l'historique de la plante avec ID :", id);
    this.router.navigate(['/historique', id]);
  }

  editerPlante(id: number) {
    console.log('Éditer la plante avec ID :', id);
    this.router.navigate(['/editer', id]);
  }
}
