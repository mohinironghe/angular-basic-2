import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES} from './mock-heroes'
import { Observable, of, from } from 'rxjs';
import {MessagesService} from './messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private messageService: MessagesService,private http:HttpClient) { }
  showTodayDate(){
    let date = new Date();
    return date
  }

  // setHeroes():Observable<Hero[]> {
  //   this.messageService.add('heroService: fetched heroes');
  //   return of(HEROES);
  // }
  setHeroes():Observable<Hero[]> {
    
    return this.http.get<Hero[]>(this.heroesUrl);
  }
  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  private log(message: string){
    this.messageService.add(`HeroService: ${message}`);
  }
  // updateHero(hero:Hero): Observable<any>{}
  private heroesUrl = 'api/heroes';
}
