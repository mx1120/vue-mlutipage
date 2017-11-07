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
  	    	this.$storage.set('mx', 'aotuman')
  	    	this.$router.push('/index')
        }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  .sub{
    width: 100px;
    height: 100px;
    border: 1px solid rebeccapurple;
  }
</style>
