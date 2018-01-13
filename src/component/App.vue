<template>
    <div>
        <!-- <header></header> -->
        公告头部
        <router-view></router-view>
        公告地步
        <!-- 根组件会有一些子组件, 我把这些子分为两种: 一种是子页面, 一种是页面布局结构 -->
        <!-- <app-login></app-login>
        <app-regieter></app-regieter>

        <footer></footer> -->
    </div>
</template>

<script>
    export default {
        data () {
            return {
                value:2
            }
        }
    }
</script>

<style scoped>

</style>