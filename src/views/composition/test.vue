<template>

    <p>count: {{count}}</p>
    <p>addone: {{addone}}</p>
    <button @click="add">增加</button>

    <p>{{str}}</p>

    <h3>emit使用</h3>
    <Emits @click="onClick"></Emits>

</template>
<script>
import { reactive, computed, watch, onMounted, ref, watchEffect } from 'vue'
import Emits from '../../components/content/Emits.vue'
export default {
    name: 'test',
    components: {
        Emits
    },

    setup(props, context) {
        console.log(props)
        console.log(context)
        /**
         * props
         * 不要在子组件中修改props；如果你尝试修改，将会给你警告甚至报错。
         * 不要解构props。解构的props会失去响应性。
         */

        /**
         * reactive 等同于 2.x 的 Vue.observable()
         * 接收一个普通对象然后返回该普通对象的响应式代理
         */
        const count = reactive({ count: 0 })
        console.log('setup:', count.count)

        /**
         * ref 接受一个参数值并返回一个响应式且可改变的 ref 对象。ref 对象拥有一个指向内部值的单一属性 value。
         * ref常用于基本类型，reactive用于引用类型。如果ref传入对象，其实内部会自动变为reactive.
         * 当 ref 作为渲染上下文的属性返回（即在setup() 返回的对象中）并在模板中使用时，它会自动解套，无需在模板内额外书写 .value
         */
        const str = ref(2)
        console.log(str)

        //当 ref 作为 reactive 对象的 property 被访问或修改时，也将自动解套 value 值，其行为类似普通属性。
        const tempnum = ref(0)
        const state = reactive({
            tempnum
        })
        state.value = 88
        console.log(state.value)

        // computed state
        const addone = computed(() => count.count + 1)

        /**
         * computed和vue2.x版本保持一致，支持getter和setter
         *传入一个拥有 get 和 set 函数的对象，创建一个可手动修改的计算状态。
         * */
        const tempcount = ref(1)
        const addone1 = computed({
            get: () => tempcount.value + 1,
            set: (val) => {
                tempcount.value = val - 1
            }
        })
        addone1.value = 22
        console.log(tempcount.value)

        /**
         * watchEffect 传入的一个函数，并且立即执行，响应式追踪其依赖，并在其依赖变更时重新运行该函数。
         *
         */
        // 注册监听
        const tempcount1 = ref(0)
        watchEffect(() => {
            console.log(tempcount1.value)
        })

        setTimeout(() => {
            tempcount1.value++
        }, 1000)

        // method
        const add = () => {
            count.count++
        }

        //watch
        watch(
            () => count.count * 2,
            (val) => {
                console.log(`result: ${val}`)
            }
        )

        //
        let onClick = () => {
            console.log(11)
        }

        // 暴露给模板
        return { count, addone, add, str ,onClick}
    }
}
</script>