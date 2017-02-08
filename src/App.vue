<template>
    <div id="app">
        <h3>welcome vuex-demo</h3>
        <input type="button" value="增加" @click="increment">
        <input type="button" value="减少" @click="decrement">
        <!-- <input type="button" value="偶数才能点击+" @click="clickOdd">
         <input type="button" value="点击异步" @click="clickAsync">-->
        <div>
            现在数字为: {{count}}<!--, 它现在是 {{getOdd}}-->
        </div>
    </div>
</template>

<style>

</style>
<script type="text/ecmascript-6">
    import {mapGetters, mapActions}  from 'vuex'; //引入vuex中两个实用的功能   mapGetters:用于界面获得数据, mapActions: 用于封装方法和变量
    export default{
        computed: mapGetters([
            'count'
        ]),
        methods: mapActions([
            'increment',
            'decrement'
        ])
    }
</script>
