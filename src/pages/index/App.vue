<template>
  <div id="app">
    这是index
    <div class="sub" @click="go">
        hello word
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
    methods:{
  	    go() {
  	    	this.$router.push('/helloword')
        }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .sub{
    width: 100px;
    height: 100px;
    border: 1px solid rebeccapurple;
  }
</style>
