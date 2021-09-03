<template>
 <div class="outsideTab">
   <a v-for="(tab,index) in tabList" :key="index" @click="cutTab(tab)" :class="{active:activePage===tab.page}" 
    v-show="(tab.page!=='purchaseLimitation'&&tab.page!=='shop')||(styleId==2&&tab.page==='shop')||(styleId!=2&&tab.page==='purchaseLimitation')"
    >
     <p class="tabIcon">
      <i class="icon " :class="activePage===tab.page?tab.activeIconClass:tab.iconClass"></i>
     </p>
     <p class="tabName">{{tab.name}}</p>
   </a>
 </div>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
 data() {
  return {
    activeIndex:0,
    activePage:'home',
    tabList:[
      {
        name:'首页',
        iconClass:'icon-icon-home',
        activeIconClass:'icon-icon-home-pre',
        page:'home',
      },
      {
        name:'活动',
        activeIconClass:'icon-icon-sale-pre',
        iconClass:'icon-icon-sale',
        page:'purchaseLimitation',
      },
      {
        name:'分类',
        activeIconClass:'icon-piaoquan1',
        iconClass:'icon-piaoquan2',
        page:'shop',
      },
      {
        name:'闪订',
        activeIconClass:'icon-icon-shanding-pre',
        iconClass:'icon-icon-shanding',
        page:'quickShopping',
      },
      {
        name:'已选购',
        activeIconClass:'icon-icon-shoppingcar-pre',
        iconClass:'icon-icon-shoppingcar',
        page:'shoppingCar',
      },
      {
        name:'我的',
        activeIconClass:'icon-icon-user-pre',
        iconClass:'icon-icon-user',
        page:'my',
      }
    ],
  }
 },
 methods:{
   className(index){
     let activeIconClass = this.tabList[index].activeIconClass;
     let iconClass = this.tabList[index].iconClass;
     if(this.activeIndex==index){
       return {
         activeIconClass:true,
         'active':true
       }
     }else{
       return {
         iconClass:true
       }
     }
   },
   cutTab(tab){
     this.activePage = tab.page;
     let page = tab.page;
     let pathName = this.$route.name;
     pathName = pathName.split("_")[0]; // 首页用了多个主题模板，规则是home_xxx
     if(page==pathName||pathName.indexOf(page)!= -1){ // 防止重复点击
       return;
     }
     if(page=='my'||page=='shop'||page=='home'){
       this.$router.push({name:page})
     }
   }
 },
 mounted(){
  let page = this.$route.name;
  switch (page){
    case 'my':
      this.activePage = page;
    break;
    case 'shop':
      this.activePage = page;
    break;
    default:
      this.activePage = 'home';
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
*{
  box-sizing: border-box;
}

.outsideTab:before{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: auto;
    right: auto;
    height: 1px;
    width: 100%;
    background-color: #f2f2f2;
    display: block;
    z-index: 15;
    transform-origin: 50% 0;
}
.outsideTab{
  @include fcs;
  background: #FFFFFF;
  height: 50px;
  padding: 0 15.5px;
  position: fixed;
  bottom: 0;
  width: 100%;
  .tabIcon{
    @include fcc;
    width: 44px;
    i{
      font-size: 24px;
      color:#929292;
    }
  }
  .tabName{
    @include fcc;
    font-size: 11px;/*px*/
    color:#929292;
  }
  .active{
    .tabIcon{
      i{
        @include fontColor('mainBgColor');
      }
    }
    .tabName{
      color:#333333;
    }
  }
}
</style>
