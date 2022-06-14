<template>
 <div style="padding-top:200px">
    <ring-loader :size="'100px'" :color="'blue'">
        </ring-loader>
        </div>   
</template>

<script>
import RingLoader from 'vue-spinner/src/ClipLoader.vue';
export default {
    name:"spin",
    components:{
    RingLoader
  },
}
</script>