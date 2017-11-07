<template>
    <div id="app">
        这是test
        <div class="btn" @click="go">
            TEST
        </div>
        <router-view/>
    </div>
</template>

<script type="text/ecmascript-6">
	export default {
		name: 'app',
        methods:{
			go(){
				this.$storage.set('pl', 'sb')
				this.$router.push('/test')
            }
        }
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "assets/css/base";
    .btn{
        width: 100px;
        height: 100px;
        border: 1px solid bisque;
    }
</style>