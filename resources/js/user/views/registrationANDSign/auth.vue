<template>
  <main>
    <h1>Вход на сайт</h1>
    <div class="devider"></div>
      <form class="forms">
        <div> Еще не зарегистрированы на сайте? <router-link to="/registration">Зарегистрируйтесь</router-link>.</div>
        <div class="item">
          <div class="title">E-mail</div>
          <div class="input">
            <input type="text" name="email" v-model="form.email" />
          </div>
          <div class="hint" style="">
            <div>Который вы указали при регистрации</div>
          </div>
          <div class="hinterror" style="">
            <div></div>
          </div>
        </div>
        <div class="item">
          <div class="title">Пароль</div>
          <div class="input">
            <input type="password" autocomplete="off" v-model="form.password"/>
          </div>
          <div class="hint">
            <div>
              <router-link to="/auth/remember">Забыли пароль?</router-link>
            </div>
          </div>
          <div class="hinterror">
            <div v-if="this.errors!=null">{{this.errors}}</div>
          </div>
        </div>
        <div class="devider"></div>
        <div class="item">
          <button :disabled="bflag" @click.prevent="submit">
          <div v-if="!bflag">Войти на сайт</div>
          <ring-loader v-else :size="'14px'" :color="'white'"></ring-loader></button>
        </div>
      </form>
  </main>
</template>

<script>
import { mapActions } from 'vuex'
import RingLoader from 'vue-spinner/src/ClipLoader.vue';
export default {
  name: 'signin',
  components:{
    RingLoader
  },
  data(){
    return {
      errors:null,
      bflag:false,
      form:{
        email: "",
        password: "",
      }
    }
  },

  methods:{

    ...mapActions({
      AuthUser: 'auth/signIn'
    }),
   
   submit(){
     this.bflag=true;
      this.AuthUser(this.form).then(() => {
       this.bflag=false; 
      this.$router.replace({name: 'Home'})
      }).catch(()=>{
        this.bflag=false;
        this.errors="Неправильный логин или пароль";
      })

    }
  }
}
</script>