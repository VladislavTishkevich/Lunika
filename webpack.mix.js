const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);
/*mix.styles(['resources/css/app.css',
            'resources/css/bootstrap.min.css',
            'resources/css/animate.css',
            'resources/css/owl.carousel.min.css',
            'resources/css/all.css',
            'resources/css/flaticon.css',
            'resources/css/themify-icons.css',
            'resources/css/magnific-popup.css',
            'resources/css/slick.css',
            'resources/css/style.css'], 'public/css/all.css');
 * 
 */