import { Component } from '@angular/core';
import { HeroService } from './services/hero.service';
import { error } from '../../node_modules/@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SuperHeroes';

//Metodo que carga el componente que me permite obtener  los heroes desde la API  
  constructor(private _heroes: HeroService) {
    this._heroes.obtenerHeroes().subscribe(data => {
      
      if (localStorage.getItem('heroes') == null) {

        for(let i = 0; i< data.length; i++){
//Por cada heroes le agrego el atributo me gusta y lo inicio en cero
          data[i].megusta = 0;
        }
//Me permite enviar la data modificada con los me gusta
         localStorage.setItem('heroes', JSON.stringify(data))
      }

    }, error => {
      console.log(error);
    })

  }
}

