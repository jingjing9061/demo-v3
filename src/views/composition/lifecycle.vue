<template>
    <h3> 生命周期钩子 </h3>
    <div>
        <p>Options API形式的组件生命周期钩子和Composition API之间的实际对应关系：</p>
        <p style="color:#b5818a">注：setup 是围绕 beforeCreate 和 created 生命周期钩子运行的，所以不需要显式地定义它们。</p> 
        <ul>
            <li>beforeCreate -> 请使用 setup()</li>
            <li>created -> 请使用 setup()</li>
            <li>beforeMount -> onBeforeMount</li>
            <li>mounted -> onMounted</li>
            <li>beforeUpdate -> onBeforeUpdate</li>
            <li>updated -> onUpdated</li>
            <li>beforeDestroy -> onBeforeUnmount</li>
            <li>destroyed -> onUnmounted</li>
            <li>errorCaptured -> onErrorCaptured</li>
        </ul>
    </div>
    
</template>

<script>
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
export default {
    setup() {
        onBeforeMount(() => {
            console.log('beforeMount -> onBeforeMount!')
        }),
        onMounted(() => {
            console.log('mounted -> onMounted!')
        }),
        onBeforeUpdate(() => {
            console.log('beforeUpdate -> onBeforeUpdate!')
        }),
        onUpdated(() => {
            console.log('updated -> onUpdated!')
        }),
        onBeforeUnmount(() => {
            console.log('beforeDestroy -> onBeforeUnmoun!')
        }),
        onUnmounted(() => {
            console.log('destroyed -> onUnmounted!')
        })
    }
}
</script>
<style lang="stylus" scoped>
.lifecycle {
}
</style>