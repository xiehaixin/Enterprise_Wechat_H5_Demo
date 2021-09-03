<template>
 <div class="homeGeneralNotice">
   <i class="icon icon-65notice"></i>
    上线城市<em data-role="cityno">{{getStatisticsShop.city}}</em>个 水店<em data-role="storeno">{{getStatisticsShop.shop}}</em><span id="clearLocalStorage" >间</span> <button id="clearCache" style="border:0;border-radius: 0;height:100%;background-color: transparent;">&nbsp;</button>
 </div>
</template>

<script>
export default {
  props:['getStatisticsShop'],
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
.homeGeneralNotice{
  @include fci;
  height: 32px;
  background: #FFFFFF;
  color: #7D889E;
  font-size: 16px;
  padding: 0 10px;
  i{
    font-size: 20px;
  }
  em{
    font-style: normal;
    color: red;
    font-weight: bold;
  }
}
</style>
