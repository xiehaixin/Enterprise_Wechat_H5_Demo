<template>
 <div class="activityNav">
    <div class="selectSkip">
      <div class="skipDiv">
          <div class="clickDiv">
              <a onclick="goVipPurchase()">
              <div class="imgDiv">
                  <div class="img VIPDG"><img src="@/assets/home_vip@2x.png" alt=""></div>
              </div>
              <p>VIP订购</p>
              </a>
          </div>
          <div class="clickDiv">
              <a temp-href="/weixin/groupBookingHome">
              <div class="imgDiv">
                  <div class="img CJ"><img src="@/assets/home_lingquan copy@2x.png" alt=""></div>
              </div>
              <p>拼团购</p>
              </a>
          </div>
          <div class="clickDiv">
              <a temp-href="/weixin/ticKeReceive">
              <div class="imgDiv">
                  <div class="img LQZX"><img src="http://sq.shuiqoo.cn/Upload/images/20200401/200401161218761003.gif" alt=""></div>
              </div>
              <p>领券中心</p>
              </a>
          </div>
          <div class="clickDiv">
              <a temp-href="/weixin/imaCode">
              <div class="imgDiv">
                  <div class="img KHYL"><img src="@/assets/home_gift@2x.png" alt=""></div>
              </div>
              <p>开户有礼</p>
              </a>
          </div>
          <div class="clickDiv">
              <a temp-href="/weixin/imaCode">
              <div class="imgDiv">
                  <div class="img KHYL"><img src="@/assets/jsshangcheng@2x.png" alt=""></div>
              </div>
              <p>积分商城</p>
              </a>
          </div>
      </div>
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

 }
}
</script>

<style scoped lang="scss">
@import "@/common/scss/mixin.scss";
*{
  box-sizing: border-box;
}
.skipDiv{
  @include fce;
  padding-bottom: 10px;
  .clickDiv{
    text-align: center;
    color: #666666;
    p{
      font-size: 12px;/*px*/
      line-height: 18px;
    }
    .imgDiv{
      width: 54px;
      height: 54px;
      padding: 10px;
      .img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        @include fcc;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .VIPDG{
        background: linear-gradient(90deg, #ff9984 0%, #ff604d 100%);
      }
      .LQZX{
        background: linear-gradient(360deg, #96b7ff 0%, #898afe 100%);
      }
      .CJ{
        background: linear-gradient(360deg, #ffd848 0%, #febc18 100%);
      }
      .KHYL{
        background: linear-gradient(360deg, #ff9842 0%, #ffcd83 100%);
      }
    }
  }
}
</style>
