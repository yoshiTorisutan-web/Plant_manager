import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Pour la liaison de formulaire
import { AppRoutingModule } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AjouterPlanteComponent } from './components/ajouter-plante/ajouter-plante.component';
import { ListePlantesComponent } from './components/liste-plantes/liste-plantes.component';
import { HistoriqueArrosageComponent } from './components/historique-arrosage/historique-arrosage.component';
import { ConseilsRessourcesComponent } from './components/conseils-ressources/conseils-ressources.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { HistoriqueComponent } from './components/historique/historique.component';
import { EditerPlanteComponent } from './components/editer-plante/editer-plante.component';
import { PlanteService } from './services/plante.service';
import { NotificationService } from './services/notification.service';

@NgModule({
  declarations: [
    AppComponent,
    AjouterPlanteComponent,
    ListePlantesComponent,
    HistoriqueArrosageComponent,
    ConseilsRessourcesComponent,
    NotificationsComponent,
    HistoriqueComponent,
    EditerPlanteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [PlanteService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
