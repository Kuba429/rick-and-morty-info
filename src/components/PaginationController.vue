<template>
    <div class="pagination-controller">
        <!-- display link if the page it's leading to isn't 0, otherwise show div mimicing the link -->
        <router-link
            v-if="pages.prev > 0"
            class="block"
            :to="pages.route + pages.prev"
        >
            <font-awesome-icon icon="angle-left" />
        </router-link>
        <div v-else class="block not-active">
            <font-awesome-icon icon="angle-left" />
        </div>

        <div class="block">{{ pages.current }}</div>

        <router-link
            v-if="pages.next > 0"
            class="block"
            :to="pages.route + pages.next"
        >
            <font-awesome-icon icon="angle-right" />
        </router-link>
        <div v-else class="block not-active">
            <font-awesome-icon icon="angle-right" />
        </div>
    </div>
</template>

<script setup lang="ts">
const { pages } = defineProps<{
    pages: {
        route: string;
        prev: number;
        current: number;
        next: number;
    };
}>();
</script>

<style scoped lang="scss">
@import "../variables";
.pagination-controller {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    gap: 5px;
    .block {
        padding: 1rem;
        height: 1rem;
        width: 1rem;
        border: 2px solid $background2;
        color: $light;
        text-align: center;
        transition: ease all 70ms;
        &.not-active {
            cursor: not-allowed;
            color: $background2;
            border: 2px solid $background2;
        }
        &:not(.not-active):hover {
            background: $background2;
            border: 2px solid $light;
        }
    }
}
</style>
