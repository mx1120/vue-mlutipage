<template>
    <div>
        <catalog></catalog>
    </div>
</template>

<script type="text/ecmascript-6">
    import catalog from 'common/catalog/catalog'
    import * as maps from 'vuex'
    export default{
    	data() {
    		return {
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
        async mounted() {
            await this.getCatalog()
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>