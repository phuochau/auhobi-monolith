import { I18n } from "i18n-js";
import { getLocales } from 'expo-localization';
import { enLocale } from "./en";
import { viLocale } from "./vi";

export const i18n = new I18n({
  en: enLocale,
  vi: viLocale,
});
i18n.defaultLocale = 'en'
i18n.enableFallback = true;

export const deviceLocale = getLocales()?.[0]?.languageCode ?? 'en'
i18n.locale = deviceLocale;

export const t = (key: string): string => {
    return i18n.t(key)
}