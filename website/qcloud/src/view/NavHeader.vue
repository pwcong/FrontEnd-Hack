<template>
<header class="nav-header">
    <div class="nav-header-mask"></div>
    <div class="nav-header-main">
        <div class="nav-header-logo">
            <a href="#">
                <embed  class="nav-header-logo-icon" :src="'./imgs/logo.svg'"/>
            </a>
        </div>
        <div class="nav-header-categories">
            <ul class="nav-header-categories-list">
                <li>
                    <a href="#">云产品</a>
                    <div class="nav-header-categories-detail">
                        云产品
                    </div>
                </li>
                <li>
                    <a href="#">解决方案</a>
                    <div class="nav-header-categories-detail">
                        解决方案
                    </div>
                </li>
                <li>
                    <a href="#">云市场</a>
                    <div class="nav-header-categories-detail">
                        云市场
                    </div>
                
                </li>
                <li>
                    <a href="#">合作与生态</a>
                    <div class="nav-header-categories-detail">
                        合作与生态
                    </div>
                </li>
                <li>
                    <a href="#">文档与支持</a>
                    <div class="nav-header-categories-detail">
                        文档与支持
                    </div>
                </li>
            </ul>
        </div>
        <div class="nav-header-operation">
            <span class="fa fa-search"></span>
            <span>English</span>
            <span>免费体验</span>
            <span>备案</span>
            <span>登陆</span>
            <button class="nav-header-operation-btn">注册有礼</button>
            <button>管理中心</button>
        </div>

    </div>
</header>

</template>
<style>

.nav-header{
    position: absolute;
    left: 0;
    top: 0;
    height: 60px;
    width: 100%;

}

.nav-header a{
    text-decoration: none;
}

.nav-header-mask{
    position: absolute;
    left: 0;
    top: -100%;
    width: 100%;
    height: 100%;
    background-color: #333;

    transition: top 0.1s;
    transition-delay: 0.1s;

    z-index: -100;
}


.nav-header:hover .nav-header-mask{
    top: 0%;
}

.nav-header-main{
    
    max-width: 1200px;
    min-width: 320px;
    height: 100%;

    margin: 0 auto;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
}

.nav-header-logo{
    
    color: white;
    margin-right: 16px;
}

.nav-header-logo-icon{
    height: 25px;
}

.nav-header-categories{
    
}

.nav-header-categories-list{

    list-style: none;

    margin: 0;
    padding: 0;

}

.nav-header-categories-list li{
    float: left;
    padding: 20px;
    font-size: 14px;
    color: white;

    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;

    cursor: default;

    transition: color 0.3s;
    

}

.nav-header-categories-list li a{
    color: white;

    transition: color 0.3s;
}

.nav-header-categories-list li:hover a{
    color: #0087fb;
}

.nav-header-categories-detail{

    background-color: #222;

    z-index: -200;

    position: absolute;
    left: 0;
    top: -1000px;

    width: 100%;
    

    transition: top 0.3s;
    transition-delay: 0.1s;

}

.nav-header-categories-list li:hover .nav-header-categories-detail{
    top: 100%;
}

.nav-header-operation{

    flex: 1;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
}

.nav-header-operation span{
    color: white;
    font-size: 13px;
    padding: 20px 12px;

    cursor: pointer;

    transition: color 0.3s;
}

.nav-header-operation span.fa{
    font-size: 15px;
}   
.nav-header-operation span:hover{
    color: #0087fb;
}

.nav-header-operation button{
    border: 1px solid white;
    color: white;
    font-size: 13px;
    padding: 6px 16px;
    margin: 4px;
    border-radius: 2px;
    background-color: transparent;
    cursor: pointer;

    outline: none;

    transition: border-color 0.3s, background-color 0.3s;
}


.nav-header-operation button:hover{
    border-color: #2277da;
    background-color: #2277da;
}

button.nav-header-operation-btn{
    background-color: white;
    color: #2277da;
}

.nav-header:hover button.nav-header-operation-btn{
    border-color: #0087fb;
    background-color: #0087fb;
    color: white;
}
.nav-header:hover button.nav-header-operation-btn:hover{

    border-color: #2277da;
    background-color: #2277da;

}

</style>
<script>
export default {

}
</script>
