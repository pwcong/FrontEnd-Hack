<template>
  <div>
    <nav-header />
    <banner :style="{
            height: '500px'
        }" />
    <below-banner />
    <product-list />
    <solution-list />
    <power />
    <defence-state />
    <service-list />
    <certification-list />
    <free />
    <hot />
    <my-footer />
  </div>
</template>

<style>
html {
  font-family: PingFangSC-Light, "helvetica neue", "hiragino sans gb", arial,
    "microsoft yahei ui", "microsoft yahei", simsun, sans-serif;
}
</style>

<script>
import NavHeader from "./NavHeader";
import Banner from "./Banner";
import BelowBanner from "./BelowBanner";
import ProductList from "./ProductList";
import SolutionList from "./SolutionList";
import Power from "./Power";
import DefenceState from "./DefenceState";
import ServiceList from "./ServiceList";
import CertificationList from "./CertificationList";
import Free from "./Free";
import Hot from "./Hot";
import MyFooter from "./MyFooter";

export default {
  data() {
    return {
      title: "腾讯云"
    };
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
};
</script>
