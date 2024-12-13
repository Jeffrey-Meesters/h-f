export type countryType = {
  countryCode: string,
  name: string
}

export type countryInfoType = {
  commonName: string,
  officialName: string,
  countryCode: string,
  region: string,
  borders: Array<countryType> | null
}