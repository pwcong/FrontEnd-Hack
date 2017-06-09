<template>
    <div class="service-list" style="background-image: url(./imgs/mod_bg.png);">
    
        <div class="service-list-desc">
            <p :style="{
                        color: '#333',
                        fontSize: '32px'
                    }">更多的选择给你更大的可能性</p>
            <p :style="{
                        color: '#333',
                        fontSize: '18px'
                    }">腾讯云服务市场联合第三方服务供应商，以更多的选择满足你的业务全面的需求</p>


        </div>
    
        <div class="service-list-main">

            <div class="service-list-item">
                <img :src="'./imgs/s_1.png'"/>
                <p style="font-size: 18px;">镜像服务</p>
                <p style="font-size: 13px; color: #666;">基础环境/全能环境/管理与监控</p>
                <p style="font-size: 13px; color: #666;">建站模板/安全高可用/Docker容器/业务管理</p>
            </div>
            <div class="service-list-item">
                <img :src="'./imgs/s_2.png'"/>
                <p style="font-size: 18px;">软件服务</p>
                <p style="font-size: 13px; color: #666;">安全软件/网络监控/商业软件</p>
                <p style="font-size: 13px; color: #666;">管理工具/建站系统/企业办公/消息服务</p>
            </div>
            <div class="service-list-item">
                <img :src="'./imgs/s_3.png'"/>
                <p style="font-size: 18px;">运维服务</p>
                <p style="font-size: 13px; color: #666;">数据迁移/故障排查/安全代维</p>
                <p style="font-size: 13px; color: #666;">日常代维/Discuz代维/环境搭建</p>

            </div>

        </div>

    </div>
</template>
<style>
.service-list {

    position: relative;

    width: 100%;

    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;

    padding: 64px;

    background-repeat: no-repeat;
    background-position-x: 50%;
    background-position-y: 0;
    background-size: cover;

}

.service-list-main{

    margin-top: 64px;

    width: 100%;
    
    display: flex;
    flex-flow: row wrap;

    justify-content: space-between;
    align-items: center;
}

.service-list-item{
    width: 30%;

    position: relative;

    text-align: center;

    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;

    padding: 16px 32px;
    top: 0;
    background-color: white;

    transition: top 0.6s, box-shadow 0.6s;

}

.service-list-item:hover{

    top: -4px;
    box-shadow: 0 5px 5px 0 #ccc;
}


</style>
<script>
export default {


}
</script>


