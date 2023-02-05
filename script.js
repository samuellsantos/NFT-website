
const button = document.getElementById('menu')
const $iconMenu = document.querySelector('#icon') 

var toggle = 'off'
function menu(){
    if (toggle === 'off'){
        nav.style.left = '0'
        toggle = 'on'
        $iconMenu.classList.remove('fa-bars')
        $iconMenu.classList.add('fa-x')
    }
    else if(toggle = 'on'){
        nav.style.left = '-200px'
        toggle = 'off'
        $iconMenu.classList.remove('fa-x')
        $iconMenu.classList.add('fa-bars')
    }
}


