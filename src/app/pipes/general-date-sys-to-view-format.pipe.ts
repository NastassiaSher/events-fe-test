import * as moment from 'moment';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'generalDateSysToViewFormat'
})
export class GeneralDateSysToViewFormatPipe implements PipeTransform {
  transform(input: any, format?: string, formatTo?: string): string {
    const formatPattern = formatTo || 'MM/DD/YYYY';
    if (!input) {
      return '';
    }

    if (typeof input === 'number') {
      input = input.toString();
    }
    if (input.length < 8) {
      return '';
    }

    if (format) {
      return moment(input, format).format(formatPattern);
    }

    let res = input.substring(4, 6);
    res += '/';
    res += input.substring(6, 8);
    res += '/';
    res += input.substring(0, 4);

    return res;
  }
}
