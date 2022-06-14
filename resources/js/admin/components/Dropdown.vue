<template>
<select  class="browser-default col s5" @change="OrderbySort()" v-model="select">
    <option v-if='haveall' value="all">Все</option>
    <option v-for="values in sortoption" :key="values.id" :value="values.name_en">{{values.name_ru}}</option>
  </select>
</template>

<script>
export default {
    name:"dropdown",
    data(){
        return{
            select:this.sortselect
       }
    },
    props:['sortoption','sortselect','haveall'],
    mounted() {
        M.FormSelect.init(document.querySelectorAll('.dropdown-trigger'));
    },
    methods:{
        OrderbySort(){
            this.$emit('change',this.select);
        }
    },
    watch:{
        sortselect(){
            this.select=this.sortselect;
        }
    }
}
</script>