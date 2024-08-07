import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Plante {
  id: number;
  nom: string;
  espece: string;
  dateAchat: Date;
  image: string;
  besoins: { quantite: number; frequence: number };
  dernierArrosage: Date | null;
}

@Injectable({
  providedIn: 'root',
})
export class PlanteService {
  private plantes: Plante[] = [];
  private nextId = 1; // Pour générer des IDs uniques

  constructor() {}

  ajouterPlante(plante: Omit<Plante, 'id'>): Observable<Plante> {
    const newPlante = { ...plante, id: this.nextId++ };
    this.plantes.push(newPlante);
    return of(newPlante);
  }

  obtenirPlantes(): Observable<Plante[]> {
    return of(this.plantes);
  }

  // Autres méthodes pour gérer les plantes...
}
