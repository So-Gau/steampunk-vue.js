<script setup lang="ts">
</script>

<script setup lang="ts">
</script>

<template>
  <section class="backgroundHome bg-cover bg-no-repeat bg-center">
    <div class="history">
      <h1 class="mt-20 mb-6 text-brown">Hao Lio</h1>
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
      <p class="text-brown">
        Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum 
        gentilitatem oppressi. praediximus enim Montium sub ipso vivendi
        termino his vocabulis appellatos fabricarum culpasse tribunos ut 
        adminicula futurae molitioni pollicitos.
      </p>
    </div>
    <div class="heroes bg-contain bg-no-repeat bg-center"></div>
  </section>
  <section class="halfCercle">

  </section>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Cormorant:wght@300;400;500;600;700&family=Gentium+Book+Plus:wght@400;700&display=swap');;
.backgroundHome {
  background: url(../assets/chateau.png)no-repeat;
  background-color: #f9f4eb;
  height: 100%;
  width: 100%;
  position: absolute;
  .history{
    width: 85%;
    margin: auto;
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
  }
}
.heroes {
  background: url(../assets/fond.png) center no-repeat;
  background-color: #f9f4eb;
  background-size: contain;
  height: 100%;
  width: 100%;
  position: absolute;
}
</style>