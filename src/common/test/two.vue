<template>
    <div class="top">
        <div class="header">
            this is two
        </div>
        <span @click="back">BACK</span>
        <span @click="three">Three</span>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
    	methods:{
    		back(){
    			this.$router.go(-1)
//			    this.$emit('two', 'one')
            },
		    three() {
    			this.$router.push('/three')
//			    this.$emit('two', 'three')
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "~assets/css/mixin";
    .top{
        min-height: 100vh;
        width: 100vw;
        overflow: hidden;
        background: purple;
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