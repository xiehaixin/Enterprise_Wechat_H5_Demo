<template>
 <div class="home_general">
   <homeGeneral-nav class="homeGeneralNav"></homeGeneral-nav>
   <adverSwipe></adverSwipe>
   <homeGeneralNotice :getStatisticsShop="getStatisticsShop"></homeGeneralNotice>
   <activityNav></activityNav>
   <brandAndShopShow></brandAndShopShow>
 </div>
</template>

<script>
import homeGeneralNav from './homeGeneralNav'
import adverSwipe from '@/components/AdverSwipe/adverSwipe'
import homeGeneralNotice from './homeGeneralNotice'
import activityNav from './activityNav'
import brandAndShopShow from './brandAndShopShow'
export default {
 data() {
  return {
    getStatisticsShop:JSON.parse('{"shop":20,"enterPrise":0,"integral":0,"city":2}')
  }
 },
 components: {
   homeGeneralNav,
   adverSwipe,
   homeGeneralNotice,
   activityNav,
   brandAndShopShow,
 }
}
</script>

<style scoped lang="scss">
.home_general{
  background:#efeff4;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 44px;
  .homeGeneralNav{
    position: absolute;
    top: 8px;
    left: 0;
    z-index: 1;
    width: 100%;
  }
}
</style>
