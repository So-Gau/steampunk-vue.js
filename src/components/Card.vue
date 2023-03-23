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
    <div class="cardBackground m-auto relative">
        <!-- <img v-for="charactere in characteres"> -->
        <div class="headerEmbleme flex justify-center items-center">
            <div>
                <img :src="props.imgBadge" alt="">
            </div>
        </div>
        <div class="imgCharactere">
            <img :src="props.image" alt="">
            <h1>{{props.name}}</h1>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .cardBackground {
        width: 215px;
        height: 315px;
        background: linear-gradient(88.47deg, rgba(141, 84, 30, 0.9) 2.47%, rgba(187, 120, 37, 0.9) 99.9%);
        border: 3px solid #EDB571;
        .headerEmbleme {
            height: 55px;
            border-bottom: 2px solid #edb571;
            img {
                height: 40px;
                width: auto;
                border-radius: 50%;
                filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.45));
            }
        }
        .imgCharactere {
            img {
                position: absolute;
                width: 209px;
                height: 253.7px;
                z-index: 1;
            }
            h1 {
                z-index: 2;
                position: absolute;
                left: 20px;
                bottom: 22px;
                text-shadow: #000 2px 0 3px;
                font-family: "Black Ops One", cursive;
                color: #ffffff;
                font-size: 15px;
                text-transform: capitalize;
            }
        }
    }
</style>