<template>
    <h1>setUp</h1>
    <ul>
        <li>1.相当于vue2中的beforeCreate与created</li>
        <li>2.setup函数是 Composition API（组合API）的入口</li>
        <li>3.setup函数中定义的变量和方法最后都是需要 return 出去的 不然无法再模板中使用</li>
        <li>4.setup函数只能是同步的不能是异步的</li>
        <li>5.由于在执行 setup函数的时候，还没有执行 Created 生命周期方法，所以在 setup 函数中，无法使用 data 和 methods 的变量和方法</li>
        <li>6.由于我们不能在 setup函数中使用 data 和 methods，所以 Vue 为了避免我们错误的使用，直接将 setup函数中的this修改成了 undefined</li>
    </ul>

</template>

<script>
import { reactive } from 'vue'
export default {
    /**
     * 在beforeCreate之后，created之前执行
     */
    setup(props,ctx){
        const state = reactive({name:'setup'})
        console.log(props)
        console.log(ctx)

        return {
            state
        }
    }
}
</script>
