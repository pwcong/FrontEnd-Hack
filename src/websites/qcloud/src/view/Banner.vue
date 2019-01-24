<template>
  <swiper
    class="banner-swiper"
    :options="swiperOption"
    ref="mySwiper"
  >
    <swiper-slide
      class="swiper-banner-item swiper-banner-item-center-horizontal"
      :style="{
                backgroundImage: 'url(' + banners[0] + ')',
                alignItems: 'flex-end'
            }"
    >
      <div>
        <button>
          <strong>参与报名</strong>
        </button>
      </div>
    </swiper-slide>
    <swiper-slide
      class="swiper-banner-item swiper-banner-item-center-horizontal"
      :style="{
                backgroundImage: 'url(' + banners[1] + ')',
                alignItems: 'flex-end'
            }"
    >
      <div>
        <button>
          <strong>立即使用</strong>
        </button>
      </div>
    </swiper-slide>
    <swiper-slide
      class="swiper-banner-item swiper-banner-item-center-vertical"
      :style="{
                backgroundImage: 'url(' + banners[2] + ')',
                color: 'white'
            }"
    >
      <div>
        <h1>存储新品火爆公测</h1>
        <p>共享存储、混合云存储、极冷存储，全方位满足业务需求</p>
        <button>立即查看</button>
      </div>
    </swiper-slide>
    <swiper-slide
      class="swiper-banner-item swiper-banner-item-center-vertical"
      :style="{
                backgroundImage: 'url(' + banners[3] + ')',
                color: 'white'
            }"
    >
      <div>
        <h1>容器服务公测上线</h1>
        <p>提供应用部署，助你快速上云</p>
        <button>立即使用</button>
      </div>
    </swiper-slide>
    <swiper-slide
      class="swiper-banner-item swiper-banner-item-center-vertical"
      :style="{
                backgroundImage: 'url(' + banners[4] + ')',
                color: 'white'
            }"
    >
      <div>
        <h1>蓝鲸故障自愈公测上线</h1>
        <p>故障自动化处理，助力“无人值守”</p>
        <p>限量免申请开放试用</p>
        <button>立即查看</button>
      </div>
    </swiper-slide>

    <div
      class="swiper-pagination"
      slot="pagination"
    ></div>
    <div
      class="swiper-button-prev swiper-button-white"
      slot="button-prev"
    ></div>
    <div
      class="swiper-button-next swiper-button-white"
      slot="button-next"
    ></div>
  </swiper>
</template>
<style>
.swiper-banner-item {
  background-position-x: 50%;
  background-size: cover;
  background-position-y: 0;

  display: flex;

  flex-flow: row wrap;

  box-sizing: border-box;
  -ms-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;

  padding: 80px 120px;
}

.swiper-banner-item-center {
  justify-content: center;
  align-items: center;
}
.swiper-banner-item-center-vertical {
  align-items: center;
}

.swiper-banner-item-center-horizontal {
  justify-content: center;
}

.swiper-banner-item h1 {
  font-size: 48px;
}

.swiper-banner-item p {
  font-size: 18px;
}
.swiper-banner-item button {
  border: 1px solid white;
  background-color: transparent;
  color: white;

  border-radius: 2px;

  margin-top: 16px;

  cursor: pointer;

  font-size: 22px;

  padding: 8px 24px;

  transition: color 0.2s, background-color 0.2s;
}
.swiper-banner-item button:hover {
  color: #2277da;
  background-color: white;
}

.swiper-pagination span.swiper-pagination-bullet {
  background-color: #aaa;
  border-radius: 0;
  width: 12px;
  height: 6px;
}

.swiper-pagination span.swiper-pagination-bullet-active {
  background-color: white;
}

.swiper-button-white {
  opacity: 0;

  transition: opacity 0.2s;
}

.banner-swiper:hover .swiper-button-white {
  opacity: 1;
}
</style>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

import banner_1 from "../assets/imgs/banner_1.png";
import banner_2 from "../assets/imgs/banner_2.png";
import banner_3 from "../assets/imgs/banner_3.png";
import banner_4 from "../assets/imgs/banner_4.jpg";
import banner_5 from "../assets/imgs/banner_5.jpg";

export default {
  data() {
    return {
      swiperOption: {
        nextButton: ".swiper-button-next",
        pagination: ".swiper-pagination",
        prevButton: ".swiper-button-prev",
        paginationClickable: true,
        autoplay: 5000,
        loop: true
      },
      banners: [banner_1, banner_2, banner_3, banner_4, banner_5]
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>
