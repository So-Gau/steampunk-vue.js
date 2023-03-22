<script setup lang="ts">
import { reactive } from 'vue';


// objectif stocker les différents personnages dans un tableau, elle doit contenir : l'id, le badge avec url, l'image avec l'url et le nom
let image = new Image()
const charactere = reactive ([
    {
        id: 1,
        emblem: "",
        img src:"../",
        name: "Heroka",
    },
    {
        id: 2,
        embleme: "",
        imgCharactere: "",
        name: "Selena",
    },
    {
        id: 3,
        embleme: "",
        imgCharactere: "",
        name: "Fantasy",
    },
    {
        id: 4,
        embleme: "",
        imgCharactere: "",
        name: "Clark",
    },
    {
        id: 5,
        embleme: "",
        imgCharactere: "",
        name: "Stellar",
    }
]);