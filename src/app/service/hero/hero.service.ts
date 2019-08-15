import { Injectable } from '@angular/core';
import { HEROES } from '../../heroes/mock-heros';
import { Hero } from '../../heroes/hero';
import { Observable, of } from 'rxjs';
import { MessageService } from '../../service/message/message.service'

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
