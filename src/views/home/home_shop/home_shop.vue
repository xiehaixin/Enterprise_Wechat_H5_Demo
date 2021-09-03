<template>
 <div class="home_shop" :data-theme-background="backgroundImg">
    <homeShopNav></homeShopNav>
    <adverSwipe></adverSwipe>
    <noticeBox v-if="styleId!=2"></noticeBox >
    <activityNav></activityNav>
    <purchaseLimitationAndGroupBooking></purchaseLimitationAndGroupBooking>
    <noticeBox v-if="styleId==2"></noticeBox>
    <firstOrder></firstOrder>
    <shopList v-if="pageStyle==2"></shopList>
    <productLabelTwoRank v-else-if="styleId==2"></productLabelTwoRank>
    <productLabel v-else></productLabel>
 </div>
</template>

<script>
import {mapState} from 'vuex';
import homeShopNav from './homeShopNav';
import adverSwipe from '@/components/AdverSwipe/adverSwipe'
import noticeBox from '@/components/NoticeBox/noticeBox'
import activityNav from './activityNav';
import purchaseLimitationAndGroupBooking from '@/components/PurchaseLimitationAndGroupBooking/purchaseLimitationAndGroupBooking';
import firstOrder from '@/components/FirstOrder/firstOrder';
import productLabel from './productLabel';
import productLabelTwoRank from './productLabelTwoRank';
import shopList from '@/components/ShopList/shopList';
export default {
 data() {
   return {
   backgroundImg:1
   }
 },
 components: {
  homeShopNav,
  activityNav,
  purchaseLimitationAndGroupBooking,
  firstOrder,
  productLabel,
  productLabelTwoRank,
  shopList,
  adverSwipe,
  noticeBox,
 },
 computed:{
   ...mapState([
      'pageStyle',
      'styleId'
   ])
 }

}
</script>

<style scoped lang="scss">
@import "@/common/scss/mixin.scss";
@include themeBgify;
.home_shop{
   padding-bottom: 50px;
}
</style>
