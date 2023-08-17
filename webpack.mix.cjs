const mix = require("laravel-mix")


mix.js("resources/js/app.js","public/dist/js")
.js("resources/js/alpine.js","public/dist/js")
.sass("resources/sass/app.scss","public/dist/css")
.copyDirectory('vendor/tinymce/tinymce', 'public/js/tinymce')
    .minify("public/dist/js/app.js");
