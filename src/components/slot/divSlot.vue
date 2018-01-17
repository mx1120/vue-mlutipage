<template>
    <div>
        <test>
            <p slot="name"></p>
            <p slot="sex"></p>
        </test>
    </div>
</template>

<script type="text/ecmascript-6">
    import test from './slot.vue'
	export default {
		data() {
			return {}
		},
		created() {
		},
        components: {
	        test
        }
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>