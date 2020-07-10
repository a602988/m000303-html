export const state = () => ({
  locales: ['en', 'tw'],
  locale: 'tw'
})

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}
