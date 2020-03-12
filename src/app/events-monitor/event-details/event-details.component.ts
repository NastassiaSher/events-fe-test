import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../models/Event.model';

class EventToDisplay {
  text: string;
  beForm: string;
  iconName: string;
  done: boolean;
  accepted: boolean;
  changed: boolean;
}

const EVENT_DISPLAY_RULES = {
  done: {
    text: 'Task',
    beForm: 'is',
    iconName: 'done',
    done: true,
    accepted: false,
    changed: false
  },

  accepted: {
    text: 'Invitation',
    beForm: 'was',
    iconName: 'thumb_up',
    done: false,
    accepted: true,
    changed: false
  },
  changed: {
    text: 'Project status',
    beForm: 'was',
    iconName: 'edit',
    done: false,
    accepted: false,
    changed: true
  }
};

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  @Input()
  event: Event;

  eventToDisplay: EventToDisplay;

  constructor() { }

  ngOnInit(): void {
    this.eventToDisplay = EVENT_DISPLAY_RULES[this.event.type];
  }

}
