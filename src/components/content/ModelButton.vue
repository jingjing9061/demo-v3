<template>
    <div class="ModelButton">
        <button @click="modelOpen=true"> 弹出来模态窗口</button>

        <teleport to="body">
            <div class="modal" v-if="modelOpen">
                <div>
                    this is alert
                    我的父元素是 'body'
                    <button @click="modelOpen=false">关闭</button>
                </div>
            </div>
        </teleport>
    </div>
</template>

<script>
export default {
    name: 'ModelButton',
    data() {
        return {
            modelOpen: false
        }
    },
    setup() {}
}
</script>
<style  scoped>
.modal {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.modal div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: seashell;
    width: 300px;
    height: 300px;
    padding: 5px;
}
</style>