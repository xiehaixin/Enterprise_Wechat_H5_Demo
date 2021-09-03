<template>
 <div class="shopModel">
   <a :data-url="'/weixin/products?eid='+shop.eid+'&shopId='+shop.shopId+'&isVipShop=1'" :data-name="shop.shopName" :temp-href="'/weixin/products?eid='+shop.eid+'&shopId='+shop.shopId+'&isVipShop=1'">
      <div class="shopImg">
          <img :src="shop.pictureUrl" alt="">
      </div>
      <div class="shopContent">
          <p class="shopName">{{shop.shopName}}</p>
          <div class="bottom">
              <div class="grade" :data-grade="shop.grade">
                        <shopStars :grade="shop.grade"></shopStars>
                </div>
              <p class="minSendPrice">起送价 ￥{{shop.minSendPrice}} | 配送费 ￥ {{shop.freight}} | {{shop.sendOnTime}}分钟</p>
              <p class="distance" :data-location="shop.location"><i class="icon addressIcon icon-icon-add-top" style="margin-right: 0.08rem;"></i><span class="distanceNum">
                <template v-if="shop.distance>=1000">
                  {{distanceConversionKm(shop.distance)}}km
                </template>
                <template v-else-if="shop.distance<1000">
                  {{shop.distance}}m
                </template>
                </span></p>
          </div>
      </div>
   </a>
 </div>
</template>

<script>
import shopStars from '@/components/ShopStars/shopStars';
export default {
  props:["shop"],
 data() {
 return {

 }
 },
 methods:{
   // 距离换算千米
   distanceConversionKm:function(distance){
     return (distance / 1000).toFixed(2);
   }
 },
 components: {
   shopStars,
 }
}
</script>

<style scoped lang="scss">
@import "@/common/scss/mixin.scss";
*{
  box-sizing: border-box;
}
.shopModel{
  a{
    display: flex;
    height: 110px;
    align-items: center;
    padding: 10px 11px;
    .shopImg{
      width: 90px;
      height: 90px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .shopContent{
      height: 100%;
      display: grid;
      margin-left: 17px;
      .bottom{
        font-size: 12px;/*px*/
        display: flex;
        flex-flow: column;
        justify-content: flex-end;
        
        p{
          color: #9B9B9B;
        }
        .distance{
          i{
            margin-right: 3px;
          }
        }
      }
    }
  }
}
</style>
