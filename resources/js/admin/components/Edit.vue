<template>
<div class="row">
    <form class="col s12" @submit.prevent="submit">
       <div class="card ">
         <div class="card-content center">
          <span class="card-title">{{CHeader.name}}</span>
          <p>{{CHeader.desc}}</p>
        </div>
    
     <div class="card-action">
      <div class="row" v-for="inputData in Cdata" :key="inputData.id">
        <div v-if="inputData.type=='text' || inputData.type=='email' || inputData.type=='number'" class="input-field col s12">
          <input
          :type="inputData.type"
          :disabled="inputData.disabled" 
          :id="inputData.name_en" 
          v-model="otherData[inputData.name_en]"
          :class="error[inputData.name_en]!=null ? ['invalid'] : []"
          >
          <label class="active" :for="inputData.name_en">{{inputData.name_ru}}</label>
          <span v-if="error[inputData.name_en]!=null" class="helper-text" :data-error="error[inputData.name_en][0]"></span>
        </div>

          <div v-else-if="inputData.type=='file'" class="file-field input-field">
            <div class="btn light-blue darken-3">
              <span>File</span>
            <input type="file" ref='file' v-on:change="FileAdd(inputData.name_en)">
            </div>
            <div class="file-path-wrapper">
              <input :id="inputData.name_en" class="file-path"  :class="error[inputData.name_en]!=null ? ['invalid'] : []" type="text" placeholder="Загрузить изображение">
            <span v-if="error[inputData.name_en]!=null" class="helper-text" :data-error="error[inputData.name_en][0]"></span>
            </div>
            <div id="oldimage" v-if="edit"><img :src="otherData[inputData.name_en]==null ? '/storage/products/none.png' : `/storage/${image_folder}/${otherData[inputData.name_en]}`" height="200px" width="200px" alt=""></div>
          </div>

          <div v-else-if="inputData.type=='textarea'" class="input-field col s12">
          <textarea  :id="inputData.name_en"  v-model="otherData[inputData.name_en]" class="materialize-textarea" :class="error[inputData.name_en]!=null ? ['invalid'] : []"></textarea>
           <label class="active" :for="inputData.name_en">{{inputData.name_ru}}</label>
           <span v-if="error[inputData.name_en]!=null" class="helper-text" :data-error="error[inputData.name_en][0]"></span>
        </div>

        <div v-else-if="inputData.type=='drop' && droplist" class=" col s12">
            <label>{{inputData.name_ru}}</label>
        <select v-model="otherData[inputData.name_en]" class="browser-default col s12 grey lighten-3" >
        <option v-for="values in droplist" :key="values.id" :value="values.id">{{values.name_ru}}</option>
        </select>
 <label v-if="error[inputData.name_en]!=null" class="col s12" style="color:red; border-top:2px solid red">{{error[inputData.name_en][0]}}</label>
        </div>

      </div>
      <input type="submit" class="waves-effect light-blue darken-3 btn-large" value="Cохранить">
     </div>


       </div>
    </form>
  </div>
</template>
<script>
export default {
    props:['edit','CHeader','Cdata','otherData','error','droplist','image_folder'],
    methods:{
        submit(){
             this.$emit("CSave");
        },

        FileAdd(data_file){
          if(this.edit) document.querySelector("#oldimage").style.display='none';
          if(this.$refs.file[0].files.length!=0){
          this.otherData[data_file]=this.$refs.file[0].files[0].type;
           this.$emit("getfile",this.$refs.file[0].files[0]);
           }
           else  this.otherData[data_file]=null;
        }
    },
}
</script>