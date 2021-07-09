<template>
    <div class="container">
       <h1>todolist</h1>
       <h3>共有{{listdata.length}}个任务，已完成{{finish.length}}项</h3>
       <h3>未完成</h3>
       <ul>
           <template v-for="(item,idx) in listdata">
                <li v-if="!item.checked" :key="idx" @click="()=>item.checked = !item.checked">
                    <div >
                        <input type="checkbox" :id="`item-${idx}`" v-model="item.checked">
                        <label class="checklabel" :for="`item-${idx}`"  v-if="!item.isEdit">{{item.name}}</label>
                        <label class="checklabel" :for="`item-${idx}`"  v-else>
                            <input type="text" v-model="editValue">
                        </label>

                    </div>
                </li>
           </template>
       </ul>
       <h3>已完成</h3>
        <ul>
           <li v-for="(item,idx) in finish" :key="idx" >
               <div>
                   <input type="checkbox" :id="`itemf-${idx}`" v-model="item.checked" disabled>
                   <label class="checklabel" :for="`itemf-${idx}`">{{item.name}}</label>
               </div>
           </li>
        </ul>
        <h3>添加新的任务</h3>
        <div>
            <label for="add"></label>
            <input id="add" type="text" placeholder="添加新的任务" v-model="value" @keydown.enter="add"/>
            <button type="button" @click="add">添加</button>
        </div>
    </div>
</template>
<script>
    import { computed, reactive, toRefs } from "vue"
    export default {
        name:'todolist',
        setup(){
            const add = ()=>{
                state.listdata.push({
                  name: state.value,
                  checked: false,
                  isEdit: false
                })
                state.value = ''
            }
            const state = reactive({
                value:'',
                editValue: '',
                listdata:[
                    { name:111, checked:false, isEdit:false },
                    { name:222, checked:false, isEdit:false },
                    { name:333, checked:false, isEdit:false },
                ],
                finish:computed(() => state.listdata.filter((item) => item.checked == true)),
                add,
            });

            // return toRefs(state)
            return {...toRefs(state)}
        }
    }

</script>
<style lang="stylus" scoped>
 ul>li {
     list-style :none

 }

</style>