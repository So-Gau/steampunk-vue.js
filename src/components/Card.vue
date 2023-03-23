<script setup lang="ts">
    import { ref } from 'vue';

    const props = defineProps({
        name: {
            type: String,
            default: '',
        },
        image: {
            type: String,
            default: null,
        },
        imgBadge: {
            type: String,
            default: null,
        }
    });

    const bep = 'test';
    // objectif stocker les différents personnages dans un tableau, elle doit contenir : l'id, le badge avec url, l'image avec l'url et le nom
                 
        
</script>

<template>
    <div class="cardBackground m-auto">
        <!-- <img v-for="charactere in characteres"> -->
        <div class="headerEmbleme flex justify-center items-center">
            <img :src="props.imgBadge" alt="">
        </div>
        <div class="imgCharactere">
            <img :src="props.image" alt="">
            <h1>{{props.name}}</h1>
            <!-- {charactere.charactere.img} -->
            <!-- {charactere.name} -->
        </div>
    </div>
</template>

<style scoped lang="scss">
    .cardBackground {
        width: 170px;
        height: 315px;
        background: linear-gradient(88.47deg, rgba(141, 84, 30, 0.9) 2.47%, rgba(187, 120, 37, 0.9) 99.9%);
        border: 3px solid #EDB571;
        .headerEmbleme {
            height: 55px;
        }
    }
</style>