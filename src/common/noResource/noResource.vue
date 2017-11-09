<template>
    <div class="noResource">
        <p></p>
        <span>{{info}}</span>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
    	data() {
            return{
            	info:"暂无资源"
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "~assets/css/mixin";
    .noResource{
        @include center;
        @include clearfix;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        p{
            @include wh(128px/$ppr, 115px/$ppr);
            @include bg('', url('./img/noresource.png'), cover);
        }
        span{
            display: block;
            width: 100%;
            @include textCenter;
            font-size: 36px/$ppr;
        }
    }

</style>