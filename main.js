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

menuItems.forEach(menuItem = menuItem.addEventListener('mouseenter', handleEnter))
menuItems.forEach(menuItem = menuItem.addEventListener('mouseleave', handleLeave))

function handleEnter(params) {
    
}

function handleLeave(params) {
    
}