window.addEventListener('load',function(){

    console.log('passe')
    let elmTitre = document.querySelector('.site-branding .site-title')
    let elmDescription = document.querySelector('.site-branding .site-description')
    let elmContenu = document.querySelector('.entry-content')

    elmTitre.classList.add('anim1')
    elmDescription.classList.add('anim3')
    elmContenu.classList.add('anim4')
})