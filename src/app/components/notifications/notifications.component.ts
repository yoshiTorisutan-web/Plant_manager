import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  notifications = [
    'N’oubliez pas d’arroser votre plante de ficus aujourd’hui.',
    'Votre cactus n’a pas besoin d’arrosage cette semaine.',
    // Ajoutez plus de notifications ici
  ];
}
