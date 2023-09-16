document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-manga-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(btn) {

            const volume = btn.target.dataset.mangaButton;
            const manga = document.querySelector(`[data-manga-id=${volume}]`);
            
            hideManga();
            manga.classList.add('manga__content__list__item--is-active');
            removeActiveClass();
            btn.target.classList.add('manga__content__list__buttons__button--is-active')
        })        
    }
})


function removeActiveClass(e) {
    const button = document.querySelectorAll('[data-manga-button]');

    for (let i = 0; i < button.length; i++) {
        button[i].classList.remove('manga__content__list__buttons__button--is-active');
        
    }
}

function hideManga(e) {
    const manga = document.querySelectorAll('[data-manga-id]');

    for (let i = 0; i < manga.length; i++) {
        manga[i].classList.remove('manga__content__list__item--is-active');   
    }
}