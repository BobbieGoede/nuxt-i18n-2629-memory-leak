<script setup lang="ts">
import useFooStore from "~/store/foo";
import TranslationComponent from "~/components/TranslationComponent.vue";

const fooStore = useFooStore();
await fooStore.loadData();
</script>

<template>
	<div>
		<TranslationComponent :product-name="fooStore.chairData?.name ?? ''" />
	</div>
</template>
