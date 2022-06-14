const mix = require('laravel-mix');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.js('resources/js/app.js','public/js').vue();
mix.js('resources/js/user/app_user.js', 'public/js/app_user.js').vue();
mix.js('resources/js/admin/app_admin.js', 'public/js/app_admin.js').vue();
