<template>
  <main>
    <div class="confirm_email" v-if="this.status.action==2">
    <h1>Подтверждение аккаунта</h1>
    <p>Ваша учетная запись подтверждена!</p>
    <br />
    <p>Теперь вы можете войти в свою учетную запись</p>
    </div>

    <div class="change_password" v-if="this.status.action==1">
      <h1>Смена пароля</h1>
      <form class="forms" @submit.prevent="submit" >
        <div class="item">
          <div class="title">Пароль</div>
          <div class="input">
            <input type="password" autocomplete="off" v-model="form.password" />
          </div>
           <div class="hint">
                <div>Пожалуйста, запомните ваш пароль</div>
            </div>
        </div>
        <div class="item">
          <div class="title">Повторите пароль</div>
          <div class="input">
            <input type="password" autocomplete="off" v-model="form.password2" />
          </div>
           <div class="hint">
                <div></div>
            </div>
          <div class="hinterror">
            <div>{{this.errors}}</div>
          </div>
        </div>
        <div class="devider"></div>
        <div class="item">
          <input type="submit" value="Зарегистрироваться" />
          <div class="hinterror">
            <div v-if="this.status.errors!=null">{{this.status.errors}}</div>
          </div>
        </div>
      </form>
    </div>

    <div class="change_password" v-if="this.status.action==3">
    <h1>Смена пароля</h1>
    <p>Ваш пароль изменен, теперь вы можете зайти в учетную запись под новым паролем</p>
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  created() {
   this.verforchange(this.$route.params.verf);
  },
  data(){
    return{
      errors:"",
      form:{
        password:"",
        password2:"",
      },
      status:{
        message: null,
        action: null,
        errors: null
      }
    }
  },
  methods: {
    ...mapActions({
      verforchange: "auth/confirmemail",
      changepassword:"auth/changepassword",
    }),

    submit(){
      if (this.form.password==this.form.password2 && this.form.password!=""){
      this.errors="";
      this.changepassword({
      'password': this.form.password,
      'email': this.getStatus.message
      });
      }else { this.errors="Поля не заполнены или не соответствуют друг другу"}
    }
  },
  computed: {
    ...mapGetters({
      getStatus: "auth/status",
    }),
    passwords2(){
      return this.form.password2;
    }
  },
  watch:{
    getStatus(news){
      this.status=news;
    },
    passwords2(){
      if(this.form.password!=this.form.password2)
      this.errors="Пароли не совпадают";
      else if(this.form.password==this.form.password2)
      this.errors="";
    }
  }
};
</script>