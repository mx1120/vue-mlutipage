<template>
  <div id="app">
    <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
        <keep-alive>
            <router-view />
            <!--<component :is="currentView" @next="next"></component>-->
        </keep-alive>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
    import * as maps from 'vuex'
    import searchToMap from 'assets/js/searchMap.js'
    import list from 'components/commonList/list'
    import one from 'common/test/one'
    import two from 'common/test/two'
    export default {
  	    name: 'app',
        data() {
	        return{
		        currentView:'one'
            }
        },
        methods:{
            ...maps.mapActions(['getBook', 'getProfile']),
            ...maps.mapMutations({
            	'setType':'TYPE',
            })
        },
        watch:{
  	    	$route(to, from){
		        const toDepth = to.path.split('/').length
		        const fromDepth = from.path.split('/').length
            }
        },
        computed:{
            ...maps.mapState({
	            'direction':state => state.direction
            })
        },
	    components:{
  	        'list':list,
            'one':one,
            'two':two
        },
        async created() {
  	    	const search = searchToMap()
            await this.setType(Number(search.type))
	        await this.getProfile()
  	    	await this.getBook({'sub_id':91, 'type':1})
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "~assets/css/base.scss";
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
      transform: translate3d(-100%, 0, 0);
  }

  .vux-pop-out-leave-active {
      transform: translate3d(-0%, 0, 0);
  }

  .vux-pop-in-enter {
      transform: translate3d(100%, 0, 0);
  }

  .vux-pop-in-leave-active {
      transform: translate3d(-0%, 0, 0);
  }







 /* .vux-pop-out-enter {
    transform: translate3d(-100%, 0, 0);
  }

  .vux-pop-out-leave-active {
    transform: translate3d(100%, 0, 0);
  }

  .vux-pop-in-enter {
    transform: translate3d(100%, 0, 0);
  }

  .vux-pop-in-leave-active {
    transform: translate3d(-100%, 0, 0);
  }*/
</style>
