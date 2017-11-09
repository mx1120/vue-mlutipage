<template>
    <div id="noBook">
        <div class="noresource">
            <em></em>
            <p>您暂未设置教材</p>
            <p>请先设置一本教材吧，设置过后才能查看</p>
            <span @click='setBook'>设置教材</span>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        name:'noBook',
        methods:{
	        setBook() {
	        	console.info(1)
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "~assets/css/mixin";
    .noresource {
        text-align: center;
        position: relative;
        top: 150px/$ppr;
        em {
            background: url("./img/noresource.png") no-repeat;
            background-size: 128px/$ppr 115px/$ppr;
            display: inline-block;
            height: 115px/$ppr;
            width: 128px/$ppr;
        }
        p {
            font-size: 30px/$ppr;
            color: #333;
            line-height: 60px/$ppr;
        }
        span{
            display: inline-block;
            @include wh(200px/$ppr, 81px/$ppr);
            line-height: 81px/$ppr;
            @include textCenter;
            font-size: 30px/$ppr;
            color: white;
            border-radius: 15px/$ppr;
            background: $orange;
            margin-top: 20px/$ppr;
        }
    }

</style>