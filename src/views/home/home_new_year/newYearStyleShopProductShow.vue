<template>
<!-- 新年风格店铺和商品的展示 -->
 <div class="newYearStyleShopProductShow" :class="stateStyle">
   <template v-if="springFestivalHome.productLists.length>0">
    <div class="recommendProduct">
          <div class="recommendTitle">
              <span>推荐商品</span>
          </div>
          <div class="recommendContext">
              <a v-for="product in springFestivalHome.productLists" :key="product.pid" class="recommendProductA" :data-pid="product.pid" :temp-href="product.shopId>0?'/weixin/productDetail?pid='+product.pid+'&shopId='+product.shopId:'/weixin/shops?pid='+product.pid+'&brandId=0&typeId=1'">
                <router-link :to="{name:'productDetail'}">
                    <div class="recommendContextText">
                        <img class="recommendProductContextImg" :src="product.bigPictureUrl" :data-bigPictureUrl="product.bigPictureUrl">
                        <p class="recommendProductContextName">{{product.pname}}</p>
                        <p class="recommendProductContextMoney">￥{{product.price}}</p>
                    </div>
                  </router-link>
              </a>
          </div>
      </div>
    </template>
    <template v-if="springFestivalHome.shopLists.length>0">
      <div class="recommendShop">
        <div class="recommendTitle">
            <span>推荐店铺</span>
            <span class="more"><a temp-href="/weixin/shops?pid=0&brandId=0&typeId=2">更多店铺></a></span>
        </div>
        <div class="recommendContext">
          <div v-for="(shop,index) in springFestivalHome.shopLists" :key="index" class="recommendContextText">
              <a :temp-href="'/weixin/products?eid='+springFestivalHome.eid+'&shopId='+shop.shopId+shop.ifGroupBuy?'&isVipShop=1':''">
              <router-link :to="{name:'shop'}">
                  <img class="recommendShopContextImg" :src="shop.pictureUrl">
                  <p class="recommendShopContextName">{{shop.shopName}}</p>
                  <p class="recommendShopContextDistance"><i class="icon icon-icon-add-top"></i>{{distanceConversionKm(shop.distance)}}km</p>
              </router-link>
              </a>
          </div>
        </div>
    </div>
    </template>
    <template v-if="springFestivalHome.brandLists.length>0">
      <div class="recommendBrand">
        <div class="recommendTitle">
            <span>推荐品牌</span>
        </div>
        <div class="recommendContext">
            <a v-for="brand in springFestivalHome.brandLists" :key="brand.brandId" :temp-href="'/weixin/shops?pid=0&brandId='+brand.brandId+'&typeId=3'">
                <div class="recommendContextText">
                    <div class="recommendBrandImg">
                        <img :src="brand.pictureUrl">
                    </div>
                    <div>
                        <p>{{brand.brandName}}</p>
                        <p>{{brand.description}}</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
    </template>
 </div>
</template>

<script>
export default {
 props:[
   'springFestivalHome',
   'state'
 ],
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
 computed:{
   stateStyle:function(){
     console.log(this.state);
     return {
       'homeYear-manager':this.state=="newYear"
     }
   }
 },
 components: {

 }
}
</script>

<style scoped lang="scss">
*{
  box-sizing: border-box;
  line-height: 1.5;
}
.recommendTitle{
  height: 44px;
  font-size: 16px;/*px*/
  color: #333333;
  background: initial;
  display: flex;
  align-items: center;
  padding: 0 12px;
  span:first-child{
    border-left: 2px #333333 solid;
    padding-left: 4px;
    font-weight: 500;
    height: 16px;
    display: flex;
    align-items: center;
  }
  .more{
    font-size: 14px;/*px*/
    position: absolute;
    right: 12px;
    font-weight: 400;
  }
  a{
    color: #333333;
  }
}
.recommendContext{
  display: flex;
  flex-wrap: wrap;
  padding: 0 9px;
  .recommendContextText{
    box-shadow:0px 2px 4px 0px rgba(153,153,153,0.5);
    width: 113px;
    background: #ffffff;
    text-align: center;
    padding: 8px;
    border-radius: 4px;
    margin: 0 3px;
    margin-bottom: 6px;
  }
}
.recommendProduct{
  .recommendProductContextImg{
    width: 97px;
    height: 97px;
  }
  .recommendProductContextName{
    min-height: 38px;
    font-size: 13px;/*px*/
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .recommendProductContextMoney{
    font-size: 14px;/*px*/
    color: #C83D3F;
    font-weight: 600;
  }
}
.recommendShop{
  .recommendContext{
    display: -webkit-box;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    .recommendContextText{
      padding: 6px;
      .recommendShopContextImg{
        width: 95px;
        height: 95px;
        margin-bottom: 4px;
      }
      .recommendShopContextName{
        font-size: 14px;/*px*/
        height: 21px;
        font-weight: 400;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top: -6px;
      }
      .recommendShopContextDistance{
        font-size: 12px;/*px*/
        font-weight: 400;
        color: #666666;
        i{
          margin-right: 3px;
        }
      }
    }
  } 
}
.recommendBrand{
  .recommendContextText{
    width: 351px;
    padding: 10px;
    display: flex;
    align-items: center;
    .recommendBrandImg{
      width: 86px;
      height: 50px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  p{
    text-align: left;
    width: 229px;
    margin: 6px 0 6px 16px;
  }
  p:first-child{
    font-size: 14px;/*px*/
    font-weight: 400;
  }
  p:last-child{
    font-size: 12px;/*px*/
    font-weight: 400;
    color: #999999;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
} 
.homeYear-manager{
  .recommendContext{
    .recommendContextText{
      box-shadow: 0 2px 4px 0px #9f090b;
    }
  }
  .recommendTitle{
    color: #ffffff;
    background: url(~@/../static/yearTextbg@2x.png) no-repeat;
    background-size: 100%;
    span:first-child{
      border-left: 2px #ffffff solid;
    }
    a{
      color: #ffffff;
    }
  }
}
</style>
