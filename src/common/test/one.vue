<template>
    <div class="top">
        <div class="header">
            this is one
        </div>
        <span @click="back">BACK</span>
        <span @click="two">TWO</span>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
    	data() {
    		return{
			    title:'第三章节'
            }
        },
    	methods:{
    		back() {
    			this.$router.go(-1)
//			    this.$emit('one', '/list')
            },
            two() {
//    			this.$emit('one', 'two')
    			this.$router.push('/two')
            }
        },
	    beforeDestory() {
    		setTimeout(() => {
    			this.$destroy()
            },500)
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "~assets/css/mixin";
    .top{
        min-height: 100vh;
        width: 100vw;
        overflow: hidden;
        background: #903;
    }
    span{
        display: inline-block;
        width: 100px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        background: white;
        color: black;
    }
    .header{
        height: 96px/$ppr;
        background: black;
        color: white;
        line-height: 96px/$ppr;
        font-size: 34px/$ppr;
    }

</style>