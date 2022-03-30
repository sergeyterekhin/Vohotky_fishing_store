<template>
<main>
<Categorylist :h2text="h2text"></Categorylist>
</main>
</template>

<script>
import Categorylist from '../../components/product_block/Categorylist.vue';
export default {
    data(){
        return{
            h2text: 'Каталог'
        }
    },
    name: "Catalog",
    components:{
       Categorylist
    }
}
</script>