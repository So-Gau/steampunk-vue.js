<script setup>
    import { ref } from 'vue';

    // objectif stocker les différents personnages dans un tableau, elle doit contenir : l'id, le badge avec url, l'image avec l'url et le nom
    const charactere = ref([
        {
            imgEmbleme: '../assets/badge/badge1.png',
            imgCharactere: "../assets/card/card1.png",
            name: "Heroka",
        },
        {
            imgEmbleme: "../assets/badge/badge2.png",
            imgCharactere: "../assets/card/card2.png",
            name: "Selena",
        },
        {
            imgEmbleme: "../assets/badge/badge3.png",
            imgCharactere: "../assets/card/card3.png",
            name: "Fantasy",
        },
        {
            imgEmbleme: "../assets/badge/badge4.png",
            imgCharactere: "../assets/card/card4.png",
            name: "Clark",
        },
        {
            imgEmbleme: "../assets/badge/badge5.png",
            imgCharactere: "../assets/card/card.png",
            name: "Stellar",
        }
    ]);
    console.log(charactere)                   
          

</script>

<template>
    <div class="cardBackground m-auto">
        <!-- <img v-for="charactere in characteres"> -->
        <div class="headerEmbleme flex justify-center items-center">
          /
            <p v-for="charactere in characteres" :key="charactere.id">
                {{ charactere.name }}
            </p>
        </div>
        <div class="imgCharactere">
            <h1>test</h1>
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