import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PacienteListaComponent } from './components/paciente/paciente-lista/paciente-lista.component';
import { MedicoListaComponent } from './components/medico/medico-lista/medico-lista.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "pacientes",
    component: PacienteListaComponent
  },
  {
    path: "medicos",
    component: MedicoListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
