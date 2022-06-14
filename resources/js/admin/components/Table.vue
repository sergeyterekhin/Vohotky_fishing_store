<template>
<div class="row">
        <div class="col s12">
      <div class="card ">
         <div class="card-content center">
          <span class="card-title">{{nametab.span}}</span>
          <p>{{nametab.sort}}</p>
        </div>
        <div class="row" style="margin-bottom:0px">
          <div v-if="sort!=null || buttons.search" class="card-action">
          
          <sort-products v-if="sort!=null" :sortoption="sort" :sortselect="selected" :haveall="has_allDropDown" @change="changeSelect"/>
          
          <div class="col s1"></div>

          <form v-if="buttons.search" action="" id="search_object">
          <div class="input-field col s5" style="top:-16px">
          <input type="text" placeholder="Поиск" v-model="search">
          </div>
          <button :disabled="search==VarSearch" style="background:none; border:none" @click.prevent="search_post">
            <i class="material-icons">search</i>
            </button>
          </form>
        </div>
        </div>
        <div v-if="loader==true || loader==null" id="content_table">
        <div class="card-action">
         <p id="warn" v-if="nametab.warn">{{nametab.warn}}</p> 
    <table  class="highlight">
        <thead>
          <tr>
              <th v-for="thName in Table_head" :key="thName.id">{{thName.head}}</th>
              <th></th>
          </tr>
        </thead>
        <tbody v-if="Data.total>0">
          <tr v-for="userOne in Data.data" :key="userOne.id">
            <td v-for="thName in Table_head" :key="thName.id" >
              <div v-if="thName.type==null">{{userOne[thName.tag]}}</div>
              <div v-else-if="thName.type=='img'"><img :src="userOne[thName.tag]==null ? '/storage/products/none.png' : `/storage/${image_folder}/${userOne[thName.tag]}`" height="100px" width="100px" alt=""></div>
              <div v-else-if="thName.type=='vhtml'" v-html="userOne[thName.tag]"></div>
              <div v-else-if="thName.type=='date'">{{dateConvert(userOne[thName.tag])}}</div>
              <div v-else-if="thName.type=='noshow'" style="color:green">[Данные можно посмотреть в редакторе]</div>
              </td>
            <td v-if="buttons">
                <div class="col">
                <button @click.prevent="lookOP(userOne.id)" v-if="buttons.look" class="waves-effect grey darken-1 btn-small"><i class="material-icons">visibility</i></button>
                <button @click.prevent="editOP(userOne.id)" v-if="buttons.edit" class="waves-effect grey darken-1 btn-small"><i class="material-icons">edit</i></button>
                <button @click.prevent="deleteOP(userOne.id)" v-if="buttons.delete" class="waves-effect grey darken-1 btn-small"><i class="material-icons">delete</i></button>
                </div>
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr style="color:red; font-weight:bold">Данные отсутствуют или искомый объект не найден</tr>
        </tbody>
      </table>
      </div>
      <div id="pagin_user" class="card-content">
      <ul class="pagination" v-if="1!=Data.last_page">
    <li :class="{'disabled':Data.current_page==1}">
      <a @click.prevent="perpage(Data.current_page-1)" href="">
        <i class="material-icons">chevron_left</i>
      </a>
    </li>
    
    <li v-for="pages in Data.links" 
    :key="pages.id" 
    :class="{'active':pages.label==Data.current_page}"
    v-show="pages.label!='«' && pages.label!='»'">
    <a @click.prevent="perpage(pages.label)" href="">{{pages.label}}</a>
    </li>

    <li :class="{'disabled':Data.current_page==Data.last_page}">
      <a @click.prevent="perpage(Data.current_page+1)" href="">
        <i class="material-icons">chevron_right</i>
      </a>
    </li>
    </ul>
    </div>
  </div>
    <div v-else>
         <div class="progress">
      <div class="indeterminate"></div>
  </div>
    </div>
      </div>
      </div>
      </div>    
</template>

<script>
import SortProducts from './Dropdown.vue';
export default {
    props:[
    'Data', //Данные таблицы
    'Table_head', //разметка для таблицы
    'nametab', // Описание и название заголовка страницы
    'buttons', // Кнопки на сайте

    'sort', // коллекция дропдаун списка
    'selected', // начальный выбор
    'has_allDropDown', // нужно ли добавить поля all

    'loader', // спинер для красоты

    'VarSearch',    // текст поискового запроса
    'image_folder' // папка для работы с фото
    ],

    components:{SortProducts},

    data(){
      return{
        search:this.VarSearch
      }
    },

    methods: {
      changeSelect(select){
        this.$emit('selected',select);
      },
      search_post(){
       this.$emit('search_data',this.search);
      },
      perpage(page){
        if(page!=this.Data.current_page && page<=this.Data.last_page && page>0)
          this.$emit("changepage",page);
      },
      deleteOP(id){
        this.$emit("deleteOption",id);
      },
      editOP(id){
        this.$emit("editOption",id);
      },
      lookOP(id){
        this.$emit("lookOption",id);
      },
      dateConvert($date){
        let d = new Date($date);
          return d.toLocaleString()
      }
    },

    watch:{
      VarSearch(){
        this.search=this.VarSearch;
      }
    }
}
</script>