<template>
    <div>
        test
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        data() {
        	return {

            }
        },
        methods:{

        },
        created() {
        	this.$axios.post('')
                .then(res => {
                	console.info(res)
                })
                .catch(error => {
                	console.info(error)
                })
                .finally(() => {
        		    console.info('ended')
                })
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>