<template>
    <div ref="wrapper">
        <slot></slot>
    </div>
</template>

<script type="text/ecmascript-6">
    import BScroll from 'better-scroll'
    export default{
    	props:{
    		probeType:{
    			type:Number,
                default:1
            },
            click:{
    			type:Boolean,
                default:true
            },
            scrollX:{
    			type:Boolean,
                default:false
            },
		    listenScroll:{
    			type:Boolean,
                default:false
            },
            data:{
    			type:Array,
                default:null
            },
		    pullup:{
    			type:Boolean,
                default:false
            },
            pulldown:{
    			type:Boolean,
                default:false
            },
            beforeScroll:{
    			type:Boolean,
                default:false
            },
		    refreshDelay:{
    			type:Number,
                default:20
            }
        },
        mounted() {
    		setTimeout(() => {
                this._initScroll()
            },20)
        },
        methods: {
	        _initScroll() {
	        	if(!this.$refs.wrapper){
                    return
                }
                //scroll初始化
                this.scroll = new BScroll(this.$refs.wrapper, {
                	probeType:this.probeType,
                    click:this.click,
                    scroll:this.scrollX,
	                bounce:true,
	                momentumLimitDistance:5
                })

		        if (this.listenScroll) {
			        this.scroll.on('scroll', (pos) => {
				        this.$emit('scroll', pos)
			        })
		        }

		        if (this.pullup) {
			        this.scroll.on('scrollEnd', (pos) => {
				        // 滚动到底部
				        /*if (this.scroll.y <= (this.scroll.maxScrollY + 30)) {
					        this.$emit('pullup')
				        }*/
				        if(this.scroll.startY <= this.scroll.maxScrollY - 20){
					        this.$emit('pullup')
                        }
			        })

                    //加载loading状态
			        this.scroll.on('scroll',pos => {
			        	console.info(pos.y)
                        console.info(this.scroll.maxScrollY + 30)
				        if(pos.y - 100 < this.scroll.maxScrollY){
					        this.$emit('loadingUp', true)
				        }

			        })
		        }

		        if (this.pulldown) {
			        /*this.scroll.on('touchend', (pos) => {
				        // 下拉动作
				        if (pos.y > 50) {
					        this.$emit('pulldown')
				        }
			        })*/
			        this.scroll.on('scrollEnd', () => {
			        	if(this.scroll.startY > 30){
					        this.$emit('pulldown')
                        }
                    })
			        //加载loading状态
			        this.scroll.on('scroll',pos => {
			        	if(pos.y > 30){
					        this.$emit('loadingDown', true)
                        }
			        })
		        }


		        if (this.beforeScroll) {
			        this.scroll.on('beforeScrollStart', () => {
				        this.$emit('beforeScroll')
			        })
		        }
            },
            disable() {
	            this.scroll && this.scroll.disable()
            },
            enable() {
	            this.scroll && this.scroll.enable()
            },
	        refresh() {
		        // 代理better-scroll的refresh方法
		        this.scroll && this.scroll.refresh()
	        },
	        scrollTo() {
		        // 代理better-scroll的scrollTo方法
		        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
	        },
	        scrollToElement() {
		        // 代理better-scroll的scrollToElement方法
		        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
	        }
        },
        watch:{
	        data() {
		        setTimeout(() => {
			        this.refresh()
		        }, this.refreshDelay)
	        }
        }
    }
</script>

<style lang="scss" scoped>
</style>