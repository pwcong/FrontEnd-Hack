<template>
    <div class="below-banner">
        <below-banner-item
            v-for="belowBanner in belowBanners"
            :key="belowBanner.title"
            :icon="belowBanner.icon"
            :title="belowBanner.title"
            :subTitle="belowBanner.subTitle"
            :hasBorder="belowBanner.hasBorder"
            :style="{
                flex: 1
            }"
            />

    </div>
</template>
<style>

.below-banner{
    
    width: 100%;

    display: flex;
    flex-flow: row wrap;

}

</style>
<script>

import BelowBannerItem from '../component/BelowBannerItem.vue';

export default {

    data(){
        return {
            belowBanners: [
                {
                    icon: "./imgs/below_banner_1.png",
                    title: "新手上云指南",
                    subTitle: "10分钟快速入门",
                    hasBorder: false
                },
                {
                    icon: "./imgs/below_banner_2.png",
                    title: "免费套餐",
                    subTitle: "0门槛上云实践",
                    hasBorder: true
                },
                {
                    icon: "./imgs/below_banner_3.png",
                    title: "+15元购.cn域名",
                    subTitle: "新购服务器享.cn特价",
                    hasBorder: true

                },
                {
                    icon: "./imgs/below_banner_4.png",
                    title: "数据库迁移预约",
                    subTitle: "10分钟快速入门",
                    hasBorder: true

                }
            ]
        }
    },
    components: {
        BelowBannerItem
    }

}
</script>


