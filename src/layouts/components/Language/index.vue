<template>
  <div @click="toggleLocale">
    {{ localeDisplay }}
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useI18n } from "vue-i18n"

const { locale } = useI18n()

const toggleLocale = () => {
  const newLocale = locale.value === "zh" ? "en" : "zh"
  locale.value = newLocale
  localStorage.setItem("locale", newLocale)
}

const localeDisplay = computed(() => {
  return locale.value === "zh" ? "中" : "En"
})
</script>

<style lang="scss" scoped></style>
