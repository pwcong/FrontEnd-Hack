<template>
    <div 
        class="product-list"
        :style="{
            backgroundImage: 'url(' + bg + ')'
        }">

        <div class="product-list-desc">
            <p
                :style="{
                    color: '#333',
                    fontSize: '32px'
                }">在这里有你需要的一切</p>
            <p
                :style="{
                    color: '#333',
                    fontSize: '18px'
                }">存储、计算、监控、安全...你所需要的一切云产品，腾讯云均能以业界领先的水平为你提供</p>
        </div>
        <div class="product-list-main">
            <detail-displayer :items="items"/>
        </div>

    </div>
</template>
<style>
.product-list{

    background-size: cover;
    background-position-x: 50%;
    background-position-y: 0;

    width: 100%;

    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;

    padding: 48px 64px 80px 64px;



}

.product-list-main{
    margin-top: 56px;
    width: 100%;
    height: 500px;

}


</style>
<script>

import DetailDisplayer from "../component/DetailDisplayer.vue";

export default {

    data(){
        return {
            bg: './imgs/mod_bg.png',
            items: [
                {key: "detail-item-1", hasBorderRight: true, isActive: false, icon_1: "./imgs/pd_1.png", icon_2: "./imgs/pd_1_.png"},
                {key: "detail-item-2", hasBorderRight: true, isActive: false,icon_1: "./imgs/pd_2.png", icon_2: "./imgs/pd_2_.png"},
                {key: "detail-item-3", hasBorderRight: true, isActive: true,icon_1: "./imgs/pd_3.png", icon_2: "./imgs/pd_3_.png"},
                {key: "detail-item-4", hasBorderRight: true, isActive: false,icon_1: "./imgs/pd_4.png", icon_2: "./imgs/pd_4_.png"},
                {key: "detail-item-5", hasBorderRight: false, isActive: false,icon_1: "./imgs/pd_5.png", icon_2: "./imgs/pd_5_.png"}
            ]
        }
    },
    components: {
        DetailDisplayer
    }
  
}
</script>


