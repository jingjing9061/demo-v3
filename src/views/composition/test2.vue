<template>
    <div class="test2">
        <p>{{counter}}</p>
        <p>{{doubleCounter}}</p>

        <div ref="desc"></div>
    </div>
</template>

<script>
import { computed, watch, onMounted, onUnmounted, reactive, toRefs, ref } from 'vue'
export default {
    name: 'test2',
    setup() {
        const { counter, doubleCounter } = useCounter()

        //使用元素引用
        const desc = ref(null)
        //侦听器
        watch(counter, (val, oldval) => {
            const p = desc.value
            p.textContent = `change old${oldval}==>new${val}`
        })

        const msg2 = ref('some message')
        return { counter, doubleCounter, msg2, desc }
    }
}
function useCounter() {
    const data = reactive({
        counter: 1,
        doubleCounter: computed(() => data.counter * 2)
    })
    let timer

    onMounted(() => {
        timer = setInterval(() => {
            data.counter++
        }, 1000)
    })
    onUnmounted(() => {
        clearInterval(timer)
    })
    return toRefs(data)
}
</script>
<style  scoped>
.test2 {
}
</style>