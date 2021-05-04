<template>
  <div class="content">
    <navbar>
      <div class="title-shouye"><div>首页</div></div>
    </navbar>
    <div class="block">
    <el-carousel height="150px">
      <el-carousel-item v-for="item in banner" :key="item">
       <img :src="item.image_url" alt="" srcset="" class="lunbo-img">
      </el-carousel-item>
    </el-carousel>
    <recommend :recommends='channel'></recommend>
    <Specialbrand :Specialbrands='newGoodsList'></Specialbrand>
    <Specialbrandone :Specialbrands='brandList'></Specialbrandone>
    <hotrecommend :hotrecommend='hotGoodsList'></hotrecommend>
    <div style="height: 53px"></div>
    </div>
    
  </div>
 
</template>
<script>
import axios from "axios";
import navbar from "../../components/coment/navbar/navbar";
import recommend from '../shouye/recommend/recommend'
import Specialbrand from '../shouye/special/Specialbrand'
import Specialbrandone from '../shouye/special/Specialbrandone'
import hotrecommend from './special/hotrecommend'
export default {
  name: "shouye",
  components: {
    navbar,
    recommend,
    // Specialbrand,
    // Specialbrandent,
    Specialbrand,
    Specialbrandone,
    hotrecommend
  },
  created() {
    axios({
      url: "http://127.0.0.1:8360/index/index",
    }).then((res) => {
      console.log(res.data);
      this.banner=res.data.data.banner
      this.brandList=res.data.data.brandList
      this.channel=res.data.data.channel
      this.categoryList=res.data.data.categoryList
      this.newGoodsList=res.data.data.newGoodsList
      this.hotGoodsList=res.data.data.hotGoodsList
    });
  },
  data() {
    return {
      cult:null,
      banner:'',
      brandList:'',
      channel:'',
      categoryList:'',
      newGoodsList:'',
      hotGoodsList:'',
      topicList:''
    }
  },
};
</script>


<style scoped>

.title-shouye {
  font-weight: 900;
  
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .lunbo-img{
    width: 100%;
    height: 150px;
  }

</style>