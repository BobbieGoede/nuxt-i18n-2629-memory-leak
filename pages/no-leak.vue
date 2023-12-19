<script setup lang="ts">
import useFooStore from '~/store/foo';

const fooStore = useFooStore();

const text = computed(() => {
  const i18n = useNuxtApp().$i18n;
  return i18n.t('welcome');
})

await fooStore.loadData()
</script>

<template>
  <div>
    {{ JSON.parse(JSON.stringify(text)) }}
  </div>
</template>
