<script setup lang="ts">
import useFooStore from "~/store/foo";

const { t } = useI18n();
const fooStore = useFooStore();

const text = computed(() => t(fooStore.chairData?.name ?? ""));

await fooStore.loadData();
</script>

<template>
	<div>
		{{ JSON.parse(JSON.stringify(text)) }}
	</div>
</template>
