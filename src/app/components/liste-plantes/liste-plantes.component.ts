import { Component, OnInit } from '@angular/core';
import { PlanteService } from '../../services/plante.service';
import { Plante } from '../../services/plante.service'; // Assurez-vous d'importer le type Plante

@Component({
  selector: 'app-liste-plantes',
  templateUrl: './liste-plantes.component.html',
  styleUrls: ['./liste-plantes.component.css']
})
export class ListePlantesComponent implements OnInit {
  plantes: Plante[] = []; // Assurez-vous que le type est bien Plante[]

  constructor(private planteService: PlanteService) {}

  ngOnInit() {
    this.planteService.obtenirPlantes().subscribe(plantes => {
      this.plantes = plantes;
    });
  }
}
