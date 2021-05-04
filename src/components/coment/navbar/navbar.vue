<template>
    <div class="navbar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="conten">
            <slot></slot>
        </div>
        <div class="rigth">
            <slot name="rigth"></slot>
        </div>
    </div>
</template>
<script>
    export default{
        name:'navbar'
    }
</script>
<style scoped>
.navbar {
   
    height: 49px;
    display: flex;
}
.left,.rigth{
    width: 15%;
    
}
.conten{
    flex: 1;
    text-align: center;
    line-height: 49px;
    font-size: 20px;

}
</style>