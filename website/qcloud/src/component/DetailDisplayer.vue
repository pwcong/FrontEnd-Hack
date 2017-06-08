<template>

    <div class="detail-displayer">
        <div 
            v-for="item in items" 
            :class="{
                'detail-displayer-item': true,
                'detail-displayer-item-border-right': item.hasBorderRight
            }"  
            :key="item.key">
            <detail-item>

                <div slot="detail-item-simple" style="text-align: center;">
                    <img :src="item.icon_1" style="width: 50px; height: 50px; margin-top: 16px;"/>
                </div>

                <div slot="detail-item-rich" style="text-align: center;">
                    <img :src="item.icon_2" style="width: 50px; height: 50px; margin-top: 16px;"/>
                </div>

            </detail-item>
        </div>
    </div>

</template>
<style>

.detail-displayer{
    width: 100%;
    height: 100%;

    display: flex;
    flex-flow: row nowrap;
    
    justify-content: space-between;
    align-items: center;

}

.detail-displayer-item{
    flex: 1;
    height: 80%;

    background-color: white;

    border-top: 4px solid #ccc;
    border-bottom: 1px solid #ccc;

    transition: border 0.3s, flex 0.3s, height 0.3s;

}

.detail-displayer-item-border-right{
    border-right: 1px solid #ccc;
}

.detail-displayer-item:hover{
    border-top: 4px solid #0087fb;
    border-bottom: 1px solid #0087fb;
    border-left: 1px solid #0087fb;
    border-right: 1px solid #0087fb;

    flex: 2;

    height: 100%;
    
}


</style>
<script>

import DetailItem from "./DetailItem.vue";


export default {

    data(){
        return {
            items: [
                {key: "detail-item-1", hasBorderRight: true, icon_1: "./imgs/pd_1.png", icon_2: "./imgs/pd_1_.png"},
                {key: "detail-item-2", hasBorderRight: true, icon_1: "./imgs/pd_2.png", icon_2: "./imgs/pd_2_.png"},
                {key: "detail-item-3", hasBorderRight: true, icon_1: "./imgs/pd_3.png", icon_2: "./imgs/pd_3_.png"},
                {key: "detail-item-4", hasBorderRight: true, icon_1: "./imgs/pd_4.png", icon_2: "./imgs/pd_4_.png"},
                {key: "detail-item-5", hasBorderRight: false, icon_1: "./imgs/pd_5.png", icon_2: "./imgs/pd_5_.png"}
            ]
        }
    },
    components: {
        DetailItem
    }

}
</script>
