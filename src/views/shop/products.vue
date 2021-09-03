<template>
 <div class="products">
   <van-tree-select
   height="522px"
  :items="items"
  :main-active-index.sync="active"
>
  <template #content>
    <div v-for="(tab,index) in shopProducts" class="proUl" v-if="active===index" :key="index" :title="tab.className">
        <p class="strorHead">{{tab.className}}</p>
        <ul >
          <storeBuys class="pros" state="proStorBuys" :product="product" :cid="tab.cid" :shopId="shopId" v-for="(product,t) in tab.products" :key="t"></storeBuys>
        </ul>
    </div>
  </template>
</van-tree-select>
<bar></bar>
 </div>
</template>

<script>
import Vue from 'vue';
import { TreeSelect } from 'vant';

Vue.use(TreeSelect);
import storeBuys from '@/views/home/home_shop/storeBuys';
import {shopdata} from '@/common/js/shopdata';
import bar from './bar';
export default {
 data() {
  return {
    shopId:0,
    shopProducts:shopdata
    ,active:0
  }
 },
 components: {
storeBuys,
bar
 },
 computed:{
   items:function(){
     let items = [];
    for(let i=0;i<this.shopProducts.length;i++){
      let pro = this.shopProducts[i]
      let item = {
        text:pro.className,
      }
      items.push(item)
    }

    return items;
   }
 }
}
</script>

<style scoped lang="scss">
@import "@/common/scss/mixin.scss";
/deep/ .van-tree-select__nav{
  flex:initial;
  .van-tree-select__nav-item{
    padding: 10px 6px 10px 6px;
  }
}
/deep/ .van-tree-select__nav-item{
  color: #AFAFAF;
}
/deep/ .van-sidebar-item--select{
  @include fontColor('mainBgColor');
  color:#000000;
}
/deep/ .van-sidebar{
  width: 75px;
}
.strorHead{
  background: #F8F8F8;
  border: 1px solid #F8F8F8;
  color: #666666;
  line-height: 28px;
  font-size: 14px;/*px*/
  padding: 0 6px;
  font-weight: normal;
}
.proUl{
  padding-bottom: 44px;
  .pros{
    border-bottom: 1px solid #E4E4E4;
  }
}
</style>
