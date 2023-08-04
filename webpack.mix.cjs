let mix = require('laravel-mix');

mix
    .sass("resources/sass/app.scss","public/dist/css")
    .js('resources/js/app.js', 'public/dist/js')
    .js("resources/js/alpine.js","public/dist/js")
    .sourceMaps()
