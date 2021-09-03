<template>
 <div class="shopStars" >
   <span  v-for="index of 5" :key="index" class="icon" :class="showStars(index)"></span>
 </div>
</template>

<script>
/**
 * 店铺评价星星
 */
export default {
  props:['grade'],
 data() {
 return {

 }
 },
 methods:{
   showStars(index){
     if(this.grade%2==0){
       let t = this.grade/2;
       let y = (index);
       if(y<=t){
         return {
           "icon-86star":true,
           "active":true
         }
       }else{
         return {
           "icon-86star":true,
         }
       }
     }else{
       let t = parseInt(this.grade/2)
       let y = (index);
       let u = t+1;
       if(y<=t){
         return {
           "icon-86star":true,
           "active":true
         }
       }else if(y==u){
         return {
           "icon-star02":true,
         }
       }else{
         return {
           "icon-86star":true,
         }
       }
     }
   }
 },
 components: {

 }
}
</script>

<style scoped lang="scss">
@import "@/common/scss/mixin.scss";
.grade{
    font-size: 14px;/*px*/
    span{
      margin-right: 4px;
    }
    .icon-86star{
      color: #D9D9D9;
    }
    .icon-86star.active{
      @include fontColor('mainBgColor');
    }
  }
  .icon-86star.active{
    @include fontColor('mainBgColor');
  }
  .icon-star02:before{
    @include fontColor('mainBgColor');
  }
</style>
