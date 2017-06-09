<template>
    <div class="power" style="background-image: url(./imgs/earth.png);">
    
        <div class="power-desc">
            <p :style="{
                        color: '#333',
                        fontSize: '32px'
                    }">你的成功可以覆盖全球</p>
            <p :style="{
                        color: '#333',
                        fontSize: '18px'
                    }">全球领先的云计算加速平台，让你的用户无论身在何处，均能获得灵活流畅的体验</p>

            <div class="power-action">
                <button>了解更多</button>
            </div>

            <div style="margin-top: 64px;"><img :src="'./imgs/map-1.png'"/></div>
            <div style="margin-top: 64px;"><img :src="'./imgs/map-2.png'"/></div>
            <div style="margin-top: 64px;"><img :src="'./imgs/map-3.png'"/></div>

        </div>
    
    </div>
</template>
<style>
.power {

    position: relative;

    width: 100%;

    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;

    padding: 64px;

    
    background-repeat: no-repeat;
    background-position-x: 80%;

}

.power-action{
    margin-top: 32px;
}

.power-action button{
    border: 1px solid #333;
    border-radius: 2px;

    padding: 12px 56px;

    background-color: transparent;

    transition: background-color 0.3s, border-color 0.3s, color 0.3s;
}

.power-action button:hover{
    border-color: #0087fb;
    background-color: #0087fb;
    color: white;
}
</style>
<script>
export default {


}
</script>


