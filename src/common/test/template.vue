<template>
    <div>
        <scroll class="wrapper"
                :data="data"
                :pulldown="pulldown"
                :pullup="pullup"
                @pulldown="ResetData"
                @pullup="loadData"
                @loadingDown="loadingDown"
                @loadingUp="loadingUp"
        >
            <div class="content">
                <load class="loading-container" v-show="downLoading"></load>
                <p v-for="item in data">{{item}}</p>
                <load class="loading-container" v-show="upLoading"></load>
            </div>
        </scroll>
    </div>

</template>

<script type="text/ecmascript-6">
    import BScroll from 'base/scroll/scroll'
    import load from 'base/loading/loading'
    export default{
    	data () {
    		return {
    			data:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
                pulldown:true,
			    pullup:true,
			    downLoading:false,
                upLoading:false
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
            },
	        loadingDown(show) {
                this.downLoading = show
                setTimeout(() => {
                	this.downLoading = false
                }, 3500)
            },
	        loadingUp(show) {
	        	this.upLoading = show
//                setTimeout( () => {
//                	this.upLoading = false
//                }, 3500)
            },
	        drag(ev){
	        	console.info(ev)
            }
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
        border: 1px solid red;
        .content{
            @include clearfix;
        }
        p{
            text-align: center;
        }
        .loading-container{
            width: 100px/$ppr;
            height: 100px/$ppr;
            margin-left:43%;
        }
    }
    .drag{
        width: 100px/$ppr;
        height: 100px/$ppr;
        background: rgba(0,0,0, .7);
    }
</style>