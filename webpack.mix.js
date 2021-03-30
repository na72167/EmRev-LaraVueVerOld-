const mix = require('laravel-mix')

    mix.browserSync('vuesplash.test')
    .sass('resources/sass/app.scss', 'public/css');
    .js('resources/js/app.js', 'public/js')
    .version()
