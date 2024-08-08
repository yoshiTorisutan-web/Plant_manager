import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notifications = [
    'N’oubliez pas d’arroser votre plante de ficus aujourd’hui.',
    'Votre cactus n’a pas besoin d’arrosage cette semaine.',
    'Vérifiez le niveau d’humidité de votre plante d’intérieur.',
    'Assurez-vous que vos plantes reçoivent suffisamment de lumière.',
    // Ajoutez plus de notifications ici
  ];

  getNotifications(): Observable<string[]> {
    return of(this.notifications);
  }
}
