<template>
  <main>
    <div id="mobile_user_nav">
        <ul>
            <li><router-link to="/info/about">Об этом магазине</router-link></li>
            <li><router-link to="/history">История заказов</router-link></li>
            <li><a @click.prevent="signOut">Выйти из аккаунта</a></li>
        </ul>
    </div>
    <h1>Профиль</h1>
    <div class="devider"><p v-if="this.showRegistrationform">Данные успешно изменены!</p></div>
    <form class="forms">
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
        <button :disabled="bflag" @click.prevent="submit">
          <div v-if="!bflag">Сохранить изменения</div>
          <ring-loader v-else :size="'14px'" :color="'white'"></ring-loader></button>
      </div>
    </form>
  </main>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'
import RingLoader from 'vue-spinner/src/ClipLoader.vue';
export default {
  components:{
    RingLoader
  },
  data(){
    return{
      bflag:false,
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
     changeUserData: 'auth/changeUserData',
     signOutAction: 'auth/signOut'
    }),
  
  signOut(){
  this.signOutAction().then(()=> {
     this.$route.name!="Home" ? this.$router.replace({ name: 'Home'}) : this.$router.replace({ name: 'catalog'})
      })
  },

   submit(){
     this.bflag=true;
     this.errors="";
     this.showRegistrationform=false;
      this.changeUserData(this.form).then(() => {
        this.bflag=false;
      this.showRegistrationform=true;
      }).catch((e)=>{
        this.bflag=false;
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