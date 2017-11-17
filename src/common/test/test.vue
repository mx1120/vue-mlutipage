<template>
    <div>
        <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
            <component :is="currentView" @one="go_one" @two="go_two" @three="go_three"></component>
        </transition>
    </div>
</template>

<script type="text/ecmascript-6">
	import one from 'common/test/one'
	import two from 'common/test/two'
	import three from 'common/test/three'
	import test from 'common/test/test'
    import * as maps from 'vuex'
    export default{
		data () {
			return {
				currentView:"one"
            }
        },
        computed:{
	        ...maps.mapState({
		        'direction':state => state.direction
	        })
        },
        methods:{
	        go_one (data) {
                this.currentView = data
            },
	        go_two (data) {
		        this.currentView = data
            },
	        go_three (data) {
		        this.currentView = data
            }
        },
        components:{
			'one':one,
            'two':two,
            'three':three,
            'test':test
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .vux-pop-out-enter-active,
    .vux-pop-out-leave-active,
    .vux-pop-in-enter-active,
    .vux-pop-in-leave-active {
        will-change: transform;
        transition: all 0.3s linear;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        position: absolute;
        backface-visibility: hidden;
        perspective: 1000;
    }

    .vux-pop-out-enter {
        /*opacity: 0;*/
        transform: translate3d(-100%, 0, 0);
    }

    .vux-pop-out-leave-active {
        /*opacity: 0;*/
        transform: translate3d(100%, 0, 0);
    }

    .vux-pop-in-enter {
        /*opacity: 0;*/
        transform: translate3d(100%, 0, 0);
    }

    .vux-pop-in-leave-active {
        /*opacity: 0;*/
        transform: translate3d(-100%, 0, 0);
    }
</style>