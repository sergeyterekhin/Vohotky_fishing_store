<template>
<main>
<spin-loading v-if="flag"></spin-loading>
<div v-else v-html="this.Information.content" />
</main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import SpinLoading from '../../components/SpinSite.vue'
export default {
    data(){
        return{
            flag:true
        }
    },

    async created(){
        await this.InformationAJAX(this.$route.params.pginform);
    },
    components:{
        SpinLoading
    },
    computed:{
        ...mapGetters({
        Information: 'information/getInformation'
        }),

        GetParams(){
            return this.$route.params.pginform;
        }
    },
    methods:{
    ...mapActions({
      InformationAJAX: "information/information_site",
    })
    },

    watch:{
        GetParams(){
            this.InformationAJAX(this.$route.params.pginform);
        },
        Information(){
             this.flag=false
        }
    }
}
</script>