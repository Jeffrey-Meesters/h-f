export type countriesType  = [
  {
    countryCode: string,
    name: string
  }
]

export type countryType = {
  commonName: string,
  officialName: string,
  countryCode: string,
  region: string,
  borders: Array<countryType> | null
}