<template>
    <div class="flipper">
        <span class="fa fa-2x fa-angle-up"></span>
    </div>
</template>
<style>
    .flipper{
        text-align: center;
    }

    .flipper span{
        position: relative;
        top: 16px;
        opacity: 1;

        animation: anim-up 1.6s infinite;
        
    }

    @keyframes anim-up{
        from{
            top: 16px;
            opacity: 1;
        }
        to{
            top: -16px;
            opacity: 0;
        }
    }

</style>

<script>
export default {
  
}
</script>
