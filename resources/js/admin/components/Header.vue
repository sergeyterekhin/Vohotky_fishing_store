<template>
 <header>
  <nav>
    <div class="nav-wrapper light-blue darken-3">
      <a href="" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <a href="/" class="brand-logo center"><img width="85" height="50" src="/img/logo.png" alt=""></a>
      <ul class="right hide-on-med-and-down">
        <li><i class="material-icons">person</i></li>
        <li>{{user.name}} ({{role}})</li>
        <li><a href="/"><i class="material-icons">exit_to_app</i></a></li>
      </ul>
    </div>
  </nav>
  </header>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    mounted(){
        M.Sidenav.init(document.querySelectorAll('.sidenav'));
    },
    computed:{
        ...mapGetters({
          user: 'auth/user',
          role: 'auth/role'  
        })
    }
}
</script>