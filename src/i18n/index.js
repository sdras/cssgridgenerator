import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en.json'
import es from './es.json'
import de from './de.json'

Vue.use(VueI18n)

const locale = window.navigator.language ? window.navigator.language.substring(0, 2) : "de";

export function createI18n () {
  return new VueI18n({
    locale: locale,
    fallbackLocale: 'de',
    messages: {
      'en': en,
      'es': es,
      'de': de
    }
  })
};