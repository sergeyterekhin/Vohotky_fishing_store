<template>
  <div>
    <ul id="slide-out" class="sidenav sidenav-fixed">
      <li class="center"><router-link to="/admin">Вернуться на главную</router-link></li>
      <ul class="collapsible">
       <li>
        <div class="collapsible-header"><b>Пользователи</b></div>
        <div class="collapsible-body">
          <ul>
            <li><a class="waves-effect" href="#!">Все</a></li>
            <li><a class="waves-effect" href="#!">Верифицированные</a></li>
            <li><a class="waves-effect" href="#!">Не Верифицированные</a></li>
          </ul>
        </div>
      </li>
      <li>
        <div class="collapsible-header"><b>Категории</b></div>
        <div class="collapsible-body">
          <ul>
            <li><a class="waves-effect" href="#!">Просмотр всех</a></li>
            <li><a class="waves-effect" href="#!">Создать новую</a></li>
          </ul>
        </div>
      </li>
      <li>
        <div class="collapsible-header"><b>Товары</b></div>
        <div class="collapsible-body">
          <ul>
            <li><a class="waves-effect" href="#!">Все</a></li>
            <li><a class="waves-effect" href="#!">Показать по категории</a></li>
            <li><a class="waves-effect" href="#!">Добавить новый</a></li>
          </ul>
        </div>
      </li>
      <li>
        <div class="collapsible-header"><b>Данные сайта</b></div>
        <div class="collapsible-body">
          <ul>
            <li><a class="waves-effect" href="#!">О компании</a></li>
            <li><a class="waves-effect" href="#!">Оплата и доставка</a></li>
            <li><a class="waves-effect" href="#!">Контакты</a></li>
          </ul>
        </div>
      </li>
      <li>
        <div class="collapsible-header"><b>Заказы</b></div>
        <div class="collapsible-body">
          <ul>
            <li><a class="waves-effect" href="#!">Новые заказы</a></li>
            <li><a class="waves-effect" href="#!">Старые заказы</a></li>
          </ul>
        </div>
      </li>  
      </ul>
    </ul>
  </div>
</template>

<script>
export default {
   mounted(){
     this.navbar=M.Collapsible.init(document.querySelectorAll('.collapsible'));
   }
}
</script>