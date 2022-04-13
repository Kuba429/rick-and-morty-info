<template>
    <div class="card">
        <h2>some</h2>
        <h2>r&m</h2>
        <h2>location</h2>
    </div>
</template>

<style scoped lang="scss">
@import "../variables.scss";
.card {
    padding: 1rem;
    background-color: $background2;
    border-radius: 5px;
    display: flex;
    gap: 10px;
    flex-direction: row;
    color: transparent;
    h2 {
        background-color: $background;
        width: fit-content;
    }
}
</style>
