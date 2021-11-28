import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CommonDateService {

  private _monthNames: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  private _weekDays: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  constructor() { }

  /**
   * @description - Get the default date. Currently it is as current Date
   * @param format - Date to be formatted in
   * @returns
   */
  getDefaultDate(format: string = "DD-MM-YYYY"): string {
    let date = moment();
    return moment(date).format(format);
  }

  /**
   * @function getFormattedDate format date string
   * @param format - Format to format the date
   * @param date - Date Object
   */
  private getFormattedDate(format: string, date: Date | string): string {
    return moment(date).format(format);
  }


  /**
   * @description - Get Array of Dates from calender based on the days needed
   * @param format - Format to which date should be formatted to
   * @param initialDay - Sets Initial day from which to add
   * @param daysNeeded - No of days required.
   */
  getCalenderDates(format: string = "DD-MM-YYYY", initialDay: number = 0, daysNeeded: number = 3) {
    if (initialDay < 0) {
      initialDay = 0;
    }
    const calenderDates: string[] = [];
    let date;
    Array.from(Array(daysNeeded)).forEach((x, i) => {
      date = moment().add(i + initialDay, 'days');
      calenderDates.push(moment(date).format(format));
    });
    return calenderDates;
  }

  getMonthName(month: number) {
    const _monthIndex = Number(month) - 1;
    return this._monthNames[_monthIndex]
  }

  getTodaysDate(format: string = "DD-MM-YYYY") {
    let date = moment();
    return moment(date).format(format);
  }

}
