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
  historique?: { date: Date; evenement: string }[];
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

  obtenirPlanteParId(id: number): Observable<Plante | undefined> {
    const plante = this.plantes.find(p => p.id === id);
    return of(plante);
  }

  editerPlante(planteModifiee: Plante): Observable<Plante | undefined> {
    const index = this.plantes.findIndex(p => p.id === planteModifiee.id);
    if (index !== -1) {
      this.plantes[index] = planteModifiee;
      return of(planteModifiee);
    }
    return of(undefined); // Renvoie `undefined` si la plante n'a pas été trouvée
  }

  supprimerPlante(id: number): Observable<boolean> {
    const index = this.plantes.findIndex(p => p.id === id);
    if (index !== -1) {
      this.plantes.splice(index, 1);
      return of(true); // Renvoie `true` si la suppression a réussi
    }
    return of(false); // Renvoie `false` si la plante n'a pas été trouvée
  }
}
