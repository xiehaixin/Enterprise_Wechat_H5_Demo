<template>
 <div class="adAndNotice">
   <adverSwipe :state="state"></adverSwipe>
   <noticeBox :background="background" :leftIcon="leftIcon" :style="{backgroundImage:'url('+yearGG+')'}"></noticeBox>
 </div>
</template>

<script>
import adverSwipe from '@/components/AdverSwipe/adverSwipe'
import noticeBox from '@/components/NoticeBox/noticeBox'
import yearGG from "@/assets/yearGG@2x.png"
export default {
  props:['state'],
 data() {
 return {
   yearGG:'',
   background:'',
   leftIcon:undefined
 }
 },
 mounted(){
   // 变化背景图
  if(this.state=='newYear'){
    this.background = 'transparent';
    this.yearGG = yearGG;
    this.leftIcon = 2
  }else{
    this.background = '#FFFFFF';
  }
 },
 watch: {
   state(val){
     if(val=='newYear'){
        this.background = 'transparent';
        this.yearGG = yearGG;
        this.leftIcon = 2
      }else{
        this.background = '#FFFFFF';
        this.leftIcon = 1;
        this.yearGG = '';
      }
   }
 },
 components: {
adverSwipe,
noticeBox
 }
}
</script>

<style scoped lang="scss">
.noticeBox{
  background: no-repeat;
  background-size: 100% 100%;
}
</style>
