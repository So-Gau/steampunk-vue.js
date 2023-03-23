<script setup lang="ts">

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper';

// init Swiper:
const modules = [Navigation, Pagination];

// prop charactere in Homeview
const props = defineProps({
        name: {
            type: String,
            default: '',
        },
        imgBadge: {
            type: String,
            default: null,
        }
    });
</script>

<template>
    <swiper
    :slidesPerView="1"
    :spaceBetween="60"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
        <div class="embleme">
            <img :src="props.imgBadge" alt="">
        </div>
        <div class="skillHeader">
            <p>Assassin</p>
        </div>
        <div class="synopsis">
            <h1>{{props.name}}</h1>
            <p>
                Utque aegrum corpus quassari etiam levibus solet offensis, 
                ita animus eius angustus et tener, quicquid increpuisset, 
                ad salutis suae dispendium existimans factum aut cogitatum, 
            </p>
        </div>
    </swiper-slide>
    <swiper-slide><div class="embleme">
            <img :src="props.imgBadge" alt="">
        </div>
        <div class="skillHeader">
            <p>Ingenieur</p>
        </div>
        <div class="synopsis">
            <h1>{{props.name}}</h1>
            <p>
                Utque aegrum corpus quassari etiam levibus solet offensis, 
                ita animus eius angustus et tener, quicquid increpuisset, 
                ad salutis suae dispendium existimans factum aut cogitatum, 
            </p>
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="embleme">
            <img :src="props.imgBadge" alt="">
        </div>
        <div class="skillHeader">
            <p>Templier</p>
        </div>
        <div class="synopsis">
            <h1>{{props.name}}</h1>
            <p>
                Utque aegrum corpus quassari etiam levibus solet offensis, 
                ita animus eius angustus et tener, quicquid increpuisset, 
                ad salutis suae dispendium existimans factum aut cogitatum, 
            </p>
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="embleme">
            <img :src="props.imgBadge" alt="">
        </div>
        <div class="skillHeader">
            <p>Nécromencien</p>
        </div>
        <div class="synopsis">
            <h1>{{props.name}}</h1>
            <p>
                Utque aegrum corpus quassari etiam levibus solet offensis, 
                ita animus eius angustus et tener, quicquid increpuisset, 
                ad salutis suae dispendium existimans factum aut cogitatum, 
            </p>
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="embleme">
            <img :src="props.imgBadge" alt="">
        </div>
        <div class="skillHeader">
            <p>Paladin</p>
        </div>
        <div class="synopsis">
            <h1>{{props.name}}</h1>
            <p>
                Utque aegrum corpus quassari etiam levibus solet offensis, 
                ita animus eius angustus et tener, quicquid increpuisset, 
                ad salutis suae dispendium existimans factum aut cogitatum, 
            </p>
        </div>
    </swiper-slide>

  </swiper>
</template>

<style scoped lang="scss">
#app {
  height: 100%;
}

.swiper {
    padding: 55px 55px 0px 55px;
}

.swiper-slide {
    width: 215px;
    height: 315px;
    background: radial-gradient(100% 100% at 0% 100%, #4E2F12 0%, #714211 60.49%, #A25502 100%);
    border: 3px solid #EDB571;
    box-shadow: 10px -1px 7px rgba(0, 0, 0, 0.62);
    word-wrap: break-word;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
// pagination
.swiper-pagination {
    position: relative;
    bottom: -6px;
}
</style>