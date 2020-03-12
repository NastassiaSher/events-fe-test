import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { EVENTS_LIST } from './consts';
import { Event } from '../models/Event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  public getData(): Observable<Event> {
    return from(EVENTS_LIST);
  }
}
