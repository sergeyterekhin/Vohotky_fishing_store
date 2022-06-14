<template>
  <div class="pagination">
   <button 
   v-for="curentpage in listpage"
   :key="curentpage.label"
   @click="selectpage(curentpage.label)"
   :class="{active:curentpage.label==page.page}"
   :disabled="curentpage.url==null || curentpage.label==page.page"
   >{{curentpage.label}}</button>
  </div>
</template>

<script>
export default {
  name: "Vpagination",
  props: ["page", "listpage"],
  methods: {
    selectpage(page) {
        switch(page){
           case "»": this.page.page=Number(this.page.page)+1; break;
           case "«": this.page.page=Number(this.page.page)-1; break;
           default: this.page.page=page; break;
        }
      this.$emit("changepage");
    }
  },
};
</script>