<template>
    <div class="third">
        <span @click="back">BACK</span>
        <div class="wrapper" ref="wrapper">
           <div class="scroll-box" @scroll="scroll($event)">
               <p v-for="item in list">
                   {{item}}
               </p>
           </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import BScroll from 'better-scroll'
    export default{
    	name:"third",
        data () {
    	    return {
    	    	list:[
                    {
                    	'name':'okay'
                    },
			        {
				        'name':'okay'
			        },
			        {
				        'name':'okay'
			        },
			        {
				        'name':'okay'
			        },
			        {
				        'name':'okay'
			        },
			        {
				        'name':'okay'
			        },
			        {
				        'name':'okay'
			        },{
				        'name':'okay'
			        },
			        {
				        'name':'okay'
			        },
			        {
				        'name':'okay'
			        },
			        {
				        'name':'okay'
			        },
			        {
				        'name':'okay'
			        },
			        {
				        'name':'okay'
			        },
			        {
				        'name':'okay'
			        },
			        {
				        'name':'okay'
			        },
			        {
				        'name':'okay'
			        }

                ],
                Timer:null
            }
        },
    	methods:{
    		back() {
    			this.$router.go(-1)
//			    this.$emit('three', 'two')
            },
		    scroll(ev) {
                this.Timer && clearTimeout(this.Timer)
			    this.Timer = setTimeout(() => {
				    let scrollTop = ev.target.scrollTop,
					    scrollHeight = ev.target.scrollHeight,
					    clientHeight = ev.target.clientHeight
				    if(scrollTop + clientHeight > scrollHeight - 20){
					    console.info(111111111)
				    }
			    }, 500)
            }
        },
        mounted() {
    		 this.scroll = new BScroll(this.$refs.wrapper, {
			    bounce:true,
                momentumLimitDistance:5
		    })

	        this.scroll.on('touchend', (pos) => {
		        // 下拉动作
		        if (pos.y > 50) {
			        console.info(11111111111)
		        }
	        })
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "~assets/css/mixin";
    .third{
        min-height: 100vh;
        width: 100vw;
        overflow: hidden;
        background: #950;
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
    .wrapper{
        margin-top: 30px/$ppr;;
        height: 600px/$ppr;
        background: #ffffff;
        overflow: hidden;
    }
    .scroll-box{
        height: 900px/$ppr;
    }
</style>