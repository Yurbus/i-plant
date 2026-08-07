

// Сторінка каталогу
document.addEventListener('DOMContentLoaded', () => {

    const filterButton = document.querySelector('.js-catalog-filter');
    const sidebar = document.querySelector('.js-catalog-sidebar');

    if (!filterButton || !sidebar) {
        return;
    }


    filterButton.addEventListener('click', () => {

        const isOpen = sidebar.classList.toggle('is-open');

        filterButton.setAttribute(
            'aria-expanded',
            isOpen ? 'true' : 'false'
        );

        document.body.classList.toggle(
            'catalog-filter-open',
            isOpen
        );
    });

});