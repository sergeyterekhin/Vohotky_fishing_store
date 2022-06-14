<template>
<div class="search">
    <form action="">
     <div class="input">
         <input type="text" name="search" id="search_form_input" v-model="search" placeholder="Поиск по товарам">
         </div>
     <label>
         <button @click.prevent="submit" :disabled="this.search.length<3">
         <i v-if="!bflag" class="fa-solid fa-magnifying-glass"></i>
          <ring-loader v-else :size="'14px'" :color="'white'"></ring-loader>
          </button>
          </label>
    </form>
</div>
</template>

<script>
import RingLoader from 'vue-spinner/src/ClipLoader.vue';
import router from '../../router';
export default {
    name: "Search",
    data(){
    return{
        search:"",
        bflag:false,
        }
    },
    components:{
        RingLoader
    },
    methods: {
        async submit(){
            this.bflag=true;
           await router.push('/catalog/search?search='+this.search)
            this.bflag=false;
            this.search="";
        }
    },
}
</script>