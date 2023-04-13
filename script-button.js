const mode = document.getElementById('mode-icon');

mode.addEventListener('click', () => {
    const forms = document.getElementById('formulario');
    if(mode.classList.contains('bi-moon-fill')) {
        mode.classList.remove('bi-moon-fill');
        mode.classList.add('bi-sun-fill');

        form.classList.add('dark');

        return;
    }

    mode.classList.remove('bi-sun-fill');
    form.classList.remove('dark');
    mode.classList.add('bi-moon-fill');

});