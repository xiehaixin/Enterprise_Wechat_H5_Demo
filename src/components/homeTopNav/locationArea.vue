<template>
 <div class="locationArea">
   <a class="aLeft">
      <i class="icon addressIcon icon-icon-add-top"></i>
      <span data-role="street">深圳</span>
      <i class="icon iconRight icon-btn_right" v-if="styleId!=2"></i>
   </a>
 </div>
</template>

<script>
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
.aLeft{
    @include fcs;
    [data-role="street"]{
      max-width: 65px;
      min-width: 40px;
      display: block;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .iconRight{
      font-size: 10px;/*px*/
    }
  }
</style>
