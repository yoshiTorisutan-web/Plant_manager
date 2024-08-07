import { Component, OnInit } from '@angular/core';

interface Arrosage {
  plante: string;
  date: Date;
  quantite: number;
}

@Component({
  selector: 'app-historique-arrosage',
  templateUrl: './historique-arrosage.component.html',
  styleUrls: ['./historique-arrosage.component.css']
})
export class HistoriqueArrosageComponent implements OnInit {
  historique: Arrosage[] = []; // Assurez-vous que `historique` est correctement typé

  constructor() {}

  ngOnInit() {
    // Logique pour obtenir l'historique des arrosages
    this.historique = [
      { plante: 'Ficus', date: new Date(), quantite: 1 },
      { plante: 'Cactus', date: new Date(), quantite: 0.5 }
    ];
  }
}
