<template>
    <div class="Teleport">
        Teleport


        <Composition></Composition>
        <ModelButton></ModelButton>

        

    </div>
</template>

<script>
import ModelButton from '../../components/content/ModelButton.vue'
import Composition from '../../components/common/Composition.vue'
export default {
    name:"Teleport",
    components:{
        Composition,
        ModelButton
    }
}
</script>
<style scoped>
    .Teleport {
        
    }
</style>