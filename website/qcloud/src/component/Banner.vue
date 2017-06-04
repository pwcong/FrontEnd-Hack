<template>
    <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide
            class="swiper-banner-item"
            :style="{
                backgroundImage: 'url(' + banners[0] + ')'
            }">
        </swiper-slide>
        <swiper-slide
            class="swiper-banner-item"
            :style="{
                backgroundImage: 'url(' + banners[1] + ')'
            }">
        </swiper-slide>
        <swiper-slide
            class="swiper-banner-item"
            :style="{
                backgroundImage: 'url(' + banners[2] + ')'
            }">
        </swiper-slide>
        <swiper-slide
            class="swiper-banner-item"
            :style="{
                backgroundImage: 'url(' + banners[3] + ')'
            }">
        </swiper-slide>
        <swiper-slide
            class="swiper-banner-item"
            :style="{
                backgroundImage: 'url(' + banners[4] + ')'
            }">
        </swiper-slide>
        
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
</template>
<style>

.swiper-banner-item{
    background-position-x: 50%;
    background-size: cover;
    background-position-y: 0;
}

.swiper-pagination span.swiper-pagination-bullet{
    background-color: #aaa;
}

.swiper-pagination span.swiper-pagination-bullet-active{

    background-color: white;

}

</style>
<script>

import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {

    data(){
        return {
            swiperOption: {
                pagination : ".swiper-pagination",
                nextButton: ".swiper-button-next",
                prevButton: ".swiper-button-prev",
                paginationClickable :true,
            },
            banners: [
                "./imgs/banner_1.png",
                "./imgs/banner_2.png",
                "./imgs/banner_3.png",
                "./imgs/banner_4.jpg",
                "./imgs/banner_5.jpg"
            ]

        }
    },
    components: {
        swiper,
        swiperSlide
    }

}
</script>
