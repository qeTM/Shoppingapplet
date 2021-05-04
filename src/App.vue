<template>
  <div id="app">
    <router-view/>
    <tabbaritem></tabbaritem>
  </div>
</template>

<script>
import tabbaritem from '../src/components/commen/tabbarconet'

export default {
  name: 'app',
  components: {
    tabbaritem
  }
}
</script>
<style>

</style>
