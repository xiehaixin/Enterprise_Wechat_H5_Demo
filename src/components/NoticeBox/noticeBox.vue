<template>
 <div class="noticeBox" :style="{backgroundColor:background}" >
    <img v-if="styleId==2" :src="require('@/../static/kuaibao@2x.png')" class="noticeImg"/>
   <svg v-else class="icon icon-svg title-icon" aria-hidden="true" id="clearLocalStorage">
     <use v-if="leftIcon==2" xlink:href="#icon-icon-yanhua-message"></use>
     <use v-else xlink:href="#icon-xiaoxitixing"></use>
   </svg>

   <!-- <div class="noticeBoxCarousel">
     <ul>
       <li>1.足球杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。</li>
       <li>2. 新品上线，敢买我就送，买电子票套餐送余额</li>
     </ul>
   </div> -->
   <transition class="inner-container2 " name="slide" mode="out-in">
      <p class="text2 noticeBoxCarousel" :key="text.id">{{text.val}}</p>
    </transition>
   <!-- <van-notice-bar class="vanNoticeBar" text="足球杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。" color="#666666" :background="background" speed="20" delay=1  /> -->
 </div>
</template>

<script>
import Vue from 'vue';
// import { NoticeBar } from 'vant';

// Vue.use(NoticeBar);

const totalDuration = 2000;
export default {
 props:{
   background:{
     default:'#FFFFFF'
   },
   /**
    * 1 基本喇叭
    * 2 新年鞭炮
    */
   leftIcon:{
     default:1,
   }
 },
 data() {
 return {
   arr: [
    '1.不是被郭德纲发现的，也不是一开始就收为徒弟。',
    '2.现在雅阁这个状态像极了新A4L上市那段日子。',
    '3.低配太寒碜，各种需要加装，中配定价过高，又没啥特色',
    '4.然后各种机油门、经销商造反什么的幺蛾子。',
    '5.看五月销量，建议参考A4，打8折吧。',
  ],
  arr2: [],
  number: 0,
  number2: -1,
 }
 },
 mounted(){
   this.startMove();
 },
 computed: {
   styleId(){
     return this.$store.state.styleId;
   },
   text() {
      return {
        id: this.number,
        val: this.arr[this.number]
      }
    }
 },
 methods:{
   startMove() {
    let timer = setTimeout(() => {
      if (this.number === this.arr.length-1) {
        this.number = 0;
      } else {
        this.number += 1;
      }
      this.startMove();
    }, totalDuration)
  },
 },
 watch: {
   leftIcon (val) {
      console.log('leftIcon',val)
    }
 },
 components: {

 },
}
</script>

<style scoped lang="scss">
@import "@/common/scss/mixin.scss";
.noticeBox{
  @include fci;
  position: relative;
  height: 35px;
  line-height: 35px;
  overflow: hidden;
  .noticeImg{
    position: relative;
    width: 32px;
    left: 13px;
    z-index: 1;
  }
  .noticeBoxCarousel{
    margin-left: 17px;
    height: 100%;
    overflow: hidden;
    color:#666666;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
  }
  #clearLocalStorage{
    position: relative;
    left: 13px;
    z-index: 1;
    width: 26px;
    height: 22px;
  }
  .vanNoticeBar{
    width: 100%;
  }



  .slide-enter-active, .slide-leave-active {
    transition: all 0.2s linear;
  }
  .slide-leave-to {
    transform: translateY(-22px);
  }
  .slide-enter{
    transform: translateY(22px);
  }
}

</style>
