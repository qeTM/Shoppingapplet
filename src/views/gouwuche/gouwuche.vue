<template>
  <div>
    <h2 class="title">购物车</h2>
    <van-card
      num="2"
      tag="标签"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      origin-price="10.00"
    />
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>
<script>
export default {
  name: "gouwuche",
};
</script>
<style scoped>
.title {
  text-align: center;
}
</style>