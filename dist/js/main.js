var headerBtn = document.querySelector('#header-menu');
headerBtn.addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('section#menu').classList.toggle('active');
})