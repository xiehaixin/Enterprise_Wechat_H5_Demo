<template>
 <div class="bar">
   <div class="barContent">
   <div class="flex_block">
     <div class="inline_box">
      <div class="inline_boxin">
        <i class="icon icon-gwcar-gzh"></i>
        <a id="badgeNum">1</a>
      </div>
      <div class="under_words">购物车</div>
     </div>
     <div class="inline_box">
      <div class="inline_boxin">
        <i class="icon icon-kefu-gzh"></i>
      </div>
      <div class="under_words">客服</div>
     </div>
     <div class="inline_box">
      <div class="inline_boxin">
        <i class="icon icon-fenxiang1"></i>
      </div>
      <div class="under_words">分享</div>
     </div>
   </div>
   <div class="to_gwc">
        <a temp-href="/weixin/shoppingCar" class="btn_gwc gray-color" id="goShopCar">
            去购物车结算
        </a>
    </div>
 </div>
 </div>
</template>

<script>
export default {
 data() {
  return {

  }
 },
 components: {

 }
}
</script>

<style scoped lang="scss">
@import "@/common/scss/mixin.scss";
.bar{
  position: fixed;
    bottom: 0;
    width: 100%;
    background: #FFFFFF;
    .barContent{
      @include fcs;
      .flex_block{
        @include fcs;
        width: 43%;
        .inline_box{
          width: 33.3%;
          text-align: center;
          color:#999;
          position: relative;
          #badgeNum{
            background: red;
            text-align: center;
            border-radius: 50%;
            font-size: 12px;/*px*/
            color: #FFFFFF;
            width: 16px;
            height: 16px;
            display: block;
            position: absolute;
            top: -5px;
            right: 7px;
          }
          .icon{
            font-size: 24px;/*px*/
          }
          .under_words{
            font-size: 10px;/*px*/
          }
        }
      }
      .to_gwc{
        width: 57%;
        height: 44px;
        #goShopCar{
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          @include mainBgColor;
          @include fontColor;
          font-size: 16px;/*px*/
        }
      }
    }
}
</style>
