<template>
  <div id="app">
    这是index
    <div class="sub" @click="go">
        INDEX
    </div>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'app',
    methods:{
  	    go() {
  	    	this.$router.push('/index')
        }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .sub{
    width: 100px/$ppr;
    height: 100px/$ppr;
    border: 1px solid rebeccapurple;
  }
</style>
