window.addEventListener('load',function(){

    console.log('passe')
    let elmTitre = document.querySelector('.site-branding .site-title')
    let elmDescription = document.querySelector('.site-branding .site-description')
    let elmContenu = document.querySelector('.entry-content')

    elmTitre.classList.add('anim1')
    elmDescription.classList.add('anim3')
    elmContenu.classList.add('anim4')

    let burger = document.getElementsByClassName('burger');

    for (let i = 0; i < burger.length; i++) {
        burger[i].onclick = function() {
            if (this.classList.contains('burger_opened')) {
                this.classList.remove('burger_opened');
            } else {
                this.classList.add('burger_opened');
            }
        }
    }

    let trigger = document.querySelectorAll('[data-active-trigger]');
    for (let i = 0; i < trigger.length; i++) {
        trigger[i].onclick = function() {
            let menu = this.getAttribute('data-active-trigger');
            document.querySelectorAll('[data-active-group="' + menu +'"')[0].classList.toggle('active');
        }
    }
})

