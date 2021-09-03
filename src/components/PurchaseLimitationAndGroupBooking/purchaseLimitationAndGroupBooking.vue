<template>
 <div class="purchaseLimitationAndGroupBooking">
   <div class="pLAndGBDiv">
      <div class="pL" >
          <a >
              <div class="header">
                  <p class="agTitle">限时限购</p>
                  <div class="pLcountDown right">
                      <div class="pLcountDownLeft">距结束</div>
                        <van-count-down :time="time" format="DD:HH:mm:ss">
                          <template class="" v-slot="timeData">
                      <div class="pLcountDownRight">
                            <span class="item">{{ timeData.days<10?'0'+timeData.days:timeData.days }}</span>:
                            <span class="item">{{ timeData.hours<10?'0'+timeData.hours:timeData.hours }}</span>:
                            <span class="item">{{ timeData.minutes<10?'0'+timeData.minutes:timeData.minutes }}</span>:
                            <span class="item">{{ timeData.seconds<10?'0'+timeData.seconds:timeData.seconds }}</span>
                        </div>
                          </template>
                        </van-count-down>
                  </div>
              </div>
              <div class="proList">
                  <div class="proImg">
                      <img src="http://sq.shuiqoo.cn/Upload/Product/images/20190321/190321151837546480-d.jpg">
                  </div>
                  <div class="proImg">
                      <img src="http://sq.shuiqoo.cn/Upload/Product/images/20190321/190321153550456701-d.jpg">
                  </div>
              </div>
          </a>
      </div>
                <div class="gB" >
                    <a temp-href="/weixin/groupBookingHome">
                        <div class="header">
                            <p class="agTitle">拼团购</p>
                            <div class="goGB right">
                                <span>409人正在拼</span><i class="icon icon-btn_right"></i>
                            </div>
                        </div>
                        <div class="proList">
                                        <div class="proImg">
                                            <img src="http://sq.shuiqoo.cn/Upload/Product/images/20190321/190321151835759399-d.jpg">
                                            <div class="groupBuyNum">
                                                <div class="num">2人团</div>
                                                <div class="dd" :style="{backgroundImage:'url('+ddBgImg+')'}"></div>
                                            </div>
                                        </div>
                                    <div class="proImg">
                                        <img src="http://sq.shuiqoo.cn/Upload/Product/images/20190321/190321151835759399-d.jpg">
                                        <div class="groupBuyNum">
                                            <div class="num">3人团</div>
                                            <div class="dd" :style="{backgroundImage:'url('+ddBgImg+')'}"></div>
                                        </div>
                                    </div>
                        </div>
                    </a>
                </div>
        </div>
 </div>
</template>

<script>
import ddBgImg from "@/assets/img_yy-sp@2x.png";
import Vue from 'vue';
import { CountDown } from 'vant';

Vue.use(CountDown);
export default {
 data() {
 return {
   ddBgImg:ddBgImg,
   time:1832629*1000
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
.purchaseLimitationAndGroupBooking{
  .pLAndGBDiv{
    background: #ffffff;
    width: 100%;
    display: flex;
    .pL,.gB{
      .header{
        @include fcs;
        font-size: 14px;/*px*/
        color: #333333;
        padding: 0 10px;
        height: 36px;
        .right{
          @include fcs('',initial);
        }
        .pLcountDown {
          .pLcountDownLeft{
            @include fcf;
            width: 43px;
            height: 20px;
            font-size: 11px;/*px*/
            background: #FF4E00;
            color: #ffffff;
            border-radius: 13px 0 0 13px;
            padding-right: 4px;
          }
          .pLcountDownRight{
            @include fcc;
            padding: 0 3px;
            height: 20px;
            border: #FF4E00 1px solid;
            border-radius: 0 13px 13px 0;
            color: #FF4E00;
            font-size: 10px;/*px*/
          }
        }
        .goGB{
          font-size: 14px;/*px*/
          color: #559C1C;
          align-items: flex-end;
        }
      }
      .proList{
        @include fce;
        padding: 8px 12px;
        .proImg{
          width: 80px;
          height: 80px;
          position: relative;
          img{
            width: 100%;
            height: 100%;
          }
          .groupBuyNum{
            position: absolute;
            top: 4px;
            .num{
              @include fcc;
              width: 32px;
              height: 14px;
              font-size: 10px;/*px*/
              background: #F9D600;
              border-radius: 0 2px 2px 0;
            }
            .dd{
              width: 2px;
              height: 2px;
              background: no-repeat;
              background-size: 100% 100%;
            }
          }
        }
      }
    } 
  }
}
</style>
