<template>
 <div class="firstOrder">
   <div class="firstOrderDiv">
     <router-link to="/shop">
        <a :temp-href="'/weixin/products?eid='+eid+'&shopId='+shopId+'&isVipShop=isVipShop'">
        <div class="head">
            <p>首订优惠</p>
            <p class="lookAtAll">查看全部<i class="icon icon-btn_right"></i></p>
        </div>
        </a>
      </router-link>
        <ul class="discountsProducts">
            <li v-for="(data,index) in firstProducts" :key="index">
              <router-link to="/productDetail">
                <a :temp-href="'/weixin/productDetail?goHome=retreat&pid='+data.pid+'&shopId='+shopId">
                <div class="handline handDiscounts" v-if="data.activityId==11">
                    首订优惠
                </div>
                <div class="handline handHalf" v-else-if="data.activityId==12">
                    首订半价
                </div>
                <div class="proContent">
                    <div class="pImg">
                        <img :src="data.bigPictureUrl" :data-bigPictureUrl="data.bigPictureUrl">
                    </div>
                    <p class="pName">{{data.pname}}</p>
                    <p class="pPrice">￥<span>{{data.vipPrice}}</span></p>
                </div>
                </a>
              </router-link>
            </li>
        </ul>
    </div>
 </div>
</template>

<script>
export default {
 data() {
 return {
   firstProducts:[
     {"activityId":11,"price":40.0,"pictureUrl":"http://sq.shuiqoo.cn/Upload/Product/images/20190321/190321153549299661-x.jpg","cityId":199,"shopId":369,"vipPrice":1.0,"pname":"水趣E矿泉水*12支装","pid":895,"bigPictureUrl":"http://sq.shuiqoo.cn/Upload/Product/images/20190321/190321153549299661-d.jpg","activityName":"首桶优惠","eid":1},
     {"activityId":11,"price":0.01,"pictureUrl":"http://sq.shuiqoo.cn/Upload/Product/images/20190321/190321153550456701-x.jpg","cityId":199,"shopId":369,"vipPrice":0.01,"pname":"08精品矿物质水（运费0.01）","pid":938,"bigPictureUrl":"http://sq.shuiqoo.cn/Upload/Product/images/20190321/190321153550456701-d.jpg","activityName":"首桶优惠","eid":1},
     {"activityId":12,"price":10.0,"pictureUrl":"http://sq.shuiqoo.cn/Upload/Product/images/20190321/190321153435259420-x.jpg","cityId":199,"shopId":369,"vipPrice":0.01,"pname":"水趣A01饮用纯净水19L","pid":42,"bigPictureUrl":"http://sq.shuiqoo.cn/Upload/Product/images/20190321/190321153435259420-d.jpg","activityName":"首桶半价","eid":1}
   ],
   eid:1,
   shopId:1
 }
 },
 components: {

 }
}
</script>

<style scoped lang="scss">
@import "@/common/scss/mixin.scss";
.firstOrder{
  border-top: #F8F8F8 1px solid;
  .firstOrderDiv{
    background: #ffffff;
    margin-bottom: 4px;
    .head{
      @include fcs;
      font-size: 14px;
      padding: 0 10px;
      height: 36px;
      .lookAtAll{
        color: #666666;
        @include fcs(center,initial);
      }
    }
  }
  .discountsProducts{
    display: flex;
    padding: 8px 0 8px 10px;
    border-top: #F8F8F8 1px solid;
    li{
      position: relative;
      width: 110px;
      margin-right: 10px;
      .handline{
        width: 49px;
        height: 20px;
        font-size: 10px;/*px*/
        color: #fff;
        @include fcc;
        border-radius: 0 0 10px 0;
        position: absolute;
        top: 0;
        left: 0;
      }
      .handDiscounts{
        background: #FF6B57;
      }
      .handHalf{
        background: #FDC01F;
      }
      .proContent{
        .pImg{
          width: 110px;
          height: 110px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .pName{
          font-size: 14px;/*px*/
          line-height: 20px;
        }
        .pPrice{
          color: #FF4E00;
          font-size: 12px;/*px*/
          font-weight: 500;
          span{
            font-size: 15px;/*px*/
          }
        }
      }
    }
  }
}
</style>
