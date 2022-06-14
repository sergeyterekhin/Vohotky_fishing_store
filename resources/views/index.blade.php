<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Интернет-магазин "В охотку"</title>
    <link rel="stylesheet" href="{{asset('assets/css/header.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/footer.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/left-bar.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/main-catalog.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/mobile.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/cart.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/modal.css')}}">
    
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/e14fdf4ee2.js" crossorigin="anonymous"></script>
    <script src="{{asset('/assets/js/mheader.js')}}"></script>
    <script src="{{asset('/assets/js/Class/TegClass.js')}}"></script>
</head>

<body>
<div id="app">
 <div id="contents">             
<header-component></header-component>

<section id="content" class="has_left_col">
    <div class="container">
        <div class="container">
            <categorybar-component></categorybar-component>
            <router-view></router-view>
            <notifications classes="notification n-light" />
</div>
</div>
</section>
</div>
<div id="footer"><footer-component></footer-component></div>
</div>
<script src="{{mix('/js/app_user.js')}}"></script>
</body>

</html>
