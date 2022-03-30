<template>
<div class="left_col" v-show="show">
    <nav id="main_catalog">
        <ul>
			<li v-for="category in getCategories" :key=category.id>
                <router-link :to="{ 
                    name:'products', 
                    params:{ catalog:category.name_en}
                    }">{{category.name_ru}}
                    </router-link></li>
        </ul>
    </nav>
</div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'
export default {
    data(){
        return{
            show: true
        }
    },
    name: "Categorybar",
    mounted() {
       this.getajaxcategory();
    },
    computed:{
        ...mapGetters({
            getCategories: 'category/getCategories'
        }),
        getPathName(){
            return this.$route.name;
        }
    },
    methods:{
    ...mapActions({
      getajaxcategory: 'category/ajaxCategoriesFromDB'
    }),
    },
    watch:{
        getPathName(news){
            if (news=="registration" || news=="auth" || news=="remember" || news=="confirmsEmail" || news=="cart"){
                this.show=false;
                let elem = document.getElementById('content');
                elem.className="empty";
            } else if (this.show==false) {
               this.show=true;
                let elem = document.getElementById('content');
                elem.className="has_left_col"; 
            }
        }
    },
}
</script>