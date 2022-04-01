<template>
 <header>
  <nav>
    <div class="nav-wrapper light-blue darken-3">
      <a href="" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <a href="/" class="brand-logo center"><img width="85" height="50" src="/img/logo.png" alt=""></a>
      <ul class="right hide-on-med-and-down">
        <li><i class="material-icons">person</i></li>
        <li>Сергей Олегович</li>
        <li><a href="/"><i class="material-icons">exit_to_app</i></a></li>
      </ul>
    </div>
  </nav>
  </header>
</template>

<script>
export default {
    mounted(){
      this.sidenav = M.Sidenav.init(document.querySelectorAll('.sidenav'))
    }
}
</script>