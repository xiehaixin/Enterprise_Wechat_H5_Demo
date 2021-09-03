<template>
 <div class="searchbar">
      <div class="search-input">
          <a  class="searchShopOrProduct">
              <van-search disabled :placeholder="styleId==2?'搜索商品':'搜索'" readonly />
          </a>
      </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Search } from 'vant';
Vue.use(Search);
export default {
 data() {
 return {

 }
 },
 components: {

 },
 computed: {
   styleId(){
     return this.$store.state.styleId;
   }
 },
}
</script>

<style scoped lang="scss">
@import "@/common/scss/mixin.scss";
.searchbar{
    width: 100%;
    margin-left: 10px;
    .search-input{
      @include fcs;
      .searchShopOrProduct{
        width: 100%;
        .van-search{
          padding: 0;
          border: 1px #DCDCDC solid;
          border-radius: 4px;
          .van-search__content{
            height: 25px;
            background-color: #FFFFFF;
            .van-cell{
              padding: 0;
            }
          }
        }
      }
    }
  }
</style>
