<template>
 <div class="productDetail">
   <adverSwipe state="productDetail" :imglist="imglist"></adverSwipe>
   <div class="product-info model-box" data-role="product-info">
     <div class="productPriceModel">
       <div class="pPM">
         <span>￥</span>
         <span class="vip-price">3.50</span>
       </div>
       <div class="pTM">
         <div class="ticket">可票结算</div>
         <a data-action="add-habit">
           <i class="icon icon-tianjiadaoxiaofeixiguan"></i>
         </a>
       </div>
     </div>
     <h5 class="pro-tit">泉瀧天然矿泉水支装水</h5>
     <div class="synopsis">小分子团、弱碱性矿泉水，泡茶煲汤好选择</div>
     <div class="info-detail">
          <div class="price-box" id="price-box">
              <input type="hidden" name="num" value="0" data-pid="43">
          </div>
          <ul>
              <li style="flex-wrap: wrap;" class="tags">
                  <t style="margin-right:17%;">规格：<span>19L</span></t>
                  
                  
              </li>
          </ul>
      </div>
   </div>
   <div class="freightExplain">
    <div class="freightExplainDiv">
        <div class="freightExplainModel">
            <p>运费说明</p>
            <p>￥0.01</p>
        </div>
        <div class="freightExplainModel">
            <p>配送方式</p>
            <div class="ways">
              <div><i class="icon icon-gouxuan"></i>同城配送</div>
              <div><i class="icon icon-gouxuan"></i>到店自提</div>
            </div>
        </div>
    </div>
  </div>
  <div class="model-box recommend-wrap" data-role="recommend-wrap">
      <h4 class="model-tit">相关优惠</h4>
      <ul class="suggest-list">
          <li>
              <a temp-href="/weixin/productDetail?pid=895&amp;shopId=369">
                  <table>
                      <tbody><tr>
                          <td>
                              <img src=" http://sq.shuiqoo.cn/Upload/Product/images/20190321/190321153549299661-x.jpg " data-bigpictureurl="http://sq.shuiqoo.cn/Upload/Product/images/20190321/190321153549299661-d.jpg" alt="">
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <p>水趣E矿泉水*12支装</p>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <span>
                                  ￥40
                              </span>
                          </td>
                      </tr>
                  </tbody></table>
              </a>
          </li>
          <li>
              <a temp-href="/weixin/productDetail?pid=896&amp;shopId=369">
                  <table>
                      <tbody><tr>
                          <td>
                              <img src=" http://sq.shuiqoo.cn/Upload/Product/images/20190321/190321153550456701-x.jpg " data-bigpictureurl="http://sq.shuiqoo.cn/Upload/Product/images/20190321/190321153550456701-d.jpg" alt="">
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <p>水趣E橙汁*6支装</p>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <span>
                                  ￥10
                              </span>
                          </td>
                      </tr>
                  </tbody></table>
              </a>
          </li>
      </ul>
  </div>
  <div class="model-box store-info-wrap" data-role="store-wrap">
        <div>
            <div class="store-tit-box" data-pictureurl="http://sq.shuiqoo.cn/Upload/Shop/images/20171008/171008104553886281.jpg" data-shopname="松岗3店" data-openinvoice="true">
                <div class="top">
                    <div class="pictureUrl"><img src="http://sq.shuiqoo.cn/Upload/Shop/images/20171008/171008104553886281.jpg"></div>
                    <div class="shop">
                        <p class="shopName">松岗3店</p>
                        <div class="grade" data-grade="2">
                            <shopStars :grade="4"></shopStars>
                        </div>
                    </div>
                </div>
                <div>
                    <a temp-href="/weixin/products?shopId=369&amp;eid=1&amp;isVipShop=isVipShop">
                        <p>进店逛逛<i class="icon icon-btn_right"></i></p>
                    </a>
                </div>

            </div>
            <div class="store-info-list" style="justify-content: space-between;">
                <p class="sendOnTime">平均送达：2分钟</p>
            </div>
                <div class="store-info-list">
                    <p style="padding:.4rem 0">店铺范围 松岗</p>
                </div>
        </div>
    </div>
    <div class="go-ahead ">
        <a class1="open-evaluate" id="showProductEvaluate">查看商品评价<span class="icon icon-ico_awwor_right"></span></a>
    </div>
    <div class="go-ahead " data-role="imgText">
        <a class="open-detail">查看商品详情</a>
        <div v-html="detail"></div>
    </div>

    <div class="bar bar-footer order-bar">
      <div class="table">
        <div class="iconT">
            <a temp-href="/weixin/shoppingCar" id="goBuy">
              <i class="icon icon-gouwuche"></i>
            </a>
            <a temp-href="/weixin/shoppingCar" class="badge" id="badgeNum">1</a>
        </div>
        <div class="btns">
          <div class="go-buy">
              <p><a class="button button-fill btn-yello" data-role="go-buy" data-stepnum="1">立即购买</a></p>
          </div>
          <div class="add-shopCart">
              <p><a data-action="add-shopCart" id="add-shopCart" class="button button-fill btn-yello" data-pid="" data-stepnum="1">加入购物车</a></p>
          </div>
        </div>
      </div>
    </div>
 </div>
</template>
<script>
import adverSwipe from '@/components/AdverSwipe/adverSwipe';
import shopStars from '@/components/ShopStars/shopStars';
export default {
 data() {
  return {
    detail:"<meta charset='utf-8'><meta name='viewport' content='initial-scale=1, maximum-scale=1,user-scalable=no'><style>img{max-width: 100%; width:auto; height:auto;} body{margin:0;padding:0}</style><meta charset=\"utf-8\"/><img src=\"http://sq.shuiqoo.cn/Fn4G-x9Umus8r02wSli30JhVY0n3\"/>",
    imglist:[
      {"id":3,"createTime":"2019-03-21","linkUrl":"http://sq.shuiqoo.cn/Upload/Product/images/20200316/200316173436916601-d.jpg","pictureUrl":"http://sq.shuiqoo.cn/Upload/Product/images/20200316/200316173436916601-d.jpg","describe":"","adType":6,"adName":"VIP订购"},
     {"id":4,"createTime":"2019-03-21","linkUrl":"http://sq.shuiqoo.cn/Upload/Product/images/20200316/200316173436916601-d.jpg","pictureUrl":"http://sq.shuiqoo.cn/Upload/Product/images/20200316/200316173436916601-d.jpg","describe":"","adType":5,"adName":"限购活动"}
    ]
  }
 },
 components: {
  adverSwipe,
  shopStars
 }
}
</script>

<style scoped lang="scss">
@import "@/common/scss/mixin.scss";
.productDetail{
  background: #F8F8F8;
  padding-bottom: 45px;
}
.model-box{
  background: #fff;
  padding: 6px 4px;
  padding-bottom: 0;
  position: relative;
  margin-bottom: 10px;
  .productPriceModel{
    @include fcs;
    padding: 0 10px;
    .pPM{
      color: #FF0000;
      font-size: 16px;/*px*/
      font-weight: 500;
      .vip-price{
        font-size: 25px;/*px*/
      }
    }
    .pTM{
      @include fci;
      .ticket{
        @include fontColor('mainBgColor');
        @include fcc;
        font-size: 12px;/*px*/
        border: 1px solid;
        @include borderColor;
        border-radius: 2px;
        height: 24px;
        width: 56px;
        margin-right: 10px;
      }
      [data-action="add-habit"]{
        i{
          font-size: 30px;/*px*/
        }
        @include fontColor('mainBgColor');
      }
    }
  }
  .pro-tit{
    font-weight: 500;
    line-height: 2em;
    font-size: 15px;/*px*/
    padding: 0 10px;
    color: #000;
    text-align: left;
    background: #fff;
  }
  .synopsis{
    color: #9B9B9B;
    font-size: 13px;/*px*/
    margin-bottom: 6px;
    padding: 0 10px;
  }
  .info-detail{
    padding: 0 10px;
    ul{
      li{
        flex-wrap: wrap;
        color: #AFAFAF;
        font-size: 12px;/*px*/
        border-top: 1px #F8F8F8 solid;
        min-height: 32px;
        @include fci;
        span{
          color:#000;
        }
      }
    }
  }
  .model-tit{
    font-weight: normal;
    border-bottom: #F2F2F2 solid 1px;
    line-height: 2em;
    font-size: 15px;/*px*/
    padding: 0 10px;
    color: #B7B7B7;
    text-align: left;
    background: #fff;
  }
}
.freightExplain{
  .freightExplainDiv{
    background: #ffffff;
    padding: 0 14px;
    font-size: 12px;/*px*/
    margin-bottom: 6px;
    .freightExplainModel{
      @include fci;
      height: 37px;
      p:first-child{
        @include fci;
        width: 70px;
        color: #9B9B9B;
      }
      .ways{
        @include fci;
        div{
          @include fci;
          width: 81px;
          i{
            color :#FF0000;
            margin-right: 5px;
          }
        }
      }
    }
    .freightExplainModel:last-child{
      border-top: 1px #F8F8F8 solid;
    }
  }
}
.model-box.recommend-wrap{
  margin-bottom: 10px;
}
.recommend-wrap {
  .suggest-list{
    overflow: hidden;
    background: #fff;
    padding-top: 8px;
    display: -webkit-box;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    li{
      width: 21%;
      margin: 0 2%;
      table{
        width: 100%;
        text-align: center;
        p{
          color: #bbb;
          font-size: 12px;/*px*/
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          height: 34px;
        }
        span{
          color: #E8A44F;
          font-size: 14px;/*px*/
        }
      }
      img{
        display: block;
        width: 100%;
      }
    }
  }
}
.store-info-wrap{
  .store-tit-box{
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0 10px;
    margin-bottom: 12px;
    .top{
      @include fci;
    }
    .pictureUrl{
      width: 50px;
      height: 50px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .shop{
      margin-left: 8px;
      .shopName{
        color: #3E3C32;
        font-size: 14px;/*px*/
      }
    }
    a{
      color: #999999;
      font-size: 13px;/*px*/
    }
  }
  .store-info-list{
    display: flex;
    color: #999999;
    font-size: 13px;/*px*/
    justify-content: space-between;
  }
} 
.go-ahead{
    padding: 0 10px;
    margin-top: 10px;
    background: #fff;
    a{
      @include fcs;
      height: 44px;
      width: 100%;
      font-size: 14px;/*px*/
      line-height: 2.5em;
      color: #555;
      span{
        display: inline-block;
        float: right;
      }
    }
}
.go-ahead:last-child{
  padding-bottom: 44px;
}
.bar-footer{
  height: 44px;
  position: fixed;
  width: 100%;
  bottom: 0;
  background: #ffffff;
  .table{
    width: 100%;
    height: 100%;
    color: #BABABA;
    font-size: 12px;/*px*/
    @include fcs;
    .iconT{
      position: relative;
      height: 100%;
      i{
        font-size: 40px;/*px*/
        @include fontColor('mainBgColor');
        position: absolute;
        top: -25px;
        left: 22px;
        z-index: 16;
      }
    }
    #badgeNum{
        font-size: 8px;/*px*/
        min-width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        vertical-align: middle;
        position: absolute;
        top: -24px;
        left: 43px;
        z-index: 1001;
        padding: 0;
        color: white;
        background: red;
        border-radius: 50%;
    }
    .go-buy,.add-shopCart{
      width: 100px;
       p{
         .button{
            top: 0;
            @include fcc;
            color:#000;
         }
         [data-action="add-shopCart"]{
            @include mainBgColor;
            @include fontColor;
         }
       } 
    }
    .go-buy{
      p{
         .button{
           @include mainBgColor('followColor');
           color:#ffffff;
         }
      }
    }
    .btns{
      display: flex;
      a{
        height: 44px;
      }
    } 
  }
}
.bar-footer:before{
  content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: auto;
    right: auto;
    height: 1px;
    width: 100%;
    background-color: #f8f5f5;
    display: block;
    z-index: 15;
    -webkit-transform-origin: 50% 0;
    transform-origin: 50% 0;
}
</style>
