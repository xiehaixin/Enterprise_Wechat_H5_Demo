<template>
 <div class="my">
   <div class="my-bar">
     <div class="freshWXInfo">
       <img src="@/assets/logoShuiqoo.png">
     </div>
     <div class="useMessage">
       <p class="nickName">水趣</p>
       <div class="datum">
         <img :src="require('@/assets/set@2x.png')">
         <p>我的资料</p>
       </div>
     </div>
   </div>
   <div class="choose-bar">
     <div v-for="(bar,index) in chooseBar" :key="index" class="bar">
       <div class="barNumber">{{bar.number}}</div>
       <div class="barName">{{bar.name}}</div>
     </div>
   </div>
   <div class="order-status">
     <div class="orderStatusContent">
      <div v-for="(os,index) in orderStatus" :key="index" class="os">
        <div class="osIcon">
          <i class="icon" :class="os.iconClass"></i>
        </div>
        <div class="osName">{{os.name}}</div>
      </div>
     </div>
   </div>
   <div class="toolsAndServices toolsModule">
     <p class="toolsAndServicesHeader toolsModuleHeader">账号相关</p>
     <ul>
        <li>
            <a temp-href="/weixin/hibits">
                <div class="imgDiv"><img src="@/../static/consumptionCustom@2x.png"></div>
                <p class="toolsTitle">消费习惯</p>
            </a>
        </li>
        <li>
            <a temp-href="/weixin/myEvaluate">
                <div class="imgDiv"><img src="@/../static/myEvaluation@2x.png"></div>
                <p class="toolsTitle">我的评论</p>
            </a>
        </li>
        <li>
            <a temp-href="/weixin/myYatong">
                <div class="imgDiv"><img src="@/../static/myCashPledgeBucket@2x.png"></div>
                <p class="toolsTitle">我的押桶</p>
            </a>
        </li>
        <li>
            <a temp-href="#" id="everyShopNew">
                <div class="imgDiv"><img src="@/../static/theStorePromotion@2x.png"></div>
                <p class="toolsTitle">店铺推广</p>
            </a>
        </li>
        <li>
            <a temp-href="/weixin/vipPurchase" id="myQuotation">
                <div class="imgDiv"><img src="@/../static/vipSpecialOffer@2x.png"></div>
                <p class="toolsTitle">vip特价</p>
            </a>
        </li>
        <li class="invoice">
            <a temp-href="/weixin/receipt">
                <div class="imgDiv"><img src="@/../static/invoice@2x.png"></div>
                <p class="toolsTitle">发票资质</p>
            </a>
        </li>
    </ul>
   </div>
   <div class="integralModule toolsModule">
     <p class="integralModuleHeader toolsModuleHeader">会员积分</p>
     <ul>
        <li>
            <a temp-href="/weixin/myIntegral" id="myQuotation">
                <div class="imgDiv"><img src="@/../static/integral@2x.png"></div>
                <p class="toolsTitle">积分：<span class="integralNum">289</span></p>
            </a>
        </li>
        <li>
            <a temp-href="/weixin/lotteryPrefecture" >
                <div class="imgDiv"><img src="@/../static/luckyDraw@2x.png"></div>
                <p class="toolsTitle">抽奖活动</p>
            </a>
        </li>
        <li>
            <a temp-href="/weixin/integralMall" >
                <div class="imgDiv"><img src="@/../static/creditsExchange@2x.png"></div>
                <p class="toolsTitle">积分兑换</p>
            </a>
        </li>
        <li class="integralShoppingMall">
            <a temp-href="/weixin/integralShoppingMall" >
                <div class="imgDiv"><img src="@/../static/integralShoppingMall@2x.png"></div>
                <p class="toolsTitle">积分商城</p>
            </a>
        </li>
    </ul>
   </div>
   <outsideTab></outsideTab>
 </div>
</template>

<script>
import outsideTab from '@/components/tabbar/outsideTab'
export default {
 data() {
 return {
   chooseBar:[
     {
       name:'余额',
       number:100,
     },
     {
       name:'优惠券',
       number:20
     },
     {
       name:'电子票',
       number:30
     }
   ],
   orderStatus:[
     {
       name:'待付款',
       iconClass:'icon-57meorderstatus1'
     },
     {
       name:'待收货',
       iconClass:'icon-59meorderstatus3'
     },
     {
       name:'待评价',
       iconClass:'icon-60meorderstatus4'
     },
     {
       name:'退款/取消',
       iconClass:'icon-61meorderstatus5'
     },
     {
       name:'全部订单',
       iconClass:'icon-bianzux'
     },
   ]
 }
 },
 components: {
outsideTab
 }
}
</script>

<style scoped lang="scss">
@import "@/common/scss/mixin.scss";
.my-bar{
  @include mainBgColor;
  @include fci;
  padding: 20px 30px;
  .freshWXInfo{
    width: 80px;
    height: 80px;
    margin-right: 20px;
    img{
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .useMessage{
    color:#FFFFFF;
    .nickName{
      margin-bottom: 6px;
      font-size: 17px;/*px*/
    }
    .datum{
      @include fci;
      font-size: 13px;/*px*/
      img{
        width: 12px;
        margin-right: 4px;
      }
    }
  }
}
.choose-bar{
  @include fcs;
  @include mainBgColor;
  .bar{
    color:#FFFFFF;
    width: 100%;
    text-align: center;
    background: rgba(0, 0, 0, 0.05);
    .barNumber{
      font-size: 16px;/*px*/
      height: 24px;
    }
    .barName{
      font-size: 14px;/*px*/
      height: 21px;
    }
  }
}
.order-status{
  .orderStatusContent{
    @include fcs;
    border-top: 6px #F8F8F8 solid;
    border-bottom: 6px #F8F8F8 solid;
    text-align: center;
    .os{
      width: 100%;
      font-size: 14px;/*px*/
      .osIcon{
        height: 36px;
        @include fcc;
        i{
          font-size: 24px;
        }
      }
      .osName{
        height: 21px;
      }
    }
  }
}
.toolsModule{
  .toolsModuleHeader{
    height: 28px;
    font-size: 12px;/*px*/
    padding-left: 19px;
    @include fci;
    border-bottom: 1px #EFEFEF solid;
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    li{
      @include fcc;
      width: 93px;
      height: 70px;
      .imgDiv{
        @include fcc;
        margin-bottom: 5px;
        img{
          width: 30px;
          height: 30px;
        }
      }
      .toolsTitle{
        font-size: 12px;/*px*/
        color: #666666;
      }
    }
  }
} 
.integralModule{
      border-top: 6px #F8F8F8 solid;
}
</style>
