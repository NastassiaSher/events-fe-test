import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsMonitorComponent } from './events-monitor/events-monitor.component';
import { EventDetailsComponent } from './events-monitor/event-details/event-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GeneralDateSysToViewFormatPipe } from './pipes/general-date-sys-to-view-format.pipe';
import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';

@NgModule({
  declarations: [
    AppComponent,
    EventDetailsComponent,
    EventsMonitorComponent,
    GeneralDateSysToViewFormatPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InlineSVGModule
  ],
  providers: [
    GeneralDateSysToViewFormatPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
