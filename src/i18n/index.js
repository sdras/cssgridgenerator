import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en.json'
import es from './es.json'
import zh from './zh.json'
import pt from './pt.json'
import fr from './fr.json'

Vue.use(VueI18n)

const locale = window.navigator.language ? window.navigator.language.substring(0, 2) : "en";

export function createI18n () {
  return new VueI18n({
    locale: locale,
    fallbackLocale: 'en',
    messages: {
      'en': en,
      'es': es,
      'zh': zh,
      'pt': pt,
      'fr': fr
    }
  })
};
