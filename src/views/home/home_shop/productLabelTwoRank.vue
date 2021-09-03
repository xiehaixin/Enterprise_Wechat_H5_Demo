<template>
 <div class="productLabelDiv">
  <div class="pld">
    <ul class="productLabel">
      <li v-for="(tab,index) in shopProducts" :key="index">
        <a :data-role="'type'+tab.cid" @click="changeHash(tab,$event)" :class="{'active':tab.cid===active||tab.cid===parentActive}">
          <div>{{tab.className}}</div>
        </a>
      </li>
    </ul>
    <ul class="productLabelTwoRank">
      <li v-for="(child,t) in childShopClass" :key="t" v-show="child.parentCid===parentActive">
          <a :data-role="'type'+child.cid" @click="changeHashTwoRank(child,$event)" :class="{'active':child.cid===active}">
            <div>{{child.className}}</div>
          </a>
        </li>
    </ul>
  </div>
  <div class="store-buy-div">
    <div v-for="(tab,index) in shopProducts" :key="index">
      <div v-if="tab.childShopClass&&tab.childShopClass.length>0">
        <ul v-for="(child,r) in tab.childShopClass" :key="r" v-show="child.cid===active">
          <storeBuys :product="product" 
          :cid="child.cid" 
          :shopId="shopId" 
          v-for="(product,t) in child.products"
          :key="t"
          
          ></storeBuys>
        </ul>
      </div>
      <div v-else>
        <ul v-show="tab.cid===active">
          <storeBuys :product="product" 
          :cid="tab.cid" 
          :shopId="shopId" 
          v-for="(product,t) in tab.products"
          :key="t"
          ></storeBuys>
        </ul>
      </div>
    </div>
  </div>
 </div>
</template>

<script>
import Vue from 'vue';
import storeBuys from './storeBuys';
import {shopdata} from '@/common/js/shopdata';

export default {
 data() {
  return {
    shopId:1,
    shopProducts:shopdata,
    active:0,
    parentActive:"0",
    changeHashInterval:''
  }
 },
 methods:{
   changeHash(tab,e){
     
    // 有子标签默认选子标签第一个
    if(tab.childShopClass&&tab.childShopClass.length>0){
      this.parentActive = tab.cid;
      this.changeHashTwoRank(tab.childShopClass[0]);
    }else{
      this.active = tab.cid;
      this.parentActive = "0";
    }
    let li = e.currentTarget.parentNode;
    this.transitionChangeHash(li);
   },
   changeHashTwoRank(tab,e){
     this.active = tab.cid;
     if(e){
       let li = e.currentTarget.parentNode;
       this.transitionChangeHash(li);
     }
   },
   transitionChangeHash(li){
      let ul = li.parentNode;
      let lis = ul.childNodes;
      let index = Array.prototype.indexOf.call(lis,li);

      // 尾 要到达的地方
      let tail  = index*24;
      // 初始位置
      let initial = ul.scrollLeft;
      // 过程
      let course = tail-initial;

      // 速度，每毫秒移动的像素
      let speed = 3;
      clearInterval(this.changeHashInterval);
      this.changeHashInterval = setInterval(function(){
          if(course>0){
              if(tail>=initial){
                  ul.scrollLeft = (initial+=speed);
                  return;
              }
          }else{
              if(tail<=initial){
                  ul.scrollLeft = (initial-=speed);
                  return;
              }
          }
          clearInterval(this.changeHashInterval);
      },1);
   }
 },
 computed:{
   childShopClass(){
     let childShopClass = [];
     this.shopProducts.forEach(tab => {
       if(tab.childShopClass&&tab.childShopClass.length>0){
         tab.childShopClass.forEach(child => {
           child.parentCid = tab.cid;
           childShopClass.push(child);
         });
       }
     });
     return childShopClass;
   }
 },
 components: {
   storeBuys
 }
}
</script>

<style scoped lang="scss">
@import "@/common/scss/mixin.scss";
*{
  box-sizing: border-box;
}
.productLabelDiv{
  .pld{
    .productLabel,.productLabelTwoRank{
      display: -webkit-box;
      overflow-x: scroll;
      font-size: 13px;/*px*/
      background: #fff;
    }
    .productLabel{
      li{
        padding: 8px 11px 11px ;
        padding-bottom: 0;
        a{
          color:#666666;
          div{
            padding-bottom: 10px;
          }
        }
        .active{
          color:#333333;
          div{
            padding-bottom: 6px;
            border-bottom: 4px solid;
            @include borderColor;
          }
        }
      }
    }
    .productLabelTwoRank{
      li{
        padding: 8px 11px;
        a{
          div{
            @include fcc;
            background: #F6F6F6;
            height: 20px;
            font-size: 12px;/*px*/
            padding: 0 11px;
            border-radius: 10px;
            color: #666666;;
          }
        }
        .active{
          div{
            border:1px solid;
            @include borderColor;
            @include fontColor('mainBgColor');
            background: #FFFFFF;
          }
        }
      }
    }
  }
}
.productLabel::-webkit-scrollbar,.productLabelTwoRank::-webkit-scrollbar {
  display:none
}
</style>
