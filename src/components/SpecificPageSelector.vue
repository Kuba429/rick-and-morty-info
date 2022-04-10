<template>
    <div class="block">{{ current }}</div>
</template>

<script setup lang="ts">
const props = defineProps<{
    current: number;
}>();
</script>

<style scoped lang="scss"></style>
