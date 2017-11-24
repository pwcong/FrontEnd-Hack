<template>
    <div class="video-controller">

        <video 
            ref="video"
            :autoplay="autoplay"
            :loop="loop"
            :src="src"
            />

        <div 
            :class="{
                'video-controller-action': true, 
                'video-controller-action-on': videoPlay
            }" 
            @click="togglePlayVideo">

            <img :src="videoIconURL"/>
        </div>

    </div>
</template>

<style>

.video-controller{
    position: relative;
    overflow: hidden;
}
.video-controller video{

    max-width: 100%;
    min-width: 100%;
}

.video-controller-action{

    left: 0;
    top: 0;
    width: 100%;
    height: 99%;

    position: absolute;
    z-index: 100;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.5);
    opacity: 1;

    transition: opacity 0.3s;

}
.video-controller-action img{
    width: 48px;
    height: 48px;
    opacity: 1;
}

.video-controller-action-on{
    opacity: 0;
}

</style>


<script>
export default {
  
    props: {
        autoplay: {
            type: Boolean,
            default: false
        },
        loop: {
            type: Boolean,
            default: false
        },
        src: {
            type: String,
            require: true
        }
    },
    data(){
        return {
            videoPlay: this.$props.autoplay,
            videoIconURL: './imgs/videoIcon.png'
        }
    },
    mounted(){
        
    },
    methods: {
        togglePlayVideo(){

            this.$data.videoPlay = !this.$data.videoPlay;
            if(this.$data.videoPlay){
                this.$refs.video.play();
            }else{
                this.$refs.video.pause();

            }

        }
    }

}
</script>
