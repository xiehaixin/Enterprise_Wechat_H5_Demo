<template>
 <div class="shopList">
   <div class="companyNewHead distanceHead">距离最近</div>
   <ul class="distanceUl">
     <li v-for="shop in nearbyShops" :key="shop.shopId">
       <shopModel :shop="shop"></shopModel>
     </li>
   </ul>
 </div>
</template>

<script>
import shopModel from './shopModel';
export default {
  props:[],
 data() {
 return {
   nearbyShops:JSON.parse('[{"cityId":199,"location":"113.930666,22.669635","hasToday":true,"endTime":"20:00","shopNo":"2288","eid":1,"startTime":"8:00","distance":21407.23,"pictureUrl":"http://sq.shuiqoo.cn/Upload/Shop/images/20171008/171008104553886281.jpg","shopId":369,"shopName":"松岗3店","freight":0.0,"grade":2,"sendOnTime":2,"ifGroupBuy":true,"minSendPrice":0.0},{"cityId":199,"location":"113.867564,22.74909","hasToday":true,"endTime":"20:00","shopNo":"054531","eid":1,"startTime":"8:00","distance":31100.697,"pictureUrl":"http://sq.shuiqoo.cn/Upload/Shop/images/20151123/151123155839847622.jpg","shopId":2,"shopName":"宝安西乡4店","freight":0.0,"grade":10,"sendOnTime":60,"ifGroupBuy":false,"minSendPrice":0.0},{"cityId":199,"location":"113.8677870875775,22.750026147631388","hasToday":true,"endTime":"12:30","shopNo":"1658748","eid":1,"startTime":"8:00","distance":31135.145,"pictureUrl":"http://sdd.haoshui.com.cn/Upload/Client/photos/images/20190604/201906041559614890415.jpg","shopId":1,"shopName":"松岗9店","freight":0.0,"grade":10,"sendOnTime":90,"ifGroupBuy":false,"minSendPrice":10.0},{"cityId":199,"location":"113.86668217180059,22.748917961433545","hasToday":true,"endTime":"18:00","shopNo":"9876543","eid":1,"startTime":"09:00","distance":31168.25,"pictureUrl":"http://sq.shuiqoo.cn/Upload/Shop/images/20151123/151123155839847622.jpg","shopId":444,"shopName":"青云1店","freight":0.0,"grade":10,"sendOnTime":1,"ifGroupBuy":false,"minSendPrice":0.0},{"cityId":199,"location":"113.870671,22.761274","hasToday":true,"endTime":"21:00","shopNo":"hm001","eid":1,"startTime":"08:30","distance":31556.865,"pictureUrl":"http://sq.shuiqoo.cn/Upload/Shop/images/20181112/181112132515144590.jpg","shopId":447,"shopName":"松岗华美店","freight":0.0,"grade":10,"sendOnTime":120,"ifGroupBuy":false,"minSendPrice":0.0},{"cityId":199,"location":"133.271594,24.165929","hasToday":true,"endTime":"18:00","shopNo":"HS1001","eid":1,"startTime":"09:00","distance":1961710.9,"pictureUrl":"http://sq.shuiqoo.cn/Upload/Shop/images/20181112/181112132608259075.jpg","shopId":446,"shopName":"宝安沙井2分店","freight":0.0,"grade":10,"sendOnTime":1,"ifGroupBuy":false,"minSendPrice":0.0}]')
 }
 },
 components: {
   shopModel,
 }
}
</script>

<style scoped lang="scss">

.shopList{
  .companyNewHead{
    border-left: 2px #333333 solid;
    padding-left: 5px;
    line-height: 16px;
    font-size: 16px;/*px*/
    color: #333333;
    font-weight: 500;
    margin: 12px 11px;
  }
  .distanceUl{
    li{
      background: #ffffff;
      margin-bottom: 3px;
    }
  }
}
</style>
