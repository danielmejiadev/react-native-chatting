// Dependencies
import moment from 'moment';

/**
 * @file channelHelper.js
 * @author Daniel Mejia
 * @description Channel helper.
 */

/**
 * Format a given date for chat format.
 * @param { object } date The date.
 * @returns { string } The formatted date.
 */
export function formatPreviewDate(date: number): string {
  const today = moment.now();
  const dateToFormat = moment(date);
  const isToday = dateToFormat.diff(today, 'days') === 0;
  return isToday ? dateToFormat.format('h:mm A') : dateToFormat.format('D/M/YY');
}

export default formatPreviewDate;
