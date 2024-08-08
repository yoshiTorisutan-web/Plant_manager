import { Component, OnInit } from '@angular/core';
import { NotificationService } from './services/notification.service'; // Assurez-vous que le chemin est correct

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  notificationCount: number = 0; // Stocke le nombre de notifications

  constructor(private notificationsService: NotificationService) {}

  ngOnInit(): void {
    this.notificationsService.getNotifications().subscribe(notifications => {
      this.notificationCount = notifications.length;
    });
  }
}
