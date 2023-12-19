<script setup lang="ts">
import useFooStore from '~/store/foo';

const fooStore = useFooStore();
await fooStore.loadData()

const text = computed(() => {
  const i18n = useNuxtApp().$i18n;
  return i18n.t('seventeen');
})
</script>

<template>
  <div>
    {{ JSON.parse(JSON.stringify(text)) }}
  </div>
</template>
