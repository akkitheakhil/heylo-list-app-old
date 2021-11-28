import { Injectable } from '@angular/core';
import { ComponentStore } from "@ngrx/component-store";
import { catchError, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { CommonDateService } from '../../../services/common-date.service';
import { of, EMPTY } from 'rxjs';
import { CalendarConfig } from '../models/three-card-calendar.config.model';


export interface ThreeCardCalendarState {
  calendarConfigs: CalendarConfig
  selectedDate: string;
}

const initialState: CalendarConfig = {
  calendarData: [],
  daysNeeded: 3,
  format: "DD-MM-YYYY",
  initialDay: 0
}

@Injectable()
export class ThreeCardCalendarStore extends ComponentStore<ThreeCardCalendarState> {

  constructor(private dateService: CommonDateService) {
    super({ calendarConfigs: initialState, selectedDate: "" });
    this.setDefaultDate();
    this.loadCalendarData();
  }

  private readonly selectCalendarConfig = this.select((state) => state.calendarConfigs);

  readonly selectCalendarData = this.select((state) => state.calendarConfigs?.calendarData);

  readonly selectSelectedDate = this.select((state) => state.selectedDate);

  readonly selectInitialDaySelector = this.select((state) => state.calendarConfigs.initialDay);

  readonly incrementInitialDay = this.updater((state) => ({
    ...state,
    calendarConfigs: { ...state.calendarConfigs, initialDay: state.calendarConfigs.initialDay + 1 },
  }));

  readonly decrementInitialDay = this.updater((state) => ({
    ...state,
    calendarConfigs: { ...state.calendarConfigs, initialDay: state.calendarConfigs.initialDay >= 1 ? state.calendarConfigs.initialDay - 1 : 0 },
  }));

  readonly setInitConfig = this.updater((state, calendarConfigs: CalendarConfig) => ({
    ...state,
    calendarConfigs: {
      ...calendarConfigs,
      calendarData: []
    }
  }));

  readonly setSelectedDate = this.updater((state, selectedDate: string) => ({
    ...state,
    selectedDate: selectedDate
  }));


  private readonly setCalendarData = this.updater((state, calendarData: string[]) => ({
    ...state,
    calendarConfigs: {
      ...state.calendarConfigs,
      calendarData: calendarData
    }
  }));

  private readonly setDefaultDate = this.updater((state) => ({
    ...state,
    selectedDate: this.dateService.getTodaysDate()
  }));

  readonly loadCalendarData = this.effect((trigger$) =>
    trigger$.pipe(
      withLatestFrom(this.selectCalendarConfig),
      switchMap((payload: [void, CalendarConfig]) =>
        of(this.dateService.getCalenderDates(payload[1].format, payload[1].initialDay, payload[1].daysNeeded)).pipe(
          tap((data: string[]) => {
            this.setCalendarData(data);
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );



}
