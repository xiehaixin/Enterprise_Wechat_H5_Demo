<template>
 <div class="adverSwipe">
<van-swipe class="my-swipe" :class="state=='shop'?'shop-swipe':state" :autoplay="3000" indicator-color="white">
  <van-swipe-item v-for="ad in getImg" :key="ad.id"><img :src="ad.pictureUrl"></van-swipe-item>
</van-swipe>
 </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
 props:['state','imglist'],
 data() {
 return {
   imgs:[
     {"id":3,"adName":"VIP订购","pictureUrl":"http://sq.shuiqoo.cn/Upload/Banner/images/20190321/190321155532466030.jpg","linkUrl":"https://sqweixin.haoshui.com.cn/weixin/shopApply","describe":"","adType":6,"createTime":"2019-03-21"},
     {"id":4,"adName":"限购活动","pictureUrl":"http://sq.shuiqoo.cn/Upload/Banner/images/20191018/191018155438339596.jpg","linkUrl":"https://mp.weixin.qq.com/s/gKU2MMF2QzagOxbP9pE2Ww","describe":"","adType":5,"createTime":"2019-03-21"}
   ]
 }
 },
 computed:{
   getImg:function(){
     if(this.imglist){
       return this.imglist;
     }
     return this.imgs;
   }
 },
 components: {

 }
}
</script>

<style scoped lang="scss">
.my-swipe{
  height: 175.781px;
}
.shop-swipe{
  height: 105px;
}
.my-swipe .van-swipe-item {
  text-align: center;
  img{
    width: 100%;
    height: 100%;
  }
}
.productDetail{
  height: 375px;
}
</style>
