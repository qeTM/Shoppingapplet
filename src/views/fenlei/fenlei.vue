<template>
    <h2 class="title">分类</h2>
    <el-tabs tab-position="left" height='calc(100vh - 104vh)' @tab-click="itda" >
        <el-tab-pane v-for="(item,index) in adu" :label='item.name' >
            <span :subCategoryList='subCategoryList' slot="label" >
                <div v-for="iem in ate" class="cicd" @click="adds(iem.id,iem.name)">
                <img  :src="iem.wap_banner_url" alt="" class="cicdImg">
                <span>{{iem.name}}</span>
                </div>
            </span>
        </el-tab-pane>
    </el-tabs>
</template>
<script>
import axios from 'axios'
    export default{
        name:'fenlei',
        
       data(){
           return{
               adu:'',
               cha:0,
               ate:{}
           }
       },
      
       async created() {
            let res = await axios(
                'http://127.0.0.1:8360/catalog/index'
            )
            this.adu=res.data.data.categoryList
            console.log(res.data.data.categoryList)
            // console.log(res.data.data.categoryList.subCategoryList)
        },
       methods: {
           itda:function(tab,event){
               console.log(tab.index)
               this.cha=tab.index
           },
           adds:function(id,name){
                console.log(id)
               this.$router.push({
                   path:'/chanping',
                   query:{
                       id:id,
                        name:name
                   }
               })
           }
       },
        computed:{
           subCategoryList:function(){
               this.ate =this.adu[this.cha].subCategoryList;
                console.log(this.ate);
               return this.ate;
           }
           
       },
       activated: function() {
        this.getCase()
        }
    }
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
}
    .title{
        text-align: center;
        
    }
    .cicd{
        display: inline-block;
        width: 90px;
        height: 90px;
        text-align: center;
    }
    .cicdImg {
        width: 89px;
        height: 89px;
        text-align: center;
    }
</style>