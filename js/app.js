window.onload = function () {

    'use strict'

    var navbar = document.getElementById('nav');
    var brand = document.getElementById('brand');

    window.onscroll = function () {
        if (document.body.scrollTop >= 40) {
            brand.classList.add('slide');
            navbar.style.backgroundColor = '#303739';

        }

        else {
            //brand.classList.remove('slide')
            navbar.style.backgroundColor = '#34495e';

        }

    }

}