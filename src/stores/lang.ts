import { defineStore } from 'pinia'

export const useLangStore = defineStore('lang', {
  state: () => ({ lang: 'ja-JP' }),
  getters: {
    getLang: (state) => state.lang
  },
  actions: {
    setLang(lang: string){this.$state.lang = lang;}
  }
})
