<template>
 <div class="shop">
   <adAndNotice :state="state"></adAndNotice>
   <products></products>
 </div>
</template>

<script>
import adAndNotice from '@/views/home/adAndNotice';
import products from './products';
export default {
 data() {
  return {
    state:'shop',
  }
 },
 components: {
   adAndNotice,
   products
 }
}
</script>

<style scoped lang="scss">

</style>
