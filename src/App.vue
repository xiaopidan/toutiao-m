<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  created () {
    console.log('this===>', this)
  }
}

</script>

<style lang="less">

</style>
