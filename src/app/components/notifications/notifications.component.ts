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
    'Vérifiez le niveau d’humidité de votre plante d’intérieur.',
    'Assurez-vous que vos plantes reçoivent suffisamment de lumière.',
    // Ajoutez plus de notifications ici
  ];
}
