<template>
    <div class="container">
        <swiper :options="swiperOption" class="my-swiper-container">
            <swiper-slide >
                <div class="swiper-wrapper-detail">
                    <section>
                        <video-player 
                            :src="firstVideoURL" 
                            :autoplay="true"
                            :loop="true"
                            :style="{
                                width: '100%'
                            }"/>
                    </section>
                    <section
                        :style="{
                            flex: 1
                        }">

                        <div
                            :style="{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexFlow: 'row wrap'
                            }">

                            <h2>
                                工银Visa宇宙星座卡
                            </h2>

                            <div
                                :style="{
                                    width: '80%',
                                    borderBottom: '2px solid #aaa'
                                }">

                            </div>

                            <div
                                :style="{
                                    width: '100%',
                                    textAlign: 'center',
                                    fontSize: '15px'
                                }">

                                <p>免有效期年费，</p>
                                <p>专属年轻人的“黑卡”，</p>
                                <p>正面居然没有卡号，还送网络视频VIP会员，</p>
                                <p>生日当天消费10倍积分，</p>
                                <p>境外任意消费0货币转换费，</p>
                                <p>境外消费，海淘，最高可享21%消费返现，</p>
                                <p>免费境外WIFI</p>
                            </div>

                        </div>

                    </section>
                </div>
            </swiper-slide>
            <swiper-slide >
                <div class="swiper-wrapper-detail">
                    <video-player 
                        :src="secondVideoURL" 
                        :loop="true"
                        :style="{
                            width: '100%',
                            height: '100%'
                        }"/>
                </div>
            </swiper-slide>
            <swiper-slide >
                <div class="swiper-wrapper-detail">
                    <section
                        :style="{
                            height: '60%',
                        }">
                        <swiper
                            :options="secondSwiperOption" 
                            class="my-swiper-container-horizontal">
                            <swiper-slide v-for="bannerImg in bannerImgs" :key="bannerImg">
                                <img
                                    :style="{
                                        maxWidth: '100%',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                    }"
                                    :src="bannerImg"/>
                            </swiper-slide>
                            <div class="swiper-pagination" slot="pagination"></div>
                        </swiper>
                    </section>
                    <section
                        :style="{
                            flex: 1
                        }">

                        <div>
                            <p>每一个星座，都与众不同，</p>
                            <p>每一个梦想，都独一无二。</p>
                        </div>

                    </section>
                </div>
            </swiper-slide>
            <swiper-slide >
                <div class="swiper-wrapper-detail">
                    <section
                        :style="{
                            height: '60%'
                        }">
                        <img
                            :style="{
                                backgroundRepeat: 'norepear',
                                backgroundSize: 'cover',
                                maxWidth: '100%'
                            }" 
                            :src="endImg"/>
                    </section>

                    <section
                        :style="{
                            flex: 1
                        }">

                        <div
                            :style="{
                                textAlign: 'center',

                            }">
                            <p><strong>关注工银行卡公众号，</strong></p>
                            <p><strong>网上办卡轻松搞定</strong></p>

                            <button
                                :style="{
                                    outline: 'none',
                                    marginTop: '8px',
                                    border: 'none',
                                    padding: '8px',
                                    backgroundColor: '#ccc'
                                }">
                                进入公众号在线办卡
                            </button>

                        </div>

                    </section>

                </div>
            </swiper-slide>

        </swiper>
    </div>
</template>


<style>

.container{
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
}

.my-swiper-container{
    height: 100%;
    width: 100%;
}


.swiper-wrapper-detail{
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
}

.swiper-wrapper-detail section{
    position: relative;

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
}

.my-swiper-container-horizontal{
    height: 100%;
    width: 100%;
    
    position: relative;
}
.swiper-pagination .swiper-pagination-bullet{
    background: #aaa;
}

.swiper-pagination .swiper-pagination-bullet-active{
    background: white;
}

</style>
<script>

import { swiper, swiperSlide } from "vue-awesome-swiper";
import VideoPlayer from "../component/VideoPlayer.vue";

export default {

    data() {
        return {
            swiperOption: {
                direction: 'vertical'
            },
            secondSwiperOption: {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                autoplay: 3000
            },
            firstVideoURL: './files/1.mp4',
            secondVideoURL: './files/2.mp4',
            bannerImgs: [
                './imgs/show_1.jpg',
                './imgs/show_2.jpg',
                './imgs/show_3.jpg',
                './imgs/show_4.jpg',
                './imgs/show_5.jpg'
            ],
            endImg: './imgs/end.jpg'
        };
    },
    computed: {
        swiper(){
            return this.$refs.horizontalSwiper.swiper;
        }
    },
    components: {
        swiper,
        swiperSlide,
        VideoPlayer
    }


}
</script>
