<template>
    <div>
        <span @click="back">BACK</span>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
    	methods:{
    		back(){
    			this.$router.go(-1)
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    div{
        min-height: 100vh;
        width: 100%;
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
</style>