<script setup lang="ts">

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper';
import {computed} from 'vue';
import { stringLiteral } from '@babel/types';

// init Swiper:
const modules = [Navigation, Pagination];

const emit = defineEmits(['slide-change']);

// prop charactere in Homeview
const props = defineProps({
    datas: {
        type: Array,
        default: () => [],
    },
    id: Number,
    name: String,
    skill: String,
    url: String,
});

const handleSlideChange = (e: { activeIndex: Number; }) => {
    emit('slide-change', e.activeIndex);
}
console.log(handleSlideChange)
</script>

<template>
    <swiper
    :slidesPerView="1"
    :spaceBetween="70"
    :loop="false"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    @slideChange="handleSlideChange"
    class="mySwiper"
  >
    <swiper-slide v-for="data in datas">
        <div class="embleme">
            <img :src="data.imgEmbleme" alt="">
        </div>
        <div class="skillHeader">
            <h3>{{ data.skill }}</h3>
        </div>
        <div class="contentCard">
            <div class="synopsis">
                <h2>{{ data.name }}</h2>
                <p>
                    {{ data.description }}
                </p>
            </div>
            <div class="text-center">
                <router-link :to="data.url">My Story</router-link>
            </div>
        </div>
    </swiper-slide>
  </swiper>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Average&family=Cinzel:wght@400;600;700;800&family=Cormorant:wght@300;400;500;600;700&family=Gentium+Book+Plus:wght@400;700&display=swap');
#app {
  height: 100%;
}

.mySwiper {
    padding: 55px 55px 0px 55px;
    &::v-deep(.swiper-button-prev) {
        width: 68px;
        height: 44px;
        &::after {
            content:url("../assets/form/left.svg");
            position: relative;
        }
    }
    &::v-deep(.swiper-button-next) {
        width: 68px;
        height: 44px;
        &::after {
            content:url("../assets/form/right.svg");
            position: relative;
        }
    }
    &::v-deep(.swiper-pagination) {
        position: relative;
        bottom: -6px;
        .swiper-pagination-bullet {
            border: 1px solid #ffe9cf;
            background: #150900;
            opacity: 1;
            width: var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,10px));
            height: var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,10px));
            margin: 0 var(--swiper-pagination-bullet-horizontal-gap,8px);
    
        }
        .swiper-pagination-bullet-active {
            background: linear-gradient(180deg, #EDB571 0%, #42312C 100%);
        }
    }
}
.swiper-slide {
    width: 215px;
    height: 370px;
    background: radial-gradient(100% 100% at 0% 100%, #4E2F12 0%, #714211 60.49%, #A25502 100%);
    border: 3px solid #EDB571;
    box-shadow: 10px -1px 7px rgba(0, 0, 0, 0.62);
    word-wrap: break-word;
    .embleme {
        position: absolute;
        top: -50px;
        left: 50%;
        transform: translate(-50%);
        img {
            box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.45);
            height: 75px;
            width: auto;
            border-radius: 50%;
            border-top: 3px solid #edb571;
        }
    }
    .skillHeader {
        display: flex;
        align-items: center;
        height: 55px;
        border-bottom: 1px solid #FDCC91;
        h3{
            text-transform: capitalize;
            color: #FFE9CF;
            font-family: 'Average';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            margin-left: 5px;
        }
    }
    .contentCard {
        display: flex;
        flex-direction: column;
        height: 292px;
        align-items: center;
        justify-content: space-between;
        .synopsis {
            font-family: 'Cormorant';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
            color: #FFE9CF;
            h2 {
                text-align: center;
                margin-top: 30px;
                margin-bottom: 15px;
                font-family: 'Cinzel';
                font-style: normal;
                font-weight: 700;
                font-size: 28px;
                line-height: 38px;
                color: #FFE9CF;
            }
            p {
                width: 80%;
                margin: auto;
            }
        }
        a {
            display: flex;
            background: linear-gradient(180deg, rgba(66, 49, 44, 0.8) 0%, rgba(9, 4, 5, 0.8) 100%);
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 5px;
            padding: 9px;
            border: 1px solid #FDCC91;
            color: #FFE9CF;
        }
    }
}
</style>