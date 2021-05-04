<template>
  <div class="goods">
    <h5>{{ goodsname }}</h5>
    <van-swipe autoplay="3000">
      <van-swipe-item v-for="item in gallery" :key="item" class="gallery">
        <img :src="item.img_url" />
      </van-swipe-item>
    </van-swipe>

    <div class="Commodity">
      <div class="subheadings">{{ info.name }}</div>
      <div class="brief">{{ info.goods_brief }}</div>
      <div class="price">{{ info.retail_price }}元</div>
    </div>
    <!-- <div v-for="item1 in info">{{item1}}</div> -->
    <div class="attribute">
      <div class="tit">商品详情</div>
      <div v-for="item2 in attribute">
        <div class="tname">{{ item2.name }}</div>
        <div class="xianqin">{{ item2.value }}</div>
      </div>
    </div>
    <div v-html="info.goods_desc" class="desca"></div>
    <!-- 商品导航栏 -->
    <div class="Commoditynav">
      <van-action-bar>
        <van-action-bar-icon icon="chat-o" text="客服" color="#ee0a24" />
        <van-action-bar-icon icon="cart-o" text="购物车" />
        <van-action-bar-icon icon="star" text="已收藏" color="#ff5000" />
        <van-action-bar-button
          type="warning"
          text="加入购物车"
          @click="onClickbutton"
        />
        <van-action-bar-button type="danger" text="立即购买" />
      </van-action-bar>
    </div>

    <div>
      <van-action-sheet v-model:show="show" title="标题" class="sku">
        <div class="neirong">
          <div class="imglt">
            <van-image
              width="10rem"
              height="10rem"
              style="display: 'nome'"
              fit="cover"
              :src="info.primary_pic_url"
            />
          </div>
          <div class="txtlt">
            <div class="sprice">￥{{ info.retail_price }}</div>
            <div class="volume">剩余 {{ info.sell_volume }} 件</div>
            <div class="select">请选择 颜色 尺寸 加料</div>
          </div>
        </div>
        <div class="aa">
          <div class="">
            <div>颜色</div>
            <van-button type="default" size="mini"></van-button>
            <div>商品</div>
            <van-button type="default" size="mini"></van-button>
          </div>
        </div>
        <van-action-bar>
          <van-action-bar-button type="warning" text="加入购物车" />
          <van-action-bar-button type="danger" text="立即购买" />
        </van-action-bar>
      </van-action-sheet>
    </div>
  </div>

  <!-- suk -->
</template>

<script>
import axios from "axios";

export default {
  name: "spzsxq",
  components: {},
  data() {
    return {
      id: null,
      Productdetails: "", //所有数据
      goodsname: "", //
      gallery: "",
      info: "",
      attribute: "", //商品数据

      show: false,
    };
  },
  created() {
    console.log(this.$route.query.id);
    this.id = this.$route.query.id;
    axios
      .get("http://127.0.0.1:8360/goods/detail?id=" + this.id)
      .then((res) => {
        console.log(res);
        (this.Productdetails = res), (this.goodsname = this.$route.query.name);
        this.gallery = this.Productdetails.data.data.gallery;
        this.info = this.Productdetails.data.data.info;
        this.attribute = this.Productdetails.data.data.attribute;
        // console.log(this.Productdetails.data.data);
      });
  },
  methods: {
    onClickIcon() {
      Toast("点击图标");
    },
    onClickbutton() {
      console.log("123");
      this.show = true;
    },
  },
};
</script>
<style scoped>
.goods {
  height: 100vh;
  background-color: #fff;
  position: relative;
  z-index: 10;
}
.goods h5 {
  margin: 20px 0;
  text-align: center;
  font-size: 20px;
}
.gallery img {
  width: 100%;
  height: 300px;
}
.Commodity {
  margin-top: -5px;
  background-color: rgb(240, 157, 130);
  color: #fff;
}

.subheadings {
  display: inline-block;
  width: 300px;
  font-size: 17px;
}
.brief {
  display: inline-block;
  width: 300px;
  font-size: 12px;
}
.price {
  display: inline-block;
  text-align: right;
  font-size: 30px;
}
.desca >>> p {
  margin: 0;
  padding: 0;
  display: flex;
}
.desca >>> img {
  width: 100%;
}
.attribute {
  margin: 5px 0;
  background-color: #eee;
}
.tname {
  display: inline-block;
  width: 80px;
  text-align: center;
}
.xianqin {
  text-align: left;
  display: inline-block;
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tit {
  width: 100%;
  text-align: center;
}
.dibudaohang {
  width: 100%;
  height: 49px;
  z-index: 15;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
.sku {
  position: relative;
  margin-bottom: 200px;
}
.neirong {
  width: 100vw;
  position: absolute;
  top: 48px;
  left: 0;
  right: 0;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  z-index: 15;
}
.aa {
  width: 100vw;
  height: 200px;
  margin-top: 170px;
  margin-left: 10px;
}
.imglt {
  margin: 0 10px;
  float: left;
}
.txtlt {
  float: left;
}
.sprice {
  color: red;
  font-size: 20px;
}
.volume {
  font-size: 15px;
  color: #c7bdbd;
}
.select {
  font-size: 15px;
  color: #979292;
  bottom: 0;
}
</style>
