<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
    import * as maps from 'vuex'
    import searchToMap from 'assets/js/searchMap.js'
    export default {
  	    name: 'app',
        methods:{
            ...maps.mapActions(['getBook', 'getProfile']),
            ...maps.mapMutations({
            	'steType':'TYPE'
            })
        },
        async created() {
  	    	const search = searchToMap()
            await this.steType(Number(search.type))
	        await this.getProfile()
  	    	await this.getBook({'sub_id':91, 'type':1})
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "~assets/css/base.scss";
</style>
