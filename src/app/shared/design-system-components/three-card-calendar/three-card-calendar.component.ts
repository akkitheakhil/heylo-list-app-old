import {
  ThreeCardCalendarStore,
} from './component-store/three-card-calendar.component-store';
import { CalendarConfig } from './models/three-card-calendar.config.model';
import { Output } from '@angular/core';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'heylo-three-card-calendar',
  templateUrl: './three-card-calendar.component.html',
  styleUrls: ['./three-card-calendar.component.scss'],
  providers: [ThreeCardCalendarStore],
})
export class ThreeCardCalendarComponent implements OnInit {

  constructor(private readonly _store: ThreeCardCalendarStore) { }

  calendarData$ = this._store.selectCalendarData;
  selectedDate$ = this._store.selectSelectedDate;
  initialDaySelector$ = this._store.selectInitialDaySelector;

  @Input() set initConfig(config: CalendarConfig) {
    this._store.setInitConfig(config);
  }

  @Output() selectedDateChange = new EventEmitter<string>()

  ngOnInit(): void {
  }

  getNextDateList() {
    this._store.incrementInitialDay();
    this._store.loadCalendarData();
  }

  getPrevDateList() {
    this._store.decrementInitialDay();
    this._store.loadCalendarData();
  }

  handleSelectedDate(changedDate: string) {
    this._store.setSelectedDate(changedDate);
    this.selectedDateChange.emit(changedDate);
  }

}
