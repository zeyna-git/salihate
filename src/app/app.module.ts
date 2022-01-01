import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailComponent } from './detail/detail.component';
import { AjoutComponent } from './ajout/ajout.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { UnKaComponent } from './un-ka/un-ka.component';
import { UnKa2Component } from './un-ka2/un-ka2.component';
import { UnKa1Component } from './un-ka1/un-ka1.component';
const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'ajout', component: AjoutComponent },
  { path: 'detail/:idKA', component: DetailComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    DetailComponent,
    AjoutComponent,
    NavComponent,
    FooterComponent,
    UnKaComponent,
    UnKa2Component,
    UnKa1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
