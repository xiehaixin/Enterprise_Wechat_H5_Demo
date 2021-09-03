<template>
     <li class="brand">
       <a :temp-href="'/weixin/shops?shopJoint='+brand.shopJoint">
        <div class="brandDiv">
            <div class="imgDiv"><img :src="brand.logoUrl" ></div>
            <div class="centont">
                <h4>{{brand.brandName}}</h4>
                <p>{{brand.brandTerm}}</p>
            </div>
        </div>
        </a>
     </li>
</template>

<script>
export default {
 props:['brand'],
 data() {
 return {
 }
 },
 components: {

 }
}
</script>

<style scoped lang="scss">
@import "@/common/scss/mixin.scss";
*{
  box-sizing: border-box;
}
.brand{
  width: 355px;
  height: 73px;
  border: #E3E3E3 1px solid;
  margin-bottom: 10px;
  background: linear-gradient(to right, #fff 45%, #E7E7E7);
  position: relative;
  .brandDiv{
    @include fci;
    .imgDiv{
      padding: 0 2%;
      img{
        width: 120px;
        height: 67px;
      }
    }
    .centont{
      padding: 0 2%;
      width: 100%;
      h4{
        font-size: 16px;
        line-height: 32px;
      }
      p{
        font-size: 13px;
        color: #5B5B5B;
        height: 39px;
        overflow: hidden;
        line-height: 19.5px;
      }
    }
  }
}
</style>
