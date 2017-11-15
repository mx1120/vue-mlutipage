<template>
    <div>
        <span @click="back">BACK</span>
        <span @click="two">TWO</span>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
    	methods:{
    		back() {
    			this.$router.go(-1)
            },
            two() {
//    			this.$emit('next', 'two')
    			this.$router.push('/two')
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    div{
        min-height: 100vh;
        width: 100%;
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
</style>