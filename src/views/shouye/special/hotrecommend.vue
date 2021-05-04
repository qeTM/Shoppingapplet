<template>

<div class="block" v-for="(item,index) in hotrecommend" :key="index">
    <div class="itemimg">
        <el-image
        style="width: 100px; height: 100px"
        :src="item.list_pic_url"
        ></el-image>
    </div>
    <div class="itemdetails">
        <h3>{{item.name}}</h3>
        <span>￥{{item.retail_price}}</span>
    </div>
</div>

</template>

<script>
export default {
    name:'hotrecommend',
    data() {
        return {
            
        }
    },
    props:{
        hotrecommend:{
                default(){
                    return[]
                }
            }
    }

}
</script>

<style scoped>

    .block {
        height: 110px;
        background-color: #eee;
        margin-bottom: 1px;
    }
    .itemimg{
        float: left;
        background-color: snow;
        width: 100px;
        height: 100px;
    }
    .itemdetails {
        float: left;
        margin-left: 30px;
        height: 100px;
        text-align: center;
        width: 220px;
        overflow: hidden;
        
    }
    .itemdetails h3{
        padding-top: 30px;
    }
    .itemdetails span{
        height: 21px;
        position: relative;
        bottom: -20px;
        font-weight: 700px;
        color: blue;
    }
</style>