<template>
<div class="dasd">
    <div class="title">品牌制造商直供</div>
  <div v-for="item in Specialbrands"  class="Specialbrands">
     <div class="Specialbrandsitem" @click="shangptz(item.id)">
        <img :src="item.list_pic_url" alt="">
         <div class="itemname">
            {{item.name}}
         </div>
        
        <div class="itemname">价格
             {{item.retail_price}}￥起
        </div>
     </div>
  </div>
  </div>
</template>

<script>
export default {
    name:'Specialbrand',
    props:{
        Specialbrands:{
            default(){
                return[]
            }
        }
    },
    methods:{
        shangptz(index){
            console.log(index);
            this.$router.push({
                path:'/spzsxq',
                query:{
                    id:index,
                },
            })
        }
        }, 
}
</script>
<style scoped>
    .title {
        width: 100%;
        height: 3vh;
        text-align: center;
        font-size: 20px;
        color: rgb(74, 102, 226);
        margin: 20px 0;
    }
    .Specialbrands {
        width: 50vw;
        display: inline-block;
        text-align: center;
    }
    .Specialbrandsitem img{
        width: 156px;
        height: 156px;
    }
    .itemname {
        width: 135px;
        height: 25px;
        font-size: 16px;
        margin: 0 auto;
        overflow: hidden;
    }
    .itemname {
        width: 135px;
        height: 25px;
        font-size: 16px;
        margin: 0 auto;
        overflow: hidden;
    }
</style>
