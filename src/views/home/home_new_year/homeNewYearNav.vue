<template>
 <div class="homeNewYearNav">
   <header class="bar top-nav">
        <location-area></location-area>
        <searchbar></searchbar>
        <scanQRCode></scanQRCode>
    </header>
 </div>
</template>

<script>

import locationArea from '@/components/homeTopNav/locationArea';
import searchbar from '@/components/homeTopNav/searchbar';
import scanQRCode from '@/components/homeTopNav/scanQRCode';
export default {
 data() {
 return {

 }
 },
 components: {
   locationArea,
   searchbar,
   scanQRCode
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
