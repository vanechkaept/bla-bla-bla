import * as moment from 'moment';

export interface Day{
  value: moment.Moment,
  now?: boolean,
  disabled?: boolean,
  selected?: boolean

}
