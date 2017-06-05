<template>
    <div 
        class="hover-list"
        :style="{
            backgroundImage: 'url(' + bg + ')'
        }">

        <div class="hover-list-desc">
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
        <div class="hover-list-main">

        </div>

    </div>
</template>
<style>
.hover-list{

    background-size: cover;
    background-position-x: 50%;
    background-position-y: 0;

    width: 100%;
    height: 700px;

    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;

    padding: 48px 64px 16px 64px;

}

.hover-list-main{
    display: flex;
    align-items: center;
    justify-content: center;

}


</style>
<script>
export default {

    data(){
        return {
            bg: './imgs/mod_bg.png'
        }
    }
  
}
</script>


