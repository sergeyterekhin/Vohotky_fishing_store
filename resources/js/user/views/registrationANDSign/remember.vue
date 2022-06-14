<template>
  <main>
    <div class="Remember" v-if="this.show==1">
    <h1>Восстановление пароля</h1>
    <form class="forms" method="post">
      <div class="item">
        <div class="title">E-mail</div>
        <div class="input">
          <input type="text" v-model="email" />
        </div>
        <div class="hint" style="">
          <div>Который вы указали при регистрации</div>
        </div>
        <div class="hinterror" style="">
          <div>{{this.errors}}</div>
        </div>
      </div>
      <div class="devider"></div>
      <div class="item">
        <button :disabled="bflag" @click.prevent="submit">
          <div v-if="!bflag">Подтвердить</div>
          <ring-loader v-else :size="'14px'" :color="'white'"></ring-loader></button>
      </div>
    </form>
    </div>
    <div class="SendMessage" v-if="this.show==2">
    <h1>Восстановление пароля</h1>
    <p>Письмо для сброса пароля отправлено на вашу электронную почту</p>
    </div>
  </main>
</template>

<script>
import { mapActions } from "vuex";
import RingLoader from 'vue-spinner/src/ClipLoader.vue';
export default {
  components:{
    RingLoader
  },
  data() {
    return {
      errors:"",
      email: "",
      show: 1,
      bflag:false
    };
  },
  methods: {
    ...mapActions({
      RememberPassword: "auth/sendEmailforChangePassword",
    }),
    submit() {
      this.bflag=true
      if(this.email=="") this.errors="Заполните все поля"
      else
      this.RememberPassword({email:this.email}).then(() => {
      this.show=2;
      this.bflag=false;
      }).catch((e)=>{
        this.bflag=false;
        this.errors="Пользователь не найден"
      })
    },
  },
};
</script>