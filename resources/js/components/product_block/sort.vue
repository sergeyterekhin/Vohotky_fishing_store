<template>
 <select @change="OrderbySort()" v-model="sortType">
<option
v-for="item in sortOptions" 
:value="item.value" 
:key="item.id"
>{{item.text}}</option>
</select>
</template>

<script>

export default {
    data(){
        return{
            sortType: this.sortselect,
        }
    },
    name:"Vsort",
    props:['sortOptions','sortselect'],
    methods:{
    OrderbySort(){
    this.$emit('sort',this.sortType);
        }
    },
    watch:{
        $route(old,news){
            if (old.params.catalog!=news.params.catalog)
            this.sortType="sort";
            }
    }
}
</script>