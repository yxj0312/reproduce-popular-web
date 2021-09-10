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
// import { createApp } from 'vue'
// import App from './App.vue'
// import router from "./router"
// createApp(App).use(router).mount('#app')

const menuItems = document.querySelectorAll('nav ul li')
const menuBackground = document.querySelector('.menu-background')
const nav = document.querySelector('nav ul')
const arrow = document.querySelector('.arrow')

menuItems.forEach(menuItem => menuItem.addEventListener('mouseenter', handleEnter))
menuItems.forEach(menuItem => menuItem.addEventListener('mouseleave', handleLeave))

function handleEnter() {
    const menu = this.querySelector('.menu')

    menu.classList.add('menu-enter')
    menuBackground.classList.add('open')
    arrow.classList.add('open')
    setTimeout(() => menu.classList.add('menu-enter-active'), 50);

    const menuCoords = menu.getBoundingClientRect()
    const navCoords = nav.getBoundingClientRect()

    // menuBackground.style.setProperty('width',`${menuCoords.width}px`)
    // menuBackground.style.setProperty('height',`${menuCoords.height}px`)
    // menuBackground.style.setProperty('top',`${menuCoords.top + window.scrollY}px`)
    // menuBackground.style.setProperty('left',`${menuCoords.left}px`)

    menuBackground.style.setProperty('transform',
    `
      translate(${menuCoords.left}px,${menuCoords.top + window.scrollY}px)
      scaleX(${menuCoords.width/100})  
      scaleY(${menuCoords.height/100})
    `
    )

    arrow.style.setProperty('transform',
    `
      translate(${menuCoords.left + (menuCoords.width / 2) - 7}px,${menuCoords.top - navCoords.top}px)
      rotate(45deg) translateY(-50%)
    `
    )
}

function handleLeave(params) {
    const menu = this.querySelector('.menu')

    menu.classList.remove('menu-enter','menu-enter-active')
   
    menu.classList.add('menu-leave')
    menuBackground.classList.remove('open')
    arrow.classList.remove('open')

    setTimeout(() => menu.classList.add('menu-leave-active'), 50);

    setTimeout(() => menu.classList.remove('menu-leave', 'menu-leave-active'), 200);
}