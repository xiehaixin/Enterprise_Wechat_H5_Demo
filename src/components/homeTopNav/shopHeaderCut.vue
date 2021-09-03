<template>
 <div class="shopHeaderCut">
   <div class="shopHeader" v-if="styleId==2">
        <p class="shopNameTop two">松岗3店</p>
    </div>
    <div class="shopHeader" v-else>
        <p class="shopNameTop">松岗3店</p>
        <p class="qiehuan">[切换]</p>
    </div>
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
.shopHeader{
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  margin-left: 10px;
  .shopNameTop{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 72px;
  }
  .two{
    color: #007AFF;
  }
  .qiehuan{
    width: 35px;
    font-size: 12px;/*px*/
    color: #007AFF;
  }
}
</style>
