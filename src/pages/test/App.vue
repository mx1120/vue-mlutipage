<template>
    <div id="app">
        这是test
        <div class="btn" @click="go">
            hello
        </div>
        <router-view/>
    </div>
</template>

<script>
	export default {
		name: 'app',
        methods:{
			go(){
				this.$router.push('/hello')
            }
        }
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .btn{
        width: 100px;
        height: 100px;
        border: 1px solid bisque;
    }
</style>