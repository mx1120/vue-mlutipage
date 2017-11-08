<template>
    <div>
        <catalog :type="type" :cont="cont"></catalog>
    </div>
</template>

<script type="text/ecmascript-6">
    import catalog from 'common/list/list'
    import * as map from 'vuex'
    export default{
    	data() {
    		return {
                type: '',
                cont:[]
            }
        },
        components:{
    		'catalog':catalog,
        },
        created() {
    		this.type = this.$route.query.type
            this.$axios.post(DOMAIN_API_YY_API_DJ_URLROOT + '/zy/get_word_catalogs',{'book_id':44,'type_id':1})
                .then(res => {
                    if(res.data.response == 'ok'){
                        this.cont = this.cont.concat(res.data.data.chapter)
                    }
                })
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>