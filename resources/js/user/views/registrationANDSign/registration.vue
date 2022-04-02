<template>
<main>
  <div class="registration_form" v-if="showRegistrationform">
    <h1>Регистрация нового пользователя</h1>
    <div class="devider"></div>
      <form class="forms" @submit.prevent="submit" >
        <div>Зарегистрированы на сайте? <router-link to="/auth">Войдите</router-link>.</div>
        <div class="item">
          <div class="title">E-mail</div>
          <div class="input">
            <input type="email" v-model="form.email" />
            </div>
          <div class="hint">
                <div>На указанный адрес будет выслано письмо для подтверждения регистрации</div>
            </div>
            <div class="hinterror">
                <div v-for="error in this.errors.email" :key="error.id">{{error }}</div>
            </div>
        </div>
        <div class="item">
          <div class="title">Номер телефона</div>
          <div class="input">
            <input type="tel" v-model="form.phone" />
          </div>
           <div class="hint">
                <div>Пожалуйста, укажите ваш действующий номер</div>
            </div>
            <div class="hinterror">
                <div v-for="error in this.errors.phone" :key="error.id">{{error}} </div>
            </div>
        </div>
        <div class="item">
          <div class="title">Имя</div>
          <div class="input">
            <input type="text" v-model="form.name" />
          </div>
           <div class="hint">
                <div></div>
            </div>
            <div class="hinterror">
                <div v-for="error in this.errors.name" :key="error.id">{{error }}</div>
            </div>
        </div>
        <div class="item">
          <div class="title">Пароль</div>
          <div class="input">
            <input type="password" autocomplete="off" v-model="form.password" />
          </div>
           <div class="hint">
                <div></div>
            </div>
          <div class="hinterror">
            <div v-for="error in this.errors.password" :key="error.id">{{error }}</div>
          </div>
        </div>
        <div class="devider"></div>
        <div class="item">
          <input type="submit" value="Зарегистрироваться" />
        </div>
      </form>
    </div>
    <div class="accept" v-if="!showRegistrationform">
      <h1>Успешная регистрация</h1>
      <p>На вашу почту отправлено сообщение с ссылкой для подтверждения аккаунта</p>
    </div>
  </main>
</template>

<script>
import { mapActions} from 'vuex'
export default {
  data(){
    return{
      showRegistrationform:true,
      errors:"",
      form:{
        email: "",
        phone:"",
        name:"",
        password: "",
      }
    }
  },
  methods:{

    ...mapActions({
      RegistrationUser: 'auth/regist'
    }),
   
   submit(){
     this.errors="";
      this.RegistrationUser(this.form).then(() => {
      this.showRegistrationform=false;
      }).catch((e)=>{
        this.errors=e.response.data;
      })
    }
  }

}
</script>