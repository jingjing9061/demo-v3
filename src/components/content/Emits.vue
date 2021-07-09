<template>
    <div class="Emits" @click="$emit('click')">

        <!-- 不设置emits选项 click 会触发两次 自定义一次 原生一次 -->
        <!-- 注意 尽量避免和原生事件重名 -->
        自定义组件
    </div>
</template>

<script>
export default {
    emits:['click'],// 设置emits选项 只会执行自定义事件

}
</script>
<style  scoped>
    .Emits {
        
    }
</style>