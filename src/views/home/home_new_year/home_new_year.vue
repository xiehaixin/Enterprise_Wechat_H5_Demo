<template>
 <div class="home_new_year" :data-theme-background="backgroundImg">
   <home-new-year-nav></home-new-year-nav>
   <adAndNotice :state="state" ></adAndNotice>
   <newYearStyleShopProductShow :springFestivalHome="springFestivalHome" :state="state"></newYearStyleShopProductShow>
 </div>
</template>

<script>
import homeNewYearNav from './homeNewYearNav';
import newYearStyleShopProductShow from './newYearStyleShopProductShow';
import adAndNotice from '@/views/home/adAndNotice';
export default {
 data() {
  return {
    springFestivalHome:JSON.parse('{"brandLists":[{"pictureUrl":"http://sq.shuiqoo.cn/Upload/Brand/images/20190322/190322131709768910.png","brandName":"广东志高","brandId":245},{"pictureUrl":"http://sq.shuiqoo.cn/Upload/Brand/images/20191015/191015115011863870.jpg","description":"水源源自蓟州盘山脚下","brandName":"景田","brandId":20},{"pictureUrl":"http://sq.shuiqoo.cn/Upload/Brand/images/20151123/151123105028850150.jpg","description":"洞庭山企业的主导产品“洞庭山”天然泉水，源自苏州自然风景保护区东洞庭山地下180-233.6米深处，由数千年前的降水、凝结水渗入古生代石英砂岩层，经数千年的深循环和长期溶滤作用而形成，经中国地震局测定，水龄在千年以上，水中含有人体必需的钾、钠、钙、镁、锌、偏硅酸等30余种人体必需的微量元素及矿物质，是国内少有、省内罕见的低钠低矿化度型优质天然泉水","brandName":"洞庭山","brandId":19},{"pictureUrl":"http://sq.shuiqoo.cn/Upload/Brand/images/20151123/151123105536334449.jpg","description":"“我们只做大自然搬运工”——二十年如一日。","brandName":"农夫山泉","brandId":25}],"broadcastLists":[{"content":"电子票套餐 敢买我就送，送到你满意为止","broadcastTxt":"新品上线","broadcastId":47}],"productLists":[{"price":0.01,"pictureUrl":"http://sq.shuiqoo.cn/Upload/Product/images/20180802/180802155450711213-x.jpg","shopId":0,"ifHot":false,"pname":"农夫橙汁*6支装","shopNum":17,"pid":896,"bigPictureUrl":"http://sq.shuiqoo.cn/Upload/Product/images/20180802/180802155450711213-d.jpg"},{"price":0.04,"pictureUrl":"http://sq.shuiqoo.cn/Upload/Product/images/20170802/170802100646589983-x.jpg","shopId":0,"ifHot":true,"pname":"清江天然水(不传ERP)","shopNum":18,"pid":987,"bigPictureUrl":"http://sq.shuiqoo.cn/Upload/Product/images/20170802/170802100646589983-d.jpg"},{"price":0.02,"pictureUrl":"http://sq.shuiqoo.cn/Upload/Product/images/20170801/170801101458286350-x.png","shopId":0,"ifHot":true,"pname":"景田中级矿泉水测试不配送","shopNum":18,"pid":1992,"bigPictureUrl":"http://sq.shuiqoo.cn/Upload/Product/images/20170801/170801101458286350-d.png"},{"price":0.01,"pictureUrl":"http://sq.shuiqoo.cn/Upload/Product/images/20190321/190321153432302617-x.jpg","shopId":0,"ifHot":false,"pname":"水趣E新一代矿物质水18.9L","shopNum":9,"pid":6,"bigPictureUrl":"http://sq.shuiqoo.cn/Upload/Product/images/20190321/190321153432302617-d.jpg"},{"price":0.01,"pictureUrl":"http://sq.shuiqoo.cn/Upload/Product/images/20190321/190321153435259420-x.jpg","shopId":0,"ifHot":false,"pname":"水趣E新一代纯净水18.9L","shopNum":10,"pid":7,"bigPictureUrl":"http://sq.shuiqoo.cn/Upload/Product/images/20190321/190321153435259420-d.jpg"},{"price":200.0,"pictureUrl":"http://sq.shuiqoo.cn/Upload/Product/images/20190322/190322132302489819-x.png","shopId":0,"ifHot":true,"pname":"志高立温","shopNum":18,"pid":4582,"bigPictureUrl":"http://sq.shuiqoo.cn/Upload/Product/images/20190322/190322132302489819-d.png"},{"price":210.0,"pictureUrl":"http://sq.shuiqoo.cn/Upload/Product/images/20190115/190115180701277077-x.png","shopId":1291,"ifHot":false,"pname":"买水送机","shopNum":1,"pid":4589,"bigPictureUrl":"http://sq.shuiqoo.cn/Upload/Product/images/20190115/190115180701277077-d.png"},{"price":20.0,"pictureUrl":"http://sq.shuiqoo.cn/Upload/Product/images/20170801/170801144020605103-x.png","shopId":0,"ifHot":true,"pname":"中粮花生调和油","shopNum":17,"pid":4591,"bigPictureUrl":"http://sq.shuiqoo.cn/Upload/Product/images/20170801/170801144020605103-d.png"},{"price":0.06,"pictureUrl":"http://sq.shuiqoo.cn/Upload/Product/images/20190420/190420140520373519-x.jpg","shopId":0,"ifHot":false,"pname":"粽子","shopNum":17,"pid":5264,"bigPictureUrl":"http://sq.shuiqoo.cn/Upload/Product/images/20190420/190420140520373519-d.jpg"}],"adsLists":[{"id":1,"createTime":"2017-10-19","linkUrl":"","pictureUrl":"http://sq.shuiqoo.cn/Upload/Banner/images/20190916/190916164828181256.jpg","describe":"","adType":5,"adName":"深圳上线"},{"id":2,"createTime":"2017-10-19","linkUrl":"","pictureUrl":"http://sq.shuiqoo.cn/Upload/Banner/images/20190916/190916164841140840.jpg","describe":"","adType":0,"adName":"1"},{"id":87,"createTime":"2019-03-21","linkUrl":"","pictureUrl":"http://sq.shuiqoo.cn/Upload/Banner/images/20190916/190916164917149234.jpg","describe":"","adType":0,"adName":"招商引资"},{"id":88,"createTime":"2019-03-21","linkUrl":"https://weixin.shuiqoo.cn/weixin/everyShopNew","pictureUrl":"http://sq.shuiqoo.cn/Upload/Banner/images/20190321/190321125328531962.jpg","describe":"","adType":6,"adName":"招募推客"}],"shopLists":[{"distance":62.847507,"pictureUrl":"http://sq.shuiqoo.cn/Upload/Shop/images/20151123/151123155839847622.jpg","location":"113.867564,22.74909","shopName":"水趣体验店801","shopId":2,"ifGroupBuy":false,"shopNo":"sq0002"},{"distance":10958.525,"pictureUrl":"http://sq.shuiqoo.cn/Upload/Shop/images/20171008/171008104553886281.jpg","location":"113.930666,22.669635","shopName":"水趣体验店804","shopId":369,"ifGroupBuy":false,"shopNo":"2288"},{"distance":19958.525,"pictureUrl":"http://sq.shuiqoo.cn/Upload/Shop/images/20190716/190716100542849814.jpg","location":"113.867564,22.74909","shopName":"水趣体验店802","shopId":2,"ifGroupBuy":false,"shopNo":"sq0002"}],"eid":1}'),
    backgroundImg:2,
    state:''
  }
 },
 mounted(){
    let styleColor = this.$store.state.styleColor;
    if(styleColor==3){
      this.state = 'newYear'
      this.backgroundImg = 3;
    }else{
      this.backgroundImg = 1;
      this.state = '';
    }
 },
 computed:{
   styleColor(){
     return this.$store.state.styleColor;
   }
 },
 watch:{
   // 利用计算属性监听vuex字段变化
   styleColor(val){
     if(val==3){
      this.state = 'newYear'
      this.backgroundImg = 3;
      }else{
        this.backgroundImg = 1;
        this.state = '';
      }
   }
 },
 components: {
   homeNewYearNav,
   adAndNotice,
   newYearStyleShopProductShow,
 }
}
</script>

<style scoped lang="scss">
@import "@/common/scss/mixin.scss";
@include themeBgify;
.home_new_year{
  padding-bottom: 50px;
}
</style>
