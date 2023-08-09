const mix = require("laravel-mix")


mix.js("resources/js/app.js","public/dist/js")
.js("resources/js/alpine.js","public/dist/js")
.sass("resources/sass/app.scss","public/dist/css")
