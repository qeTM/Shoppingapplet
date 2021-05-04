<template>
  <div class="Specialbrands">
     <div class="Specialbrandsitem">
         <div>
             <!-- <slot name="image"></slot> -->
              <img :src="item.list_pic_url" alt="">
         </div>
        
         <div class="itemname">
            <!-- <slot name="itemNA"></slot> -->
            <div>{{item.name}}</div>
         </div>
        
         <div class="itemname">价格
             <!-- <slot name="itemPR"></slot> -->
             <span>{{item.retail_price}}</span>
             ￥起</div>
     </div>
  </div>
</template>

<script>
export default {
    name:'Specialbrand',
    props:{
        Specialbrands:{
            type:Array,
            default(){
                return[]
            }
        }
    }
}
</script>
    
<style>
.Specialbrands{
    width: 100%;
    height: 100%;
     
}
.Specialbrandsitem {
    float:left;
    width: 50%-1px;
    display: inline;
    height: 230px;
    background-color: #eee;
    border-bottom: 5px solid snow;
}
.Specialbrandsitem img{
    width: 180px;
    height: 180px;
    
}
.Specialbrandsitem:nth-child(2n){
    border-left: 5px snow solid;


}
.Specialbrandsitem:nth-child(2n+1){
    border-left: 5px snow solid;
}
.itemname {
    text-align: center;
}
</style>