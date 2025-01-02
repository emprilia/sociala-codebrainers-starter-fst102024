console.log('initial commit for sociala');
console.log('second sociala commit');
console.log('third sociala commit');

const hamburger = document.querySelector('.hamburger') as HTMLDivElement;
const sidebar = document.querySelector('.sidebar') as HTMLDivElement;

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active')
    sidebar.classList.toggle('sidebar--open')
})

console.log('main page');