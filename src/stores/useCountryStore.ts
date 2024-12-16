import { ref } from 'vue'
import { useFetch } from '../utils/useFetch'
import { defineStore } from 'pinia'
import type { countryType, countryInfoType } from '../types/countryTypes'

export const useCountryStore = defineStore('country', () => {
  const countries = ref<countryType[]>([])
  const selectedCountryInfo = ref<countryInfoType>()
  const selectedCountry = ref<countryType>({countryCode:"NL", name:"Netherlands"})

  const getCountries = async () => {
    const responseData = await useFetch<countryType[]>('/AvailableCountries')
    countries.value = responseData?.data || []
  }

  const getCountry = async (countryCode = 'BO') => {
    const responseData = await useFetch<countryInfoType>(`/CountryInfo/${countryCode}`)
    selectedCountryInfo.value = responseData?.data
  }

  return {
    countries,
    selectedCountry,
    getCountries,
    getCountry
  }
})