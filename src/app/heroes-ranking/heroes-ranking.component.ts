import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-ranking',
  templateUrl: './heroes-ranking.component.html',
  styleUrls: ['./heroes-ranking.component.css']
})
export class HeroesRankingComponent implements OnInit {
  //Declaro los arreglos controlar los me gusta y mostrar los héroes mas votados  
  heroes = [];
  primeros_cinco = [];
  segundo_cinco = [];

  constructor() { }

  ngOnInit() {
    this.heroes=JSON.parse(localStorage.getItem('heroes'))

    //Función que me permite almacenar en variables los 10 heroes con más votados
    this.heroes.sort(function (a, b) {
      if (a.megusta <=  b.megusta) {
        return 1;
      }
      if (a.megusta > b.megusta) {
        return -1;
      }

      return 0;
    });

    //Me permite mostrar los heroes mas votados
    this.primeros_cinco = this.heroes.slice(0, 5);
    this.segundo_cinco = this.heroes.slice(5, 10);

  }

}
