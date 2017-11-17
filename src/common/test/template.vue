<template>
    <scroll class="wrapper"
            :data="data"
            :pulldown="pulldown"
            :pullup="pullup"
            @pulldown="ResetData"
            @pullup="loadData"
    >
        <div class="content">
            <p v-for="item in data">{{item}}</p>
        </div>
        <load class="loading-container"></load>
    </scroll>
</template>

<script type="text/ecmascript-6">
    import BScroll from 'base/scroll/scroll'
    import load from 'base/loading/loading'
    export default{
    	data () {
    		return {
    			data:[1,2,3,4,5,6,7,8,8,1,1,1,1,1],
                pulldown:true,
			    pullup:true
            }
        },
        created() {
//    		this.loadData()
        },
        methods:{
	        ResetData() {
		        console.info('pulldown')
            },
    		loadData() {
                console.info('pullup')
			    let mx = ['孟祥','王世成']
			    this.data = this.data.concat(mx)
            },
        },
        components:{
    		'scroll':BScroll,
            'load':load
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "~assets/css/mixin";
    .wrapper{
        max-height: 400px/$ppr;
        overflow: hidden;
        position: relative;
        p{
            text-align: center;
        }
        .loading-container{
            position: absolute;
            width: 100px/$ppr;
            height: 100px/$ppr;
            left: 30%;
            bottom: 10px/$ppr;
            transform:translateX(-62%);
        }
    }
</style>