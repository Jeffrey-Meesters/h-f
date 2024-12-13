import { ref } from 'vue'
import { useFetch } from '../utils/useFetch'
import { defineStore } from 'pinia'
import type { countryType, countryInfoType } from '../types/countryTypes'

export const useCountryStore = defineStore('country', () => {
  const countries = ref<countryType[]>([])
  const selectedCountryInfo = ref<countryInfoType>()
  const selectedCountry = ref<countryType>({countryCode:"NL", name:"Netherlands"})

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
    selectedCountry,
    getCountries,
    getCountry
  }
})