<template>
    <div class="below-banner-item">

        <div 
            :class="{
                'below-banner-item-border': true,
                'below-banner-item-border-active': hasBorder
            }">
            <div></div>
        </div>

        <div 
            class="below-banner-item-icon"
            :style="{
                backgroundImage: 'url(' + icon + ')'
            }"></div>
        <div class="below-banner-item-main">
            <p class="below-banner-item-main-title">{{title}}</p>
            <p class="below-banner-item-main-title-sub">{{subTitle}}</p>
        </div>
    </div>
</template>
<style>

.below-banner-item{

    position: relative;

    display: flex;
    flex-flow: row wrap;
    align-items: center;

    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -webkit-box-sizing: border-box;

    padding: 8px 16px;

}

.below-banner-item-border{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
}

.below-banner-item-border div{
    width: 100%;
    height: 70%;
}
.below-banner-item-border-active div{

    border-left: 1px solid #ccc;

}
.below-banner-item-icon{
    width: 110px;
    height: 110px;

    position: relative;
    top: 0;

    background-size: cover;
    background-position-y: 0;
    background-position-x: 50%;

    transition: top 0.4s;
}


.below-banner-item:hover .below-banner-item-icon{
    top: -16px;
}

.below-banner-item-main{
    flex: 1;
    margin-left: 8px;
}

.below-banner-item-main-title{
    font-size: 16px;

    transition: color 0.4s;
}

.below-banner-item:hover .below-banner-item-main-title{
    color: #2277da;
}

.below-banner-item-main-title-sub{
    font-size: 13px;
    color: #888;
}

</style>
<script>
export default {

    props: {
        icon: {
            type: String,
            default: ""
        },
        title: {
            type: String,
            default: ""
        },
        subTitle: {
            type: String,
            default: ""
        },
        hasBorder: {
            type: Boolean,
            default: false
        }
        
    }

}
</script>


