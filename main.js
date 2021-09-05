// import './style.css'
// import styles from './example.module.css'
// import favicon from './favicon.svg'

// console.log(favicon)

// document.querySelector('#app').innerHTML = `
//   <h1 class="${styles.title}">Hello Vite!</h1>
//   <img src="${favicon}">
//   <img src="./favicon.svg">
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `

const menuItems = document.querySelectorAll('nav ul li')
const menuBackground = document.querySelector('.menu-background')

menuItems.forEach(menuItem => menuItem.addEventListener('mouseenter', handleEnter))
menuItems.forEach(menuItem => menuItem.addEventListener('mouseleave', handleLeave))

function handleEnter() {
    const menu = this.querySelector('.menu')
    console.log(menuBackground)

    menu.classList.add('menu-enter')
    menuBackground.classList.add('next')
    setTimeout(() => menu.classList.add('menu-enter-active'), 50);
}

function handleLeave(params) {
    const menu = this.querySelector('.menu')

    menu.classList.remove('menu-enter','menu-enter-active')
   
    menu.classList.add('menu-leave')
    setTimeout(() => menu.classList.add('menu-leave-active'), 50);

    setTimeout(() => menu.classList.remove('menu-leave', 'menu-leave-active'), 200);
}