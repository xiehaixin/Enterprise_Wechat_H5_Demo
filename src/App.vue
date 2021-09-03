<template>
  <div id="app" class="app" :data-theme-color="themeColor">
    <router-view/>
  </div>
</template>

<script>
import styleColorByStyleId from '@/common/js/styleColorByStyleId'
export default {
  name: 'App',
  created(){
    //在页面加载时读取sessionStorage里的状态信息
    this.getCacheVuex();
    /**
     * styleColor 颜色
     * styleId 主题风格
     */
    if(styleColor){
      this.$store.commit('setStyleColor',styleColor);
    }

    let styleColor = this.$route.query.styleColor
    if(styleColor){
      styleColor = Number(styleColor);
      this.setStyleColor(styleColor);
    }
    let styleId = this.$route.query.styleId
    if(styleId){
      styleId = Number(styleId);
      this.setStyleId(styleId);
    }
    let pageStyle = this.$route.query.pageStyle
    if(pageStyle){
      pageStyle = Number(pageStyle);
      this.setPageStyle(pageStyle);
    }
  },
  data() {
    return {

    }
  },
  methods:{
    receiveMsg(event){
      // console.log('msg', event);
      if(event.data){
        let style = null;
        try {
          style = JSON.parse(event.data);
        } catch (error) {
          
        }
        if(style){
          let styleColor = style.styleColor;
          if(styleColor==0||styleColor){
            this.setStyleColor(styleColor);
          }
          let styleId = style.styleId;
          if(styleId==0||styleId){
            this.setStyleId(styleId);
          }
          let pageStyle = style.pageStyle;
          if(pageStyle==0||pageStyle){
            this.setPageStyle(pageStyle);
          }
        }
        
      }
    },
    setStyleId(styleId){
      this.$store.commit('setStyleId',styleId);
      let pathName = this.$route.name;
      let page = 'home';
      pathName = pathName.split("_")[0]; // 首页用了多个主题模板，规则是home_xxx
      if(page==pathName||pathName.indexOf(page)!= -1){ // 防止重复跳转
        return;
      }
      this.$router.push({name:page})
    },
    setStyleColor(styleColor){
      this.$store.commit('setStyleColor',styleColor);
    },
    setPageStyle(pageStyle){
      this.$store.commit('setPageStyle',pageStyle);
    },
    getCacheVuex(){
      //在页面加载时读取sessionStorage里的状态信息
      if (sessionStorage.getItem("store") ) {
          this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
      }
      //在页面刷新时将vuex里的信息保存到sessionStorage里
      this.setCacheVuex();
    },
    setCacheVuex(){
      //在页面刷新时将vuex里的信息保存到sessionStorage里
      window.addEventListener("pagehide",()=>{
          sessionStorage.setItem("store",JSON.stringify(this.$store.state))
      })
    }
  },
  mounted(){
    window.addEventListener('message', this.receiveMsg,false);
  },
  computed:{
    themeColor(){
      return this.$store.state.styleColor;
    }
  }
}
</script>

<style lang="scss">
.app {
  font-size: 14px;/*px*/
  a{
    text-decoration:none;
    -webkit-tap-highlight-color: transparent;
    outline:0;
    background-color: transparent;
    color:#000000;
  }
}
</style>
