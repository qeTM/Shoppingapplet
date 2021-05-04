<template>
    <div>
        <div class="tit" >
            <div class="fanhui" @click="fanhui">&lt;</div>
            <div class="gon">{{name}}</div>
            <div class="fanhui"></div>
        </div>
        <div v-for="(item,index) in shangpinglb" class="liebiao" @click="shangptz(item.id,item.name)"> 
            <img :src="item.list_pic_url" alt="">
            <span>{{item.name}}</span>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default{
    name:'chanping',
    data() {
        return {
            id:null,
            name:null,
            shangpinglb:'',
            
            moren:[
                {
                'id':'00000',
                'list_pic_url': '"http://yanxuan.nosdn.127.net/fd7920a2eadd10fa10c0c03959a2abe0.png"',
                'name': '"未有该类商品"',
                'retail_price': '9999'
            }           
            ]     
            
        }
    },
      methods: {
      shangpingxq:function(index){
        axios.get('http://127.0.0.1:8360/goods/list?'+'categoryId'+'='+index+',page=1,size=20').then((res)=>{
            console.log('商品详情')
            console.log(res.data.data.goodsList);
            if(res.data.data.goodsList.length!=0){
                this.shangpinglb=res.data.data.goodsList;
            }else{
                this.shangpinglb=this.moren
            }
            
        })
      },
      shangptz:function(index,name){
        console.log(index);
            this.$router.push({
                   path:'/spzsxq',
                   query:{
                       id:index,
                       name:name
                   }
        })
      },
      fanhui(){
          this.$router.back()
      }
    },
    created() {
        this.name=this.$route.query.name
        axios.get('http://127.0.0.1:8360/goods/category?id='+this.$route.query.id).then((res)=>{
                //console.log(res.data);
                this.brotherCategory=res.data.data.brotherCategory;
                this.currentCategory=res.data.data.currentCategory;
                // console.log(this.currentCategory);
                this.shangpingxq(this.$route.query.id)
        })  
    },
    computed(){
        
    },
    }
</script>
<style scoped>
    .tit{
        height: 50px;
        line-height: 50px  ;
        background: rgb(0, 102, 255);
        display: flex;
        position:fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .fanhui{
        width: 15%;
        font-size: 30px;
        color: #fff;
    }
    .gon {
        flex: 1;
        width: 70%;
        font-size: 25px;
        text-align: center;
        color: #fff;
        font-family: "Times New Roman", Times, serif;
        
    }
    .liebiao {
        width: 49.7vw;
        text-align: center;
        display: inline-block;
        background: #eee;
        margin-bottom: 2px;   
    }
    .liebiao:nth-child(2n) {
        margin-right: 1px;
    }
    .liebiao:nth-child(2n+1) {
        margin-left: 1px;
    }
    .liebiao img {
        width: 100%;
        height: 100%;
    }
    .liebiao span {
        display: inline-block;
        width: 140px;
        height: 22px;
        text-align: center;
        overflow: hidden;
        text-overflow:ellipsis;
    }
</style>