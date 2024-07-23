import { createI18n } from "vue-i18n"
import zh from "@/lang/zh.json"
import en from "@/lang/en.json"

const messages = {
  zh,
  en
}

const savedLocale = localStorage.getItem("locale") || "en"

const i18n = createI18n({
  legacy: false,
  messages,
  locale: savedLocale
})

export default i18n
