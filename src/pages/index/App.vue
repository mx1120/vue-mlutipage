<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'app',
    methods:{

    }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "~assets/css/base.scss";
  .sub{
    width: 100px/$ppr;
    height: 100px/$ppr;
    border: 1px solid rebeccapurple;
    font-size: 24px/$ppr;
  }
</style>
