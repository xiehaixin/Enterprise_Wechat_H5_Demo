<template>
 <li class="storeBuys" :class="state">
   <router-link to="/productDetail">
   <a :temp-href="cid==-2?'#':'/weixin/productDetail?goHome=retreat&pid='+product.pid+'&shopId='+shopId"  :data-fristFreeTag="product.fristFreeTag">
   <div class="productDiv">
     <div class="pImg">
      <img :src="product.bigPictureUrl">
      <svg class="icon icon-svg activity-tag" aria-hidden="true">
          <use xlink:href="#icon-free" v-if="product.fristFreeTag==11"></use>
          <use xlink:href="#icon-half" v-else-if="product.fristFreeTag==12"></use>
      </svg>
      <div v-if="product.popUpOnLine==false" style="position: absolute;top: 0;height: 100%;width: 100%;display: flex;justify-content: center;align-items: center;background: rgba(0,0,0,0.6);color: #fff;font-size: 12px;">已失效</div>
     </div>
     <div class="productDetailed">
       <div>
         <h5>{{product.pname}}</h5>
         <div class="synopsis">{{product.synopsis}}</div>
       </div>
       <div>
          <div class="priNangkuo">
          <span class="vipPrice">￥{{product.vipPrice}}</span>
          <div v-if="product.groupSize>0">
              <div class="groupBookingPriceDiv">

                  <div class="gbpLeft"><div class="gbText">{{product.groupSize}}人团</div><div class="sanjiao"></div></div>
                  <div class="gbpRight">￥{{product.groupPrice}}</div>
              </div>
                <!-- <p style="color:#F8372E;" class="groupBookingPrice"><i class="icon icon-pintuanbiaoqian"></i>￥{{groupPrice}}</p>  -->
          </div>
          <template v-else-if="product.price>product.vipPrice">
              &nbsp;<span class="price">￥{{product.price}}</span>
          </template>
       </div>
      </div>
      <p v-if="!product.popUpOnLine" class="car-add" :data-stepNum="product.stepNum" :data-maxTransactionNum="product.maxTransactionNum" 
       :data-presellId="product.presellId" :data-presellPrice="product.presellPrice" :data-pid="product.pid" :data-vipPrice="product.vipPrice" 
       :data-openScope="openScope" :data-vipSpecialOfferId="cid==-2?product.pid:null" :data-startTime="cid==-2?startTime:null" :data-endTime="cid==-2?endTime:null" 
       :data-xaId="product.xaId" :data-groupPrice="product.groupPrice" :data-presellRemark="product.presellRemark" :data-presellSendTime="product.presellSendTime" 
       :data-presellSendRemark="product.presellSendRemark" :data-hashTicket="product.hashTicket">
          <i class="icon icon-icon-shoppingcar2"></i>
      </p>
     </div>
   </div>
   </a>
   </router-link>
   <div class="correlationDiscountsDiv" v-if="cid!=-2&&product.taocans.length>0">
        <div class="correlationDiscountsLeft">
            <p class="cdTitle">优惠</p>
                <a v-for="(taocan,index) in product.taocans" v-if="index<3" :key="taocan.pid" :temp-href="'/weixin/productDetail?goHome=retreat&pid='+taocan.pid+'&shopId='+shopId"  :data-fristFreeTag="product.fristFreeTag"> 
                    <span>{{correlationDiscounts(taocan.pname)}}</span>
                    </a>
        </div>
        <a :temp-href="'/weixin/productDetail?goHome=retreat&pid='+product.pid+'&shopId='+shopId+'&goHome=goCD'"  :data-fristFreeTag="product.fristFreeTag">
            <div class="correlationDiscountsRight">
                <i class="icon icon-btn_right"></i>
            </div>
        </a>
    </div>
 </li>
</template>

<script>
export default {
  props:[
    "product",
    "shopId",
    "cid",
    "openScope",
    "startTime",
    "endTime",
    'state'
  ],
 data() {
 return {

 }
 },
 computed:{
   
 },
 methods:{
   correlationDiscounts : function(index){
     index = this.trim(index);
      if(index.length>4){
          var end = index.slice(-1);
          if(end!==")"&&end!=="]"&&end!=="）"&&end!=="】"){
              return index.slice(-4);
          }else{
              return index.slice(-5,-1);
          }
      }else{
          return index;
      }
   },
   trim:function(str){
     if(!str||str==""||str.length==0){
       return "";
     }
     return str.replace(/(^\s*)|(\s*$)/g, "");
   }
 },
 components: {

 }
}
</script>

<style scoped lang="scss">
@import "@/common/scss/mixin.scss";
*{
  box-sizing: border-box;
}
.storeBuys{
  padding: 0 7px 6px 7px;
  border-bottom: none;
  background: #ffffff;
  margin-top: 3px;
  .productDiv{
    @include fcs;
    .pImg{
      position: relative;
      img{
        width: 90px;
        height: 90px;
      }
      .activity-tag{
        font-size: 22px;/*px*/
        position: absolute;
        left: 0;
        top: 0;
        width: 29px;
        height: 29px;
      }
    }
    .productDetailed{
      padding: 10px 0;
      min-height: 111px;
      display: flex;
      align-self: stretch;
      flex-flow: column nowrap;
      justify-content: space-between;
      position: relative;
      div{
        position: relative;
      }
      h5{
        font-weight: normal;
        font-size: 14px;/*px*/
        color: #1C1C1C;
        padding: 5px 0;
        width: 245px;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .synopsis{
        font-size: 11px;/*px*/
        color: #A6A6A6;
      }
      .priNangkuo{
        span{
          font-weight: bold;
        }
        .vipPrice{
          font-size: 16px;/*px*/
          color: #FB4F44;
        }
        .price{
          font-size: 12px;/*px*/
          color: #9B9B9B;
          text-decoration: line-through;
        }
        .groupBookingPriceDiv{
          display: flex;
          font-size: 12px;/*px*/
          width: 87px;
          height: 16px;
          background: #FFFAEC;
          margin-bottom: 0;
          margin-left: 7px;
          .gbpLeft{
            background: #FFCC33;
            color: #FFFFFF;
            width: 42px;
            @include fcc;
            .sanjiao{
              width: 0;
              height: 0;
              border: 2px solid;
              border-color: transparent transparent transparent #FFCC33;
              position: relative;
              left: 7px;
            }
          }
          .gbpRight{
            color: #EAAF00;
            width: 45px;
            display: flex;
            justify-content: center;
          }
        }
      }
      .car-add{
        line-height: 1.2rem;
        padding: 0;
        position: absolute;
        right: 0;
        bottom: 0;
        i{
          @include fontColor('mainBgColor');
          font-size: 40px;
        }
      }
    }
  }
  .correlationDiscountsDiv{
    @include fcs;
    margin: 7.5px 0;
    .correlationDiscountsLeft{
      display: flex;
      align-items: center;
      font-size: 12px;/*px*/
      p{
        @include fcc;
        height: 20px;
        width: 56px;
        @include mainBgColor;
        color: #ffffff;
        margin: 0 7.5px;
        border-radius: 50px;
      }
      a{
        @include fcc;
        border-radius: 10px;
        border: 1px #E3E3E3 solid;
        height: 22px;
        margin: 0 7.5px;
        width: initial;
      }
      span{
        margin: 0 8px;
      }
    }
  }
}
.proStorBuys{
  .productDiv {
    .pImg img{
      width: 85px;
      height: 85px;
    }
    .productDetailed{
      h5{
        width: 180px;
      }
      .synopsis{
        max-width: 160px;
      }
    }
  }
  .correlationDiscountsDiv {
    .correlationDiscountsLeft {
      p{
        margin: initial;
      }
      a{
        margin: 0 4px;
      }
      span{
        width: 55px;
        margin: 0 2px;
        text-align: center;
      }
    }
  }
}
</style>
