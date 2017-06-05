<template>

<div>
    <nav-header/>
    <banner 
        :style="{
            height: '500px'
        }"/>
    <below-banner/>
    <hover-list/>
</div>

</template>

<style>

</style>

<script>

import NavHeader from "./NavHeader.vue";
import Banner from "./Banner.vue";
import BelowBanner from "./BelowBanner.vue";
import HoverList from "./HoverList.vue"
export default {

    data(){
        return {
            title: '腾讯云'
        }
    },
    components: {
        NavHeader,
        Banner,
        BelowBanner,
        HoverList

    }
}
</script>
