<script setup lang="ts">
const props = defineProps({ productName: String });
const { t } = useI18n();
const text = computed(() => {
	return t(props.productName);
});
</script>

<template>
	<div>
		{{ JSON.parse(JSON.stringify(text)) }}
	</div>
</template>
