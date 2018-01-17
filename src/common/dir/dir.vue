<template>
    <div>
        <input type="text" v-focus>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
    	data() {
    		return {

            }
        }
    }
</script>

<style lang="scss" scoped>
    div{
        width: 100vw;
        height: 100vh;
    }
    input{
        display: inline-block;
        width: 300px;
        height: 60px;
        border: 1px solid purple;
    }
    input:focus{
        border: 1px solid red;
    }
</style>