<template>
    <div class="free" style="background-image: url(./imgs/free-bg.jpg);">
    
        <div class="free-desc">
            <p :style="{
                        color: 'white',
                        fontSize: '32px'
                    }">免费体验，180天免费试用</p>
            <p :style="{
                        color: 'white',
                        fontSize: '18px'
                    }">腾讯云体验馆，提供云服务器、云数据库、DDoS防御等免费试用机会，简单流程开启使用</p>

            <div class="free-action">
                <button>免费试用</button>
            </div>

        </div>
    
    </div>
</template>
<style>
.free {

    position: relative;

    width: 100%;

    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;

    padding: 64px;

    height: 500px;
    
    background-repeat: no-repeat;
    background-position-x: 50%;
    background-size: cover;
    background-position-y: 0;

}

.free-action{
    margin-top: 32px;
}

.free-action button{

    cursor: pointer;

    border: 1px solid white;
    border-radius: 2px;

    padding: 12px 56px;

    background-color: transparent;

    color: white;
    transition: background-color 0.3s, border-color 0.3s, color 0.3s;
}

.free-action button:hover{
    border-color: #0087fb;
    background-color: #0087fb;
}
</style>
<script>
export default {


}
</script>


