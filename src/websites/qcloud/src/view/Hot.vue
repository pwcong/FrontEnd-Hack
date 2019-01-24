<template>
  <div
    class="hot"
    :style="{backgroundImage: 'url(' + mod_bg + ')'}"
  >
    <div class="hot-desc">
      <p :style="{
            color: '#333',
            fontSize: '32px'
        }">热门动态</p>
    </div>
  </div>
</template>
<style>
.hot {
  position: relative;

  width: 100%;

  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;

  padding: 64px;

  height: 400px;

  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 0;
  background-size: cover;
}
</style>
<script>
import mod_bg from "../assets/imgs/mod_bg.png";
export default {
  data() {
    return {
      mod_bg
    };
  }
};
</script>


