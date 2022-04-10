<template>
    <div class="block">
        <select @input="handlePageInput" name="page-select" id="page-select">
            <option
                v-for="number in props.maxPages"
                :selected="number == props.current"
                :value="number"
            >
                {{ number }}
            </option>
        </select>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    current: number;
    maxPages: number;
}>();
const emit = defineEmits<{
    (e: "changePage", pageNumber: number): void;
}>();
const handlePageInput = (e: Event) => {
    emit("changePage", parseInt((e.target as HTMLSelectElement).value, 10));
};
</script>

<style scoped lang="scss">
#page-select {
    // for some reason select tag scales weird with rems and pixels, best way i found is to just use %
    position: absolute;
    height: 100%;
    border-radius: 0;
    cursor: pointer;
    appearance: none;
    outline: none;
    background: inherit;
    color: inherit;
    border: none;
    font-size: 1rem;
    // background-color: red;
}
// safari doesnt support text-align-last attribute. Drawback of the solution below is that on safari user has to click on the number itself. Other solution would be to use text-indent but the text wouldn't be perfectly centered as numbers differ in width.
@supports (text-align-last: center) {
    #page-select {
        width: 100%;
        top: 0;
        left: 0;
        text-align-last: center;
    }
}
</style>
