const btnMode = document.getElementById('btnMode');
const body = document.querySelector('body');

btnMode.addEventListener('click', () => {
    btnMode.classList.toggle('dark');
    body.classList.toggle('dark');
});


