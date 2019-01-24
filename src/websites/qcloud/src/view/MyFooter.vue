<template>
  <footer class="footer">
    <div class="footer-tips">
      现在注册，即可领取30+款产品免费套餐
      <button>免费注册</button>
      <div
        class="footer-tips-bg"
        :style="{backgroundImage: 'url(' + dynamicBg + ')'}"
      ></div>
    </div>

    <div class="footer-main">
      <div
        class="footer-main-column"
        style="border-bottom: 1px solid #555; height: 64px;"
      ></div>
      <div
        class="footer-main-column"
        style="border-bottom: 1px solid #555; height: 256px;"
      ></div>
      <div class="footer-main-column">
        <p style="color: #ccc; font-size: 12px;">
          <img
            :src="tecent"
            style="height: 24px; margin-right: 16px;"
          >腾讯开放平台 QQ物联 DNSPod 微信公众平台 企业QQ 腾讯优图 腾讯蓝鲸 腾讯微云 友情链接
        </p>
        <p style="color: #ccc; font-size: 12px;">Copyright © 2013-2017 Tencent Cloud. All Rights Reserved. 腾讯云 版权所有 京公网安备 11010802020287 京ICP备11018762号</p>
      </div>
    </div>
  </footer>
</template>
<style>
.footer {
  width: 100%;
}

.footer-tips {
  position: relative;

  width: 100%;

  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -webkit-box-sizing: border-box;

  padding: 36px 128px;

  background-size: cover;
  background-position-x: 50%;
  background-position-y: 0;

  background-repeat: no-repeat;

  text-align: center;

  font-size: 24px;

  color: white;
}

.footer-tips button {
  cursor: pointer;
  margin-left: 32px;
  border: 1px solid white;
  font-size: 16px;
  color: white;
  background-color: transparent;
  padding: 12px 48px;
  border-radius: 2px;

  transition: color 0.3s, background-color 0.3s, border-color 0.3s;
}
.footer-tips button:hover {
  background-color: white;
  color: #0087fb;
  border-color: #0087fb;
}

.footer-tips-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -999;
}

.footer-main {
  width: 100%;

  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;

  background-color: #2e3033;

  padding: 16px 64px;
}

.footer-main-column {
  width: 100%;

  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;

  padding: 16px 8px;
}
</style>
<script>
import tecent from "../assets/imgs/tecent.png";
import dynamicBg from "../assets/imgs/dynamic-bg.jpg";

export default {
  data() {
    return {
      tecent,
      dynamicBg
    };
  }
};
</script>


