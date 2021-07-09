<template>

   <h3>Inject</h3>
   <p>hobby:{{hobby}}</p>

</template>
<script>
    import { inject } from 'vue'
    export default {
        name:'inject',
        setup(){
            // 父级组件中使用 provide() 函数向下传递数据；子级组件中使用 inject() 获取上层传递过来的数据。
            const hobby = inject('hobby')
            return {
                hobby
            }

        }
    }

</script>