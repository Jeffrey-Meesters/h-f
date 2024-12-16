export type longWeekendDataType =   {
  startDate: string,
  endDate: string,
  dayCount: number,
  needBridgeDay: boolean,
  bridgeDays: string[]
}

export type holidayDataType =  {
  date: string,
  localName: string,
  name: string,
  countryCode: string,
  global: boolean,
  counties: string[],
  launchYear: number,
  types: string[]
}