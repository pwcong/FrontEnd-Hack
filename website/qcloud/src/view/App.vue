<template>

<div>
    <nav-header/>
    <banner 
        :style="{
            height: '500px'
        }"/>
    <below-banner/>
    <product-list/>
    <solution-list/>
    <power/>
    <defence-state/>
    <service-list/>
    <certification-list/>
    <free/>
    <hot/>
    <my-footer/>
</div>

</template>

<style>

</style>

<script>

import NavHeader from "./NavHeader.vue";
import Banner from "./Banner.vue";
import BelowBanner from "./BelowBanner.vue";
import ProductList from "./ProductList.vue";
import SolutionList from "./SolutionList.vue";
import Power from "./Power.vue";
import DefenceState from "./DefenceState.vue";
import ServiceList from "./ServiceList.vue";
import CertificationList from "./CertificationList.vue";
import Free from "./Free.vue";
import Hot from "./Hot.vue";
import MyFooter from "./MyFooter.vue";

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
        ProductList,
        SolutionList,
        Power,
        DefenceState,
        ServiceList,
        CertificationList,
        Free,
        Hot,
        MyFooter
    }
}
</script>
