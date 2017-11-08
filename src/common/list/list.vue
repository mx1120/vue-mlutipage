<template>
    <div class="list">
        <div class="header">
            {{title}}
            <span class="back" @click="back"></span>
        </div>
        <div class="content">
            <div class="top">
                <div class="left"></div>
                <div class="right">
                    <span>{{bookTitle}}</span>
                    <span @click="changeBook()">{{btnCont}}</span>
                </div>
            </div>
            <div class="cont">
                <keep-alive>
                    <component :is="currentView" :content="cont"></component>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import contGame from 'common/listContent/contGame'
    import wordGame from 'common/listContent/wordGame'
    import noSource from 'common/noResource/noResource'
    export default{
    	props:{
            title:{
            	type:String,
                default:'同步习题'
            },
            bookTitle:{
            	type:String,
                default:'三年级上册（人教版一年级起始）'
            },
            btnCont:{
            	type:String,
                default:'更换教材'
            },
            type:{
            	type:String,
                default:'1'
            },
            cont:{
            	type:Array,
                default:[]
            }
        },
        data() {
    		return {
    			currentView:'wordGame'
            }
        },
        watch:{
	        currentView(){
	        	return this.currentView
            },
        },
        methods:{
    		back() {
    			this.$router.go(-1)
            },
	        changeBook() {
    		    console.info('change book')
            }
        },
        components:{
            'contGame':contGame,
            'wordGame':wordGame,
            'noSource':noSource
        },
        created() {
    		let _type = this.type
            console.info(_type)
//            this.currentView = this.cont.length == 0 ? 'noSource' : (_type == 1 ? this.currentView = 'contGame' : this.currentView = 'wordGame')
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "~assets/css/mixin";
    .list{
        position: relative;
    }
    .header{
        @include wh(100%, 96px/$ppr);
        @include bg(white,'',cover);
        @include textCenter;
        line-height: 96px/$ppr;
        font-size: 34px/$ppr;
        position: absolute;
        span{
            display: inline-block;
            @include wh(64px/$ppr, 64px/$ppr);
            @include bg('', url('./img/back.png'), cover);
            position: absolute;
            left: 24px/$ppr;
            top: 16px/$ppr;
        }
    }
    .content{
        min-height: 100vh;
        box-sizing: border-box;
        padding: 96px/$ppr 24px/$ppr 0;
        @include bg('', url('./img/bg.png'), cover);
        .top{
            margin-top: 24px/$ppr;
            @include wh(674px/$ppr, 209px/$ppr);
            background: white;
            border-radius: 20px/$ppr;
            box-sizing: border-box;
            padding: 27px/$ppr 34px/$ppr 26px/$ppr 26px/$ppr;
            .left, .right{
                float: left;
                @include clearfix;
            }
            .left{
                @include wh(125px/$ppr, 158px/$ppr);
                @include bg('', url('./img/book.png'), cover);
                margin-right: 36px/$ppr;
            }
            .right{
                span{
                    display: block;
                }
                span:nth-of-type(1){
                    @include textCenter;
                    font-size: 30px/$ppr;
                    font-weight: 500;
                    color: $fontColor;
                    line-height: 48px/$ppr;
                }
                span:nth-of-type(2){
                    @include wh(200px/$ppr, 81px/$ppr);
                    line-height: 81px/$ppr;
                    @include textCenter;
                    font-size: 30px/$ppr;
                    color: white;
                    border-radius: 34px/$ppr;
                    background: $btnColor;
                    margin-top: 20px/$ppr;
                }
            }
        }
        .cont{
            margin-top: 24px/$ppr;
            border-radius: 20px/$ppr;
            @include wh('', 817px/$ppr);
            box-sizing: border-box;
        }
    }


</style>