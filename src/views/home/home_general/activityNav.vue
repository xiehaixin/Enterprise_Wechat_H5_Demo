<template>
 <div class="activityNav">
   <ul>
     <li>
        <a temp-href="/weixin/imaCode">
            <table>
                <tr>
                    <td>
                        <i class="icon icon-zhuceyouli"></i>
                    </td>
                    <td class="centont">
                        <h4>开户有礼</h4>
                        <p class="red">新用户专享权利</p>
                    </td>
                </tr>
            </table>
        </a>
    </li>
    <li>
        <a id="scanQRCode0" temp-href="/weixin/interestAntifake">
            <table>
                <tr>
                    <td>
                        <i class="icon icon-fangweisaoma"></i>
                    </td>
                    <td class="centont">
                        <h4>水趣防伪</h4>
                        <p>辨别真伪</p>
                    </td>
                </tr>
            </table>
        </a>
    </li>
   </ul>
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
.activityNav{
  ul{
    @include fcs;
    padding: 0 10px;
    margin: 10px 0;
    li{
      table{
        background: #FFFFFF;
        width: 170px;
        i{
          font-size: 35.69px;
          margin: 0 10px;
          @include fontColor('mainBgColor');
        }
        h4{
          font-weight: 700;
          font-size: 16px;
        }
        p{
          color: #C29A1E;
          font-size: 12px;
        }
        .centont{
          width: 120px;
        }
      }
    }
  }
}
</style>
