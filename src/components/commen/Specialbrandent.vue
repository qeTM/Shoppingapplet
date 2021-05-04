<template>
<Specialbrand v-for="item in shuju">
    <div >
        <img :src="item.list_pic_url" slot="image"  alt="">
        <div slot="itemNA">{{item.name}}</div>
        <span slot="itemRP">{{item.retail_price}}</span>
    </div>
</Specialbrand>

    
</template>

<script>
import Specialbrand from '../coment/Specialbrand/Specialbrand'
export default {
    name:'Specialbrandent',
    props:{
        shuju:{
            default(){
                return[]
            }
        },
        components:{
           Specialbrand
        }
    }
}
</script>

<style>

</style>