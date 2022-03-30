<template>
  <main>
    <h1>Профиль</h1>
    <div class="devider"><p v-if="this.showRegistrationform">Данные успешно изменены!</p></div>
    <form class="forms" @submit.prevent="submit">
      <div class="item">
        <div class="title">E-mail</div>
        <div class="input">
          <input type="email" :value="user.email" disabled />
        </div>
        <div class="hint">
          <div>Изменить адрес электронной почты нельзя</div>
        </div>
        <div class="hinterror">
          <div v-for="error in this.errors.email" :key="error.id">
            {{ error }}
          </div>
        </div>
      </div>
      <div class="item">
        <div class="title">Имя</div>
        <div class="input">
          <input type="text" v-model="form.name" />
        </div>
        <div class="hint">
          <div>Укажите, как к Вам обращаться</div>
        </div>
        <div class="hinterror">
          <div v-for="error in this.errors.name" :key="error.id">
            {{ error }}
          </div>
        </div>
      </div>

      <div class="item">
        <div class="title">Телефон</div>
        <div class="input">
          <input type="text" v-model="form.phone" />
        </div>
        <div class="hint">
          <div>Мы будем оповещать о готовности заказа по этому номеру</div>
        </div>
        <div class="hinterror">
          <div v-for="error in this.errors.phone" :key="error.id">
            {{ error }}
          </div>
        </div>
      </div>

      <div class="devider"></div>
      <div class="item">
        <input type="submit" value="Сохранить" />
      </div>
    </form>
  </main>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'
export default {
  data(){
    return{
      showRegistrationform:false,
      errors:"",
      form:{
        phone:"",
        name:"",
      }
    }
  },

mounted(){
this.form.name = this.user.name
this.form.phone = this.user.phone
},

  methods:{
    ...mapActions({
     changeUserData: 'auth/changeUserData'
    }),

   submit(){
     this.errors="";
     this.showRegistrationform=false;
      this.changeUserData(this.form).then(() => {
      this.showRegistrationform=true;
      }).catch((e)=>{
        this.errors=e.response.data;
      })
    }
  },

  computed:{
        ...mapGetters({
          user: 'auth/user',  
        })
    }

}
</script>