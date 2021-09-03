<template>
 <div class="productLabelDiv">
  <div class="pld">
    <ul class="productLabel">
      <li v-for="(tab,index) in shopProducts" :key="index">
        <a :data-role="'type'+tab.cid" @click="changeHash(tab,$event)" :class="{'active':tab.cid===active}">
          <div>{{tab.className}}</div>
        </a>
      </li>
    </ul>
  </div>
  <div class="store-buy-div">
    <ul v-for="(tab,index) in shopProducts" :key="index">
      <storeBuys :product="product" 
       :cid="tab.cid" 
       :shopId="shopId" 
       v-for="(product,t) in tab.products"
       :key="t"
       v-show="tab.cid===active"
       ></storeBuys>
    </ul>
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
    active:0,
    shopId:1,
    shopProducts:shopdata,
    active:0,
    changeHashInterval:''
  }
 },
 methods:{
   changeHash(tab,e){
    this.active = tab.cid;
    let li = e.currentTarget.parentNode;
    this.transitionChangeHash(li);
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
    .productLabel{
      display: -webkit-box;
      overflow-x: scroll;
      font-size: 13px;/*px*/
      background: #fff;
      li{
        padding: 8px 11px 11px ;
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
  }
}
.productLabel::-webkit-scrollbar {
  display:none
}
</style>
