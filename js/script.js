RolandoScroll()
window.addEventListener('scroll', RolandoScroll)
function RolandoScroll(){
    scrollTelaButtonTop()
    scrollTelaMenu()
}
function scrollTelaMenu(){
    const barraNavegacao = document.getElementById('navBarra')

    if (scrollY > 30){
        barraNavegacao.classList.add('scroll')
    }
    else {
        barraNavegacao.classList.remove('scroll')
    }
}
function scrollTelaButtonTop(){
    const botao = document.getElementById('back-btn')
    if (scrollY > 400){
        botao.classList.remove('remove')
    }
    else {
        botao.classList.add('remove')
    }
}
function openMenu(){
    document.getElementsByTagName('body')[0].classList.add('menu-aberto')
}
function closeMenu(){
    document.getElementsByTagName('body')[0].classList.remove('menu-aberto')
}