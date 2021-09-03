<template>
 <div class="homeGeneralNav">
   <header class="bar bar-nav top-nav">
      <a temp-href="/weixin/city">
        <div class="streetDiv">
          <span data-role="street">深圳></span>
        </div>
      </a>
      <div class="searchbar">
          <div class="search-input">
              <a temp-href="/weixin/searchShopOrProduct">
                  <i class="icon icon-111icosearch title-icon"></i>
                  <input type="search" name="brand" id='search' readonly="readonly" placeholder='输入商家电话或品牌' />
              </a>
          </div>
      </div>
   </header>
 </div>
</template>

<script>
export default {
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
.homeGeneralNav{
  position: relative;
  top: 8px;
}
.top-nav{
  @include fcs;
  .streetDiv{
    @include fcc;
    background: #987F08;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.3);
    width: 125px;
    height: 28px;
    border-radius: 4px;
    position: relative;
    left: 10px;
    [data-role="street"] {
      display: block;
      max-width: 125px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 17px;/*px*/
    }
  }
  .searchbar{
    position: relative;
    right: 10px;
    .search-input{
      .title-icon{
        font-size: 20px;
        position: absolute;
        top: 4px;
        right: 10px;
        color: #b4b4b4;
      }
      input{
        box-sizing: border-box;
        width: 220px;
        height: 28px;
        display: block;
        border: none;
        appearance: none;
        border-radius: 5px;
        font-family: inherit;
        color: #3d4145;
        font-size: 14px;/*px*/
        font-weight: 400;
        padding: 0 10px;
        padding-left: 20px;
        background-color: #fff;
        border: 0;
        
      }
    } 
  }
}
</style>
