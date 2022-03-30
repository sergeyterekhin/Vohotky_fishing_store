<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="{{asset('css/header.css')}}">
    <link rel="stylesheet" href="{{asset('css/footer.css')}}">
    <link rel="stylesheet" href="{{asset('css/left-bar.css')}}">
    <link rel="stylesheet" href="{{asset('css/main-catalog.css')}}">
    <link rel="stylesheet" href="{{asset('css/mobile.css')}}">
    <link rel="stylesheet" href="{{asset('css/cart.css')}}">
    <link rel="stylesheet" href="{{asset('css/modal.css')}}">
    <script src="https://kit.fontawesome.com/e14fdf4ee2.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&display=swap" rel="stylesheet">
</head>

<body>
<div id="app">             
<header-component></header-component>
<section id="content" class="has_left_col">
    <div class="container">
        <div class="container">
            <categorybar-component></categorybar-component>
            <router-view></router-view>
</div>
</div>
</section>
<footer-component></footer-component>
</div>
<script src="{{asset('./js/app.js')}}"></script>
</body>

</html>
