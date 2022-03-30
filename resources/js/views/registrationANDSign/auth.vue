<template>
  <main>
    <h1>Вход на сайт</h1>
    <div class="devider"></div>
      <form class="forms" @submit.prevent="submit">
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
          <input type="submit" value="Войти на сайт" />
        </div>
      </form>
  </main>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'signin',
  
  data(){
    return {
      errors:null,
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
      this.AuthUser(this.form).then(() => {
      this.$router.replace({name: 'Home'})
      }).catch(()=>{
        this.errors="Неправильный логин или пароль";
      })

    }
  }
}
</script>