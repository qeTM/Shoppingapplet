<template>

   <tabbar>
      <tabbaritem path="/shouye">
        <img slot="item-icon" class="" src="../../assets/img/icon/shouye.svg" alt="">
        <div slot="item-text"><div>首页</div></div>
      </tabbaritem>
      <tabbaritem path="/fenlei">
        <img slot="item-icon" class="" src="../../assets/img/icon/fenlei.svg" alt="">
        <div slot="item-text"><div>分类</div></div>
      </tabbaritem>
      <tabbaritem path="/gouwuche">
        <img slot="item-icon" class="" src="../../assets/img/icon/gouwuche.svg" alt="">
        <div slot="item-text"><div>购物车</div></div>
      </tabbaritem>
      <tabbaritem path="/wode">
        <img slot="item-icon" class="" src="../../assets/img/icon/wode.svg" alt="">
        <div slot="item-text"><div>我的</div></div>
      </tabbaritem>
    </tabbar>

</template>

<script>
import tabbar from '../coment/tabbar/tabbar'
import tabbaritem from '../coment/tabbar/tabbaritem'
export default {
  name: 'tabbarconet',
  data () {
    return {
     
    }
  },
  components:{
    tabbar,
    tabbaritem
  }
}
</script>

<style scoped>

</style>
