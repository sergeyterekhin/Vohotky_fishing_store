<template>
  <div class="pagination">
   <button 
   v-for="curentpage in listpage"
   :key="curentpage.label"
   @click="selectpage(curentpage.label)"
   :class="{active:curentpage.label==page}"
   :disabled="curentpage.url==null || curentpage.label==page"
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
           case "»": page=Number(this.page)+1; break;
           case "«": page=Number(this.page)-1; break;
        }
      this.$emit("changepage", page);
    }
  },
};
</script>