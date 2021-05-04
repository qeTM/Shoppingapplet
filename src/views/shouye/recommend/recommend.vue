<template>
  <div class="channel">
      <div v-for="item in recommends" class="recommends">
         <a href=''>
             <img :src="item.icon_url" alt="">
            <div>{{item.name}}</div>
         </a>
      </div>
  </div>
</template>

<script>
export default {
    name:"recommend",
    props:{
        recommends:{
            default(){
                return[]
            }
        }
    }
}
</script>

<style>
    * {
      margin: 0;
      padding: 0;
  }
    .channel {
        display: flex;
        background-color: rgb(246,246,246);
        text-align: center;
        margin-top: 2px;
        padding-bottom: 5px;
    }
    .recommends {
        flex: 1;
    }
    .recommends img{
        width: 40px;
        height: 40px;
    }
    .recommends a{
        text-decoration: none;
    }
</style>