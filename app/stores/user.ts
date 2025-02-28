import { acceptHMRUpdate, defineStore } from 'pinia'
const __city = '北京'
export const useUserStore = defineStore('user', () => {
  const city = ref(__city)

  function setCity(value: string) {
    localStorage.setItem('city', value)
    city.value = value
  }
  function setDefaultCity() {
    if (import.meta.browser) {
      city.value = localStorage.getItem('city') || __city
    }
  }

  return {
    setCity,
    city,
    setDefaultCity,
  }
})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
