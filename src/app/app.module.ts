//Importamos los modulos para trabajar con las rutas y componentes
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HeroesListaComponent } from './heroes-lista/heroes-lista.component';
import { HeroesRankingComponent } from './heroes-ranking/heroes-ranking.component';
import { appRoutes } from './app.routing';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    HeroesListaComponent,
    HeroesRankingComponent
  ],
  imports: [
    BrowserModule,
    /*Esta linea me permite trabajar con las rutas*/
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
