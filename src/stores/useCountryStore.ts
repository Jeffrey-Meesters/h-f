import { ref } from 'vue'
import { useFetch } from '../utils/useFetch'
import { defineStore } from 'pinia'
import type { countriesType, countryType } from '../types/countryTypes'



export const useCountryStore = defineStore('country', () => {
  const countries = ref<countriesType | []>([])
  const selectedCountryInfo = ref<countryType>()

  const getCountries = async () => {
    const data = await useFetch('GET', '/AvailableCountries')
    countries.value = data;
  }

  const getCountry = async (countryCode = 'BO') => {
    const data = await useFetch('GET', `/CountryInfo/${countryCode}`)
    selectedCountryInfo.value = data;
  }

  return {
    countries,
    getCountries,
    getCountry
  }
})