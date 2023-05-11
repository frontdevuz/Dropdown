const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.dropdown__select');
    const caret = dropdown.querySelector('.dropdown__caret');
    const menu = dropdown.querySelector('.dropdown__menu');
    const options = dropdown.querySelectorAll('.dropdown__list');
    const selected = dropdown.querySelector('.dropdown__selected');



    select.addEventListener('click', () => {
        select.classList.toggle('dropdown__select-clicked');
        caret.classList.toggle('dropdown__caret-rotate');
        menu.classList.toggle('dropdown__menu-open')
    });




    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('dropdown__select-clicked');
            caret.classList.remove('dropdown__caret-rotate');
            menu.classList.remove('dropdown__menu-open')
            options.forEach(option => {
                option.classList.remove('dropdown__active')
            });
            option.classList.add('dropdown__active')
        })
    });



})
