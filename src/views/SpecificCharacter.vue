<template>
    <div v-if="character">
        <div class="container">
            <img :src="character.image" :alt="character.name + ' image'" />
            <div class="data">
                <h1>{{ character.name }}</h1>
                <p>
                    Status: <span>{{ character.status }}</span>
                </p>
                <p>
                    Species: <span>{{ character.species }}</span>
                </p>
                <p>
                    Gender: <span>{{ character.gender }}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { Character } from "../Interfaces";

const { id } = useRoute().params;

const character = ref<Character>();
onMounted(async () => {
    const response = await axios.get(
        "https://rickandmortyapi.com/api/character/" + id
    );
    character.value = response.data;
    console.log(response.data);
});
</script>

<style scoped lang="scss">
.container {
    display: flex;
    gap: 1rem;
}
.data {
    h1 {
        margin: 0;
    }
}
</style>
