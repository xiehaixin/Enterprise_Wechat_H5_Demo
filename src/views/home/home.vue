<template>
 <div class="home">
   <router-view/>
   <outsideTab></outsideTab>
 </div>
</template>

<script>
import outsideTab from '@/components/tabbar/outsideTab'
export default {
 data() {
  return {

  }
 },
 mounted(){
    switch (this.styleId){
      case 0:
        this.$router.push({name:"home_general"})
        break;
      case 1:
        this.$router.push({name:"home_new_year"})
        break;
      case 2:
        this.$router.push({name:"home_shop"})
        break;
      case 100:
        this.$router.push({name:"home_shop"})
        break;
      default:
        this.$router.push({name:"home_shop"})
    }
 },
 computed :{
   styleId(){
     return this.$store.state.styleId;
   }
 },
 components: {
   outsideTab
 }
}
</script>

<style scoped lang="scss">
</style>
