<template>
    <div class="solution-list">
    
        <div class="solution-list-desc">
            <p :style="{
                        color: 'white',
                        fontSize: '32px'
                    }">在云端继续你的业务</p>
            <p :style="{
                        color: 'white',
                        fontSize: '18px'
                    }">不管你出于什么行业，腾讯云已定制多套解决方案，助你轻松跨入“互联网+”时代</p>
        </div>

        <div class="solution-list-main">

            <ul>
                <li 
                    bg-id="solution-list-bg-1"
                    class="solution-list-item solution-list-item-active"
                    @mouseenter="handleSolutionListItemEnter">
                    视频
                    <div class="solution-list-item-detail">视频</div>
                </li>

                <li 
                    bg-id="solution-list-bg-2"
                    class="solution-list-item"
                    @mouseenter="handleSolutionListItemEnter">
                    游戏
                    <div class="solution-list-item-detail">游戏</div>
                </li>

                <li 
                    bg-id="solution-list-bg-3"
                    class="solution-list-item"
                    @mouseenter="handleSolutionListItemEnter">
                    医疗
                    <div class="solution-list-item-detail">医疗</div>
                </li>

                <li 
                    bg-id="solution-list-bg-4"
                    class="solution-list-item"
                    @mouseenter="handleSolutionListItemEnter">
                    金融
                    <div class="solution-list-item-detail">金融</div>
                </li>

                <li 
                    bg-id="solution-list-bg-5"
                    class="solution-list-item"
                    @mouseenter="handleSolutionListItemEnter">
                    电商
                    <div class="solution-list-item-detail">电商</div>
                </li>

                <li 
                    bg-id="solution-list-bg-6"
                    class="solution-list-item"
                    @mouseenter="handleSolutionListItemEnter">
                    O2O
                    <div class="solution-list-item-detail">O2O</div>
                </li>

                <li 
                    bg-id="solution-list-bg-7"
                    class="solution-list-item"
                    @mouseenter="handleSolutionListItemEnter">
                    微信
                    <div class="solution-list-item-detail">微信</div>
                </li>

                <li 
                    bg-id="solution-list-bg-8"
                    class="solution-list-item"
                    @mouseenter="handleSolutionListItemEnter">
                    旅游
                    <div class="solution-list-item-detail">旅游</div>
                </li>

                <li 
                    bg-id="solution-list-bg-9"
                    class="solution-list-item"
                    @mouseenter="handleSolutionListItemEnter">
                    网站
                    <div class="solution-list-item-detail">网站</div>
                </li>

                <li 
                    bg-id="solution-list-bg-10"
                    class="solution-list-item"
                    @mouseenter="handleSolutionListItemEnter">
                    智能硬件
                    <div class="solution-list-item-detail">智能硬件</div>
                </li>

            </ul>

        </div>

        <div class="solution-list-bg solution-list-bg-active" id="solution-list-bg-1" style="background-image: url(./imgs/s_bg_1.jpg)"></div>
        <div class="solution-list-bg" id="solution-list-bg-2" style="background-image: url(./imgs/s_bg_2.jpg)"></div>
        <div class="solution-list-bg" id="solution-list-bg-3" style="background-image: url(./imgs/s_bg_3.jpg)"></div>
        <div class="solution-list-bg" id="solution-list-bg-4" style="background-image: url(./imgs/s_bg_4.jpg)"></div>
        <div class="solution-list-bg" id="solution-list-bg-5" style="background-image: url(./imgs/s_bg_5.jpg)"></div>
        <div class="solution-list-bg" id="solution-list-bg-6" style="background-image: url(./imgs/s_bg_6.jpg)"></div>
        <div class="solution-list-bg" id="solution-list-bg-7" style="background-image: url(./imgs/s_bg_7.jpg)"></div>
        <div class="solution-list-bg" id="solution-list-bg-8" style="background-image: url(./imgs/s_bg_8.jpg)"></div>
        <div class="solution-list-bg" id="solution-list-bg-9" style="background-image: url(./imgs/s_bg_9.jpg)"></div>
        <div class="solution-list-bg" id="solution-list-bg-10" style="background-image: url(./imgs/s_bg_10.jpg)"></div>
    
    </div>
</template>
<style>
.solution-list {

    

    position: relative;

    width: 100%;

    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;

    padding: 48px 64px 36px 64px;
    
}

.solution-list-main{

    margin-top: 48px;

    width: 100%;

    display: flex;
    align-items: center;
}

.solution-list-main ul{
    margin: 0;
    padding: 0;

    width: 100%;
    height: 80%;

    list-style: none;

    position: relative;

}

li.solution-list-item{
    
    width: 15%;

    padding: 16px 0;

    text-align: center;

    color: white;

    transition: background-color 0.3s;

}

li.solution-list-item-active{
    background-color: #0087fb;
}

.solution-list-item-detail{

    position: absolute;

    border-left: 1px solid #eee;

    top: 0;
    left: 15%;

    width: 80%;
    height: 100%;

    visibility: hidden;

    margin-left: 5%;


}

.solution-list-item-active .solution-list-item-detail{
    visibility: visible;

}

.solution-list-bg{
    position: absolute;
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;

    background-position-x: 50%;
    background-size: cover;
    background-position-y: 0;
    background-repeat: no-repeat;

    z-index: -999;

    opacity: 0;

    transition: opacity 0.6s;
}

.solution-list-bg-active{
    opacity: 1;
}

</style>
<script>
export default {

    methods: {
        handleSolutionListItemEnter(e){

            let solutionListItems = document.getElementsByClassName("solution-list-item");

            for(let i = 0; i < solutionListItems.length; i++){

                solutionListItems[i].className = "solution-list-item";

            }

            e.target.className = "solution-list-item solution-list-item-active"

            let solutionListBgItems = document.getElementsByClassName("solution-list-bg");
            for(let i = 0; i < solutionListBgItems.length; i++){
                solutionListBgItems[i].className = "solution-list-bg";
            }

            document.getElementById(e.target.getAttribute("bg-id")).className = "solution-list-bg solution-list-bg-active";
            

        }
    }

}
</script>


