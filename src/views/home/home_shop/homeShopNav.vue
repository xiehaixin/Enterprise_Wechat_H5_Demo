<template>
 <div class="homeShopNav">
   <header class="bar top-nav">
        <location-area></location-area>
        <searchbar></searchbar>
        <shopHeader-cut></shopHeader-cut>
    </header>
 </div>
</template>

<script>

import locationArea from '@/components/homeTopNav/locationArea';
import searchbar from '@/components/homeTopNav/searchbar';
import shopHeaderCut from '@/components/homeTopNav/shopHeaderCut';
export default {
 data() {
 return {

 }
 },
 components: {
   locationArea,
   searchbar,
   shopHeaderCut
 }
}
</script>

<style scoped lang="scss">
@import "@/common/scss/mixin.scss";
.top-nav{
  height: 44px;
  padding: 0 10px;
  @include fcs;
  font-size: 16px;/*px*/
  background: #FFFFFF;
}
</style>
