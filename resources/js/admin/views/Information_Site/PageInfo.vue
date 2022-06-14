<template>
 <main>
  <v-text-area
  :DataPage="Inform"
  @CSaves="updateInform" />
</main>
</template>

<script>
import VTextArea from '../../components/EditTextArea.vue'
import { mapActions, mapGetters } from "vuex";
export default {
  components:{VTextArea},
   mounted(){
        this.InformationAJAX(this.$route.params.page);
    },
    computed:{
        ...mapGetters({
        Inform: 'information/getInformation'
        }),
        GetParams(){
            return this.$route.params.page;
        }
    },
    methods:{
    ...mapActions({
      InformationAJAX: "information/information_site",
      UpdateAJAX: "information/Update_information",
    }),

    updateInform(){
      this.UpdateAJAX({'site':this.$route.params.page,'content':this.Inform.content})
    }
  },
  watch:{
        GetParams(){
            this.InformationAJAX(this.$route.params.page);
        }
    }
}
</script>