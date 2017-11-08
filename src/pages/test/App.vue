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
    .btn{
        width: 100px/$ppr;
        height: 100px/$ppr;
        border: 1px solid bisque;
        @include clearfix;
    }
</style>