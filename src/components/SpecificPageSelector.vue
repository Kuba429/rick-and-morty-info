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
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 0;
    cursor: pointer;
    appearance: none;
    outline: none;
    background: inherit;
    color: inherit;
    border: none;
    font-size: 1rem;
    text-align-last: center;
}
// safari doens't support text-align-last attribute so we have to use this hacky way. As far as I know it's impossible to center select tag's content perfectly without text-align-last
@supports not (text-align-last: center) {
    #page-select {
        // closest I found to center
        text-indent: 32%;
    }
}
// other solution is to leave width unset. This way tag is centered by flexbox parent, but it leaves some empty space, meaning a click on area not covered by select tag (corner, side etc of parent block) wouldn't work. It also isn't perfectly centered as two and one digit numbers differ in width
</style>
