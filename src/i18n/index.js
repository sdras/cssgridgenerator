import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en.json'
import es from './es.json'
import zh from './zh.json'
import pt from './pt.json'
import fr from './fr.json'
import zhTW from './zh-TW.json'

Vue.use(VueI18n)

const messages = {
  'en': en,
  'es': es,
  'zh': zh,
  'pt': pt,
  'fr': fr,
  'zh-TW': zhTW,
};

const locale = (() => {
  const locales = Object.keys(messages);
  const lang = window.navigator.language;
  if (!lang) { return 'en'; }
  if (locales.includes(lang)) { return lang; }

  const langShort = lang.slice(0, 2);
  if (locales.includes(langShort)) { return langShort; }
  return 'en';
})();

export function createI18n () {
  return new VueI18n({
    locale: locale,
    fallbackLocale: 'en',
    messages,
  });
};
