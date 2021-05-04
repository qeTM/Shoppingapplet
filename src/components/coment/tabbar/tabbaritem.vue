<template>
    <div class="tab-bar-item" @click="itemdianji">
          <slot slot="item-icon"></slot>
          <slot slot="item-icon"></slot>
    </div>
</template>

<script>

export default {
  name: 'tabbaritem',
  data(){
    return{
      
    }
  },
  props:{
    path:{
      path:String
    }
  },
  methods: {
    itemdianji(){
      this.$router.replace(this.path)
    }
  },
}
</script>

<style>

  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    margin-top: 10px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
  }
</style>
