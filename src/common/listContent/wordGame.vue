<template>
    <div>
        <ul>
            <li v-for="item in list">
                <div class="word" @click="game(item)">
                    <p>{{item.name}}</p>
                    <span>单词数：</span>
                    <em>{{item.count}}</em>
                </div>
            </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
    	props:{
		    list:{
            	type:Array,
                default:[]
            }
        },
        methods:{
    		game(data) {
    			console.info('wait moment')
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "~assets/css/mixin";
    ul{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li{
            @include wh(208px/$ppr, 208px/$ppr);
            border-radius: 20px/$ppr;
            margin-top: 40px/$ppr;
            .word{
                font-size: 28px/$ppr;
                line-height: 181px/$ppr;
                color: $fontColor;
                position: relative;
                border-radius: 20px/$ppr;
                @include textCenter;
                @include bg(white, '', '');
                @include wh(208px/$ppr, 181px/$ppr);
                p{
                    @include wh(180px/$ppr, 56px/$ppr);
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    top: -25px/$ppr;
                    @include bg($orange, '', '');
                    border-radius: 15px/$ppr;
                    line-height: 56px/$ppr;
                    color: white;
                }
                em{
                    color: $orange;
                }
            }
        }
    }
</style>