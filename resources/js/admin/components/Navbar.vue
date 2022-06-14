<template>
  <div>
    <ul id="slide-out" class="sidenav sidenav-fixed">
      <li class="center"><router-link to="/adminVohotky">Вернуться на главную</router-link></li>
      <ul class="collapsible">
       <li>
        <div class="collapsible-header"><b>Пользователи</b></div>
        <div class="collapsible-body">
          <ul>
            <li><router-link to="/adminVohotky/user">Все</router-link></li>
            <li><router-link to="/adminVohotky/user?sort=verificated">Верифицированные</router-link></li>
            <li><router-link to="/adminVohotky/user?sort=noverificated">Не верифицированные</router-link></li>
          </ul>
        </div>
      </li>
      <li>
        <div class="collapsible-header"><b>Категории</b></div>
        <div class="collapsible-body">
          <ul>
             <li><router-link to="/adminVohotky/category">Просмотр всех</router-link></li>
             <li><router-link to="/adminVohotky/add/category">Создать новую</router-link></li>
          </ul>
        </div>
      </li>
      <li>
        <div class="collapsible-header"><b>Товары</b></div>
        <div class="collapsible-body">
          <ul>
            <li><router-link to="/adminVohotky/products">Просмотр товаров сайта</router-link></li>
            <li><router-link to="/adminVohotky/add/products">Добавить товар</router-link></li>
          </ul>
        </div>
      </li>
      <li>
        <div class="collapsible-header"><b>Данные сайта</b></div>
        <div class="collapsible-body">
          <ul>
            <li><router-link to="/adminVohotky/info/about">О компании</router-link></li>
            <li><router-link to="/adminVohotky/info/deliveryandpay">Оплата и доставка</router-link></li>
            <li><router-link to="/adminVohotky/info/contact">Контакты</router-link></li>
          </ul>
        </div>
      </li>
      <li>
        <div class="collapsible-header"><b>Заказы</b></div>
        <div class="collapsible-body">
          <ul>
             <li><router-link to="/adminVohotky/orders?status=new">Необработанные заказы</router-link></li>
             <li><router-link to="/adminVohotky/orders?status=ready">Ожидают покупателя</router-link></li>
             <li><router-link to="/adminVohotky/orders?status=elder">Завершенные заказы</router-link></li>
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
    M.Collapsible.init(document.querySelectorAll('.collapsible'));
   }
}
</script>