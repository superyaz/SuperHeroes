//Importamos las rutas para poder utilizar nuestros componentes
import { Routes } from "@angular/router";
import { HeroesListaComponent } from "./heroes-lista/heroes-lista.component";
import { HeroesRankingComponent } from "./heroes-ranking/heroes-ranking.component";




/**
 * Se crea la constante, donde se indica que ruta, tiene cada componente
 */
export const appRoutes: Routes = [
    { path: '', component: HeroesListaComponent },
    { path: 'ranking', component: HeroesRankingComponent},    
    {path:'**', component: HeroesListaComponent},
  ];