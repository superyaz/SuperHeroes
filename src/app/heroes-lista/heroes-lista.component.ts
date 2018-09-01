import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-lista',
  templateUrl: './heroes-lista.component.html',
  styleUrls: ['./heroes-lista.component.css']
})

export class HeroesListaComponent implements OnInit {
  //Declaro el arreglo para los gustas
  heroes = [];
  constructor() { }

  ngOnInit() {
    this.heroes = JSON.parse(localStorage.getItem('heroes'))
  }
  //Declaro función me gusta para sumar los likes de cada superheroe
  megusta(i) {
    this.heroes[i].megusta++;
    localStorage.setItem('heroes', JSON.stringify(this.heroes))
  }

}
