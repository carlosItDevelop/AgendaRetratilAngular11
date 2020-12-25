import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import { PacienteListaComponent } from './components/paciente/paciente-lista/paciente-lista.component';
import { PacienteReadComponent } from './components/paciente/paciente-read/paciente-read.component';
import { MedicoListaComponent } from './components/medico/medico-lista/medico-lista.component';
import { MedicoReadComponent } from './components/medico/medico-read/medico-read.component';
import { PacienteCreateComponent } from './components/paciente/paciente-create/paciente-create.component';
import { PacienteDeleteComponent } from './components/paciente/paciente-delete/paciente-delete.component';
import { FooterComponent } from './template/footer/footer.component';
import { NavComponent } from './template/nav/nav.component';
import { HeaderComponent } from './template/header/header.component';
import { MenuComponent } from './template/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PacienteListaComponent,
    PacienteReadComponent,
    MedicoListaComponent,
    MedicoReadComponent,
    PacienteCreateComponent,
    PacienteDeleteComponent,
    FooterComponent,
    NavComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
