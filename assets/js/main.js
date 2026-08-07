

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


// Модалка для запиту ціни  
document.addEventListener('DOMContentLoaded', () => {

    const modal = document.querySelector('.js-product-modal');
    const buttons = document.querySelectorAll('.js-product-request');

    if (!modal || !buttons.length) {
        return;
    }

    const productTitle = document.querySelector('.product__title');

    const characteristics = document.querySelectorAll(
        '.product__characteristic'
    );

    let article = '';


    // ============================================
    // ЗНАХОДИМО АРТИКУЛ
    // ============================================

    characteristics.forEach(item => {

        const name = item
            .querySelector('.product__characteristic-name');

        const value = item
            .querySelector('.product__characteristic-value');

        if (!name || !value) {
            return;
        }

        if (
            name.textContent
                .trim()
                .toLowerCase() === 'артикул'
        ) {
            article = value.textContent.trim();
        }

    });


    // ============================================
    // ЕЛЕМЕНТИ МОДАЛКИ
    // ============================================

    const modalProduct =
        modal.querySelector('.js-request-product');

    const modalArticle =
        modal.querySelector('.js-request-article');

    const productInput =
        modal.querySelector('.js-request-product-input');

    const articleInput =
        modal.querySelector('.js-request-article-input');


    // ============================================
    // ВІДКРИТТЯ
    // ============================================

    buttons.forEach(button => {

        button.addEventListener('click', () => {

            const productName = productTitle
                ? productTitle.textContent.trim()
                : '';

            modalProduct.textContent = productName;

            modalArticle.textContent =
                article
                    ? `Артикул: ${article}`
                    : '';

            productInput.value = productName;
            articleInput.value = article;


            modal.classList.add('is-open');

            document.body.classList.add('modal-open');

        });

    });


    // ============================================
    // ЗАКРИТТЯ
    // ============================================

    const closeButtons =
        modal.querySelectorAll('.js-product-modal-close');


    closeButtons.forEach(button => {

        button.addEventListener('click', () => {

            modal.classList.remove('is-open');

            document.body.classList.remove('modal-open');

        });

    });


    // ESC

    document.addEventListener('keydown', event => {

        if (
            event.key === 'Escape' &&
            modal.classList.contains('is-open')
        ) {
            modal.classList.remove('is-open');

            document.body.classList.remove('modal-open');
        }

    });

});