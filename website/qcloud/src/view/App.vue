<template>

<div>
    <nav-header/>
    <banner 
        :style="{
            height: '500px'
        }"/>
</div>

</template>

<style>

</style>

<script>

import NavHeader from "../component/NavHeader.vue";
import Banner from "../component/Banner.vue";

export default {

    data(){
        return {
            title: '腾讯云'
        }
    },
    components: {
        NavHeader,
        Banner
    }
}
</script>
