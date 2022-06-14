<template>
<main>
    <div class="row">
        <div class="col s12">
      <div class="card ">
        <div class="card-content center">
          <span class="card-title">Пользователи</span>
          <p>В данном разделе можно управлять пользователями, которые зарегистрировались на сайте</p>
        </div>
        <div class="card-action center">
          <router-link to="/adminVohotky/user" class=" light-blue darken-3 btn-large" >Все</router-link>
          <router-link to="/adminVohotky/user?sort=verificated" class=" light-blue darken-3 btn-large" >Верифицированные</router-link>
          <router-link to="/adminVohotky/user?sort=noverificated" class=" light-blue darken-3 btn-large" >Не Верифицированные</router-link>
        </div>
      </div>
      <div class="card ">
        <div class="card-content center">
          <span class="card-title">Категории товаров</span>
          <p>В данном разделе можно добавить новую категорию. Данная категория появится на сайте и можно будет задать её товарам в разделе "Товары"</p>
        </div>
        <div class="card-action  center">
          <router-link to="/adminVohotky/category" class=" light-blue darken-3 btn-large" >Посмотреть все категории</router-link>
          <router-link to="/adminVohotky/add/category" class=" light-blue darken-3 btn-large" >Создать новую</router-link>
        </div>
      </div>
      <div class="card ">
        <div class="card-content center">
          <span class="card-title">Товары</span>
          <p>В данном разделе можно добавить новые товары или удалить старые. Если новому товару нужна новая категория, следует её добавить в разделе "Категории товаров"</p>
        </div>
        <div class="card-action  center">
          <router-link to="/adminVohotky/products" class=" light-blue darken-3 btn-large" >Просмотр товаров сайта</router-link>
          <router-link to="/adminVohotky/add/products" class=" light-blue darken-3 btn-large" >Добавить товар</router-link>
        </div>
      </div>
      <div class="card ">
        <div class="card-content center">
          <span class="card-title">Данные сайта</span>
          <p>В данном разделе можно изменить содержимое вкладок сайта "О компании", "Оплата и доставка", "Контакты"</p>
        </div>
        <div class="card-action  center">
         <router-link to="/adminVohotky/info/about" class=" light-blue darken-3 btn-large" >О компании</router-link>
         <router-link to="/adminVohotky/info/deliveryandpay" class=" light-blue darken-3 btn-large" >Оплата и доставка</router-link>
         <router-link to="/adminVohotky/info/contact" class=" light-blue darken-3 btn-large" >Контакты</router-link>
        </div>
      </div>
      <div class="card ">
        <div class="card-content center">
          <span class="card-title">Заказы</span>
          <p>В данном разделе можно смотреть поступившие заказы от пользователей.</p>
        </div>
        <div class="card-action  center">
           <router-link to="/adminVohotky/orders?status=new" class=" light-blue darken-3 btn-large">Необработанные заказы</router-link>
           <router-link to="/adminVohotky/orders?status=ready" class=" light-blue darken-3 btn-large">Ожидают покупателя</router-link>
           <router-link to="/adminVohotky/orders?status=elder" class=" light-blue darken-3 btn-large">Завершенные заказы</router-link>
        </div>
      </div>
    </div>
    </div>
    <router-view></router-view>
    </main>    
</template>

<script>
export default {
    
}
</script>