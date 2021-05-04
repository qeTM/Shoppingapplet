<template>
    <div id="tab-bar">
        <slot></slot>
</div>
</template>

<script>

export default {
  name: 'tabbar'
}
</script>

<style>

  #tab-bar{
    display: flex;
    background-color: #f5f5f4;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0px 3px 4px rgba(100,100,100,1);
  }
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
  }
</style>
