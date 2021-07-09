<template>
    <h3>Provide</h3>
    <ul>
        <li>1.Provide/Inject 机制是用来爷孙组件数据传递的方案(中间无限级都可以)</li>
        <li>2.provide/inject 绑定并不是响应式的。我们可以通过传递一个 ref property 或 reactive 对象给 provide 来改变这种行为</li>
        <li></li>
        <li></li>



        <h4>使用：</h4>
        <button @click="changeHobby('study')">change</button>
        <Inject/>
    </ul>

</template>
<script>
    import { provide, ref } from 'vue'
    import Inject from './Inject.vue'

    export default {
        components: { Inject },
        setup(){
            const tempstr = ref('palying')

            // provide() 和 inject() 可以实现嵌套组件之间的数据传递。这两个函数只能在 setup() 函数中使用。
            provide('hobby',tempstr)

            const changeHobby = (val)=>{
                tempstr.value = val
            }
            
            return {
                tempstr,
                changeHobby
            }
        }


    }
</script>