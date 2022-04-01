<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="{{asset('assets/materialize/css/materialize.css')}}">
    <link rel="stylesheet" href="{{asset('assets/materialize/css/materialize.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/materialize/css/custom.css')}}">
    <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
<div id="app">
<headera-component></headera-component>
<navbar-component></navbar-component>
<router-view></router-view>
</div>
    <script src="{{ asset('./js/app.js') }}"></script>
    <script src="{{ asset('assets/materialize/js/materialize.js') }}"></script>
    <script src="{{ asset('assets/materialize/js/materialize.min.js') }}"></script>
</body>

</html>
