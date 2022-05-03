// Dark mode
// ---------------------------------
// ---------------------------------
let button_theme_mode = document.querySelector('#button-theme-mode');
let dark_mode_ico = document.querySelector('.dark-mode-ico');

button_theme_mode.addEventListener('click', () => {

     document.body.classList.toggle('dark');
     img_mode_change();

})

function img_mode_change() {
     let ico_mode_src = dark_mode_ico.getAttribute('src');
     if(ico_mode_src === 'assets/images/dark-mode.svg') {
          dark_mode_ico.setAttribute('src', 'assets/images/light-mode.svg')
     } else {
          dark_mode_ico.setAttribute('src', 'assets/images/dark-mode.svg')
     }
}