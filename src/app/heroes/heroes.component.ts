import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {  HEROES } from '../mock-heroes';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };
  //  heroes = HEROES;
  heroes:Hero[];
  // selectedHero: Hero;
  
  constructor(private heroService: MyserviceService ) { }

  ngOnInit() {
    this.getHeroes();
  }
  // onSelect(hero:Hero): void{
  //   this.selectedHero = hero;
  // }
  getHeroes(): void {
  //  this.heroes = this.heroService.setHeroes();
  
  this.heroService.setHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
