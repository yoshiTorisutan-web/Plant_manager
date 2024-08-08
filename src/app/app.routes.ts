import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterPlanteComponent } from './components/ajouter-plante/ajouter-plante.component';
import { ListePlantesComponent } from './components/liste-plantes/liste-plantes.component';
import { HistoriqueArrosageComponent } from './components/historique-arrosage/historique-arrosage.component';
import { ConseilsRessourcesComponent } from './components/conseils-ressources/conseils-ressources.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { HistoriqueComponent } from './components/historique/historique.component';
import { EditerPlanteComponent } from './components/editer-plante/editer-plante.component';

const routes: Routes = [
  { path: 'ajouter', component: AjouterPlanteComponent },
  { path: 'liste', component: ListePlantesComponent },
  { path: 'historique', component: HistoriqueArrosageComponent },
  { path: 'conseils', component: ConseilsRessourcesComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'historique/:id', component: HistoriqueComponent }, // Page d'historique
  { path: 'editer/:id', component: EditerPlanteComponent }, // Page d'édition
  { path: '', redirectTo: '/liste', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
