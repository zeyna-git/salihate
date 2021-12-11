import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailComponent } from './detail/detail.component';
import { AjoutComponent } from './ajout/ajout.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'ajout', component: AjoutComponent },
  { path: 'detail', component: DetailComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    DetailComponent,
    AjoutComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
