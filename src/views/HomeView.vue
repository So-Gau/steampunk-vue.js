<script setup lang="ts">
  import Card from "../components/Card.vue";
  import Slide from "../components/Slide.vue";
  import { ref } from 'vue';
  import card5 from '@/assets/card/card5.png';
  import card4 from '@/assets/card/card4.png';
  import card3 from '@/assets/card/card3.png';
  import card2 from '@/assets/card/card2.png';
  import card1 from '@/assets/card/card1.png';
  import badge1 from '@/assets/badge/badge1.png';
  import badge2 from '@/assets/badge/badge2.png';
  import badge3 from '@/assets/badge/badge3.png';
  import badge4 from '@/assets/badge/badge4.png';
  import badge5 from '@/assets/badge/badge5.png';

  const characteres = ref([
        {
          id: 1,
          imgEmbleme: badge1,
          imgCharactere: card1,
          name: "Heroka",
        },
        {
          id: 2,
          imgEmbleme: badge2,
          imgCharactere: card2,
          name: "Selena",
        },
        {
          id: 3,
          imgEmbleme: badge3,
          imgCharactere: card3,
          name: "Fantasy",
        },
        {
          id: 4,
          imgEmbleme: badge4,
          imgCharactere: card4,
          name: "Clark",
        },
        {
          id: 5,
          imgEmbleme: badge5,
          imgCharactere: card5,
          name: "Stellar",
        }
    ]);
    console.log(characteres)      
</script>

<template>
  <div>
  <section id="history">
      <div class="backgroundHome bg-cover bg-no-repeat bg-center">
        <div class="w-10/12 m-auto">
          <h1 class="pt-20 pb-6 text-brown">Hao Lio</h1>
          <p class="mb-5 text-brown">
            Utque aegrum corpus quassari etiam levibus solet offensis, 
            ita animus eius angustus et tener, quicquid increpuisset, 
            ad salutis suae dispendium existimans factum aut cogitatum, 
            insontium caedibus fecit victoriam luctuosam.
            Victus universis caro ferina est lactisque abundans copia qua 
            sustentantur, et herbae multiplices et siquae alites capi per 
            aucupium possint, et plerosque mos vidimus frumenti usum et vini
            penitus ignorantes.
          </p>
          <p class="text-brown pb-8">
            Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum 
            gentilitatem oppressi. praediximus enim Montium sub ipso vivendi
            termino his vocabulis appellatos fabricarum culpasse tribunos ut 
            adminicula futurae molitioni pollicitos.
          </p>
        </div>
      </div>
      <div>
        <img src="../assets/fond.png" alt="">
      </div>
    </section>
    <section id="containerSlide">
      <div class="containerCharactere">
        <ul>
          <li v-for="charactere in characteres">
            <Card :name="charactere.name" :image="charactere.imgCharactere" :imgBadge="charactere.imgEmbleme" />
          </li>
        </ul>
      </div>
      <div class="containerSlide">
        <Slide />
      </div>
    </section>
  </div>

</template>

<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Cormorant:wght@300;400;500;600;700&family=Gentium+Book+Plus:wght@400;700&display=swap');

  #history {
    background-color: #f9f4eb;
    .backgroundHome {
      background: url(../assets/chateau.png)no-repeat;
      height: 100%;
      width: 100%;
        h1 {
          font-size: 36px;
          font-family: 'Gentium Book Plus', serif;
          font-style: normal;
          font-weight: 700;
          font-size: 36px;
          line-height: 42px;
          letter-spacing: 2px;
        }
        p {
          font-size: 15px;
          font-family: 'Cormorant';
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 18px;
          letter-spacing: 0.04em;
          font-feature-settings: 'pnum' on, 'lnum' on, 'cpsp' on;
        }
      
      .heroes {
        background: url(../assets/fond.png) center no-repeat;
        background-color: #f9f4eb;
        background-size: contain;
        height: 100%;
        width: 100%;
      }
    }
  }
  #containerSlide {
    .containerCharactere {
      background: radial-gradient(103.09% 1253.23% at 100% 48.69%, #150900 0%, #151917 99.3%);
      padding-top: 120px;
    }

  }
</style>