<template>
    <div>
        <catalog :workType="workType"></catalog>
    </div>
</template>

<script type="text/ecmascript-6">
    import catalog from 'common/catalog/catalog'
    import * as maps from 'vuex'
    export default{
    	data() {
    		return {
                workType: null,
                catalog:[]
            }
        },
        computed:maps.mapState({
        	'book_id': state => state.book.id
        }),
        components:{
    		'catalog':catalog,
        },
        methods:{
            ...maps.mapActions(['getCatalog'])
        },
        mounted() {
            this.getCatalog()
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>