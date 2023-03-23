<script setup lang="ts">
    import { ref } from 'vue';
    import { register } from 'swiper/element/bundle';

    register();
        const spaceBetween = 10;
        const onProgress = (e) => {
        const [swiper, progress] = e.detail;
        console.log(progress)
        };

        const onSlideChange = (e) => {
        console.log('slide changed')
        }
</script>
<template>
</template>