<template>

    <div class="hover-show-item">
        <div class="hover-show-item-main hover-show-item-simple">
            <slot name="simple"></slot>
        </div>
        <div class="hover-show-item-main hover-show-item-detail">
            <slot name="detail"></slot>
        </div>
    </div>

</template>
<style>

.hover-show-item{
    border-top: 4px solid #aaa;
    position: relative;
}

.hover-show-item-main{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;

    overflow: hidden;
}

.hover-show-item-simple{

    display: inline;

}

.hover-show-item-detail{
    display: none;
}

.hover-show-item:hover .hover-show-item-simple{

    display: none;

}
.hover-show-item:hover .hover-show-item-detail{
    display: inline;
}





</style>
<script>
export default {
  
}
</script>
