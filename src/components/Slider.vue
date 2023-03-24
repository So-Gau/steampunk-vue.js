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

// init Swiper:
const modules = [Navigation, Pagination];

const emit = defineEmits(['slide-change']);

// prop charactere in Homeview
const props = defineProps({
    datas: {
        type: Array,
        default: () => [],
    },
    name: String,
    id: Number,
});

const handleSlideChange = (e) => {
    emit('slide-change', e.activeIndex);
}
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
    @slideChange="handleSlideChange"
    class="mySwiper"
  >
    <swiper-slide v-for="data in datas">
        <div class="embleme">
            <img :src="data.imgEmbleme" alt="">
        </div>
        <div class="skillHeader">
            <h3>-</h3>
        </div>
        <div class="synopsis">
            <h1>{{ data.name }}</h1>
            <p>
                {{ data.description }}
            </p>
        </div>
    </swiper-slide>
  </swiper>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Average&family=Cormorant:wght@300;400;500;600;700&family=Gentium+Book+Plus:wght@400;700&display=swap');
#app {
  height: 100%;
}

.mySwiper {
    padding: 55px 55px 0px 55px;

    &::v-deep(.swiper-pagination) {
        position: relative;
        bottom: -6px;
    }
}

.swiper-slide {
    width: 215px;
    height: 315px;
    background: radial-gradient(100% 100% at 0% 100%, #4E2F12 0%, #714211 60.49%, #A25502 100%);
    border: 3px solid #EDB571;
    box-shadow: 10px -1px 7px rgba(0, 0, 0, 0.62);
    word-wrap: break-word;
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
    .synopsis {
        font-family: 'Cormorant';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: #FFE9CF;
    }
}

.swiper-slide img {
  display: block;
  width: 100%;
}
// pagination
</style>