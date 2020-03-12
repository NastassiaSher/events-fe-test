import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import {Event} from '../models/Event.model';

@Component({
  selector: 'app-events-monitor',
  templateUrl: './events-monitor.component.html',
  styleUrls: ['./events-monitor.component.scss']
})
export class EventsMonitorComponent implements OnInit {

  eventsList: Event[] = [];

  constructor(private service: EventsService) {}

  ngOnInit(): void {
    this.service.getData().subscribe(
      event => this.eventsList.push(event)
    );
  }

}
