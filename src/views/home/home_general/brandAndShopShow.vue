<template>
 <div class="brandAndShopShow">
   <ul class="company" v-for="brand in brands" :key="brand.brandId">
    <brand :brand="brand"></brand>
   </ul>
 </div>
</template>

<script>
import brand from './brand'
export default {
 data() {
 return {
   brands:JSON.parse('[{"shopJoint":"1,369,469,514","logoUrl":"http://sq.shuiqoo.cn/Upload/Brand/images/20151123/151123105028850150.jpg","eid":1,"brandName":"洞庭山","brandId":19,"brandTerm":"好水养人,水中含有人体必需的钾、钠、钙、镁、锌、偏硅酸等30余种人体必需的微量元素及矿物质，是国内少有、省内罕见的低钠低矿化度型优质天然泉水"},{"shopJoint":"1,2,369,469,514","logoUrl":"http://sq.shuiqoo.cn/Upload/Brand/images/20191015/191015115011863870.jpg","eid":1,"brandName":"景田","brandId":20,"brandTerm":"水源源自蓟州盘山脚下"},{"shopJoint":"1,369,469,514","logoUrl":"http://sq.shuiqoo.cn/Upload/Brand/images/20151123/151123105509417328.jpg","eid":1,"brandName":"乐百氏","brandId":24,"brandTerm":"健康新生活，从“乐百氏”开始，乐百氏纯净水，真正纯净、品质保证"},{"shopJoint":"1,369,469,514","logoUrl":"http://sq.shuiqoo.cn/Upload/Brand/images/20151123/151123105536334449.jpg","eid":1,"brandName":"农夫山泉","brandId":25,"brandTerm":"“我们只做大自然搬运工”——二十年如一日"},{"shopJoint":"1,2,369,469,514","logoUrl":"http://sq.shuiqoo.cn/Upload/Brand/images/20151123/151123105835801651.jpg","eid":1,"brandName":"怡宝","brandId":33,"brandTerm":"“心纯净，行至美”用心做好水"},{"shopJoint":"1,369,469,514","logoUrl":"http://sq.shuiqoo.cn/Upload/Brand/images/20171009/171009175455978354.png","eid":1,"brandName":"清江尚品","brandId":120,"brandTerm":"清江尚品-饮用天然水"},{"shopJoint":"1,2,369,469,514","logoUrl":"http://sq.shuiqoo.cn/Upload/Brand/images/20180530/180530155745664969.jpg","eid":1,"brandName":"疯狂水果","brandId":174,"brandTerm":"疯狂水果"},{"shopJoint":"1,369,469,514","logoUrl":"http://sq.shuiqoo.cn/Upload/Brand/images/20190322/190322131709768910.png","eid":1,"brandName":"广东志高","brandId":245,"brandTerm":"志高"},{"shopJoint":"1,2,369,469,514","logoUrl":"http://sq.shuiqoo.cn/Upload/Brand/images/20151123/151123105734380994.jpg","eid":1,"brandName":"娃哈哈","brandId":31,"brandTerm":"优质健康水，认准娃哈哈！娃哈哈桶装水，是你健康生活的好选择"}]')
 }
 },
 components: {
brand,
 }
}
</script>

<style scoped lang="scss">
@import "@/common/scss/mixin.scss";
.company{
  @include fic;
}
</style>
