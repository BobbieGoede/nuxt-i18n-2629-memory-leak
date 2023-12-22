<script setup lang="ts">
const text = computed(() => {
	const i18n = useNuxtApp().$i18n;
	return i18n.t("seventeen");
});
</script>

<template>
	<div>
		{{ JSON.parse(JSON.stringify(text)) }}
	</div>
</template>
