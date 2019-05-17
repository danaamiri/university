export interface TimeModel {
  date: number;
  day: number;
  hours: number;
  minutes: number;
  month: number;
  seconds: number;
  time: number;
  timezoneOffset: number;
  year: number;
}

export interface TimestampModel {
  date: number;
  day: number;
  hours: number;
  minutes: number;
  month: number;
  seconds: number;
  time: number;
  timezoneOffset: number;
  year: number;
  nanos: number;
}

export interface SearchRequestModel {
  count: number;
  startIndex: number;
  filter: FilterModel[];
}

export interface FilterModel {
  property: string;
  values: string[];
}
