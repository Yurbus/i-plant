// ===========================
// dropdown
// ===========================

const dropdown = document.querySelector(".js-dropdown");

const dropdownBtn = document.querySelector(".js-dropdown-btn");

const dropdownMenu = document.querySelector(".js-dropdown-menu");

let dropdownTimer;

function openDropdown() {

    clearTimeout(dropdownTimer);

    dropdownMenu.classList.add("is-open");

    dropdownBtn.setAttribute("aria-expanded", "true");

}

function closeDropdown() {

    dropdownTimer = setTimeout(() => {

        dropdownMenu.classList.remove("is-open");

        dropdownBtn.setAttribute("aria-expanded", "false");

    }, 180);

}

dropdown.addEventListener("mouseenter", openDropdown);

dropdown.addEventListener("mouseleave", closeDropdown);


function openDropdown() {

    clearTimeout(dropdownTimer);

    dropdown.classList.add("is-open");

    dropdownMenu.classList.add("is-open");

    dropdownBtn.setAttribute("aria-expanded","true");

}

function closeDropdown() {

    dropdownTimer = setTimeout(() => {

        dropdown.classList.remove("is-open");

        dropdownMenu.classList.remove("is-open");

        dropdownBtn.setAttribute("aria-expanded","false");

    },180);

}

document.addEventListener("DOMContentLoaded", () => {

    const burger = document.querySelector(".js-burger");
    const menu = document.querySelector(".js-mobile-menu");
    const closeBtn = document.querySelector(".js-menu-close");
    const overlay = document.querySelector(".mobile-overlay");

    if (!burger || !menu) return;

    function openMenu() {
        burger.classList.add("is-active");
        menu.classList.add("is-open");

        if (overlay) {
            overlay.classList.add("is-active");
        }

        document.body.classList.add("menu-open");
    }

    function closeMenu() {
        burger.classList.remove("is-active");
        menu.classList.remove("is-open");

        if (overlay) {
            overlay.classList.remove("is-active");
        }

        document.body.classList.remove("menu-open");
    }

    burger.addEventListener("click", openMenu);

    if (closeBtn) {
        closeBtn.addEventListener("click", closeMenu);
    }

    if (overlay) {
        overlay.addEventListener("click", closeMenu);
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeMenu();
        }
    });

});


// ===========================
// mobile-submenu
// ===========================

const dropdownButtons = document.querySelectorAll(".mobile-nav__button");

dropdownButtons.forEach(button => {

    button.addEventListener("click", () => {

        const item = button.parentElement;
        const submenu = item.querySelector(".mobile-submenu");

        if (!submenu) return;

        item.classList.toggle("is-open");

        if (item.classList.contains("is-open")) {
            submenu.style.display = "block";
        } else {
            submenu.style.display = "none";
        }

    });

});

// ===========================
// header__phones
// ===========================

document.addEventListener('DOMContentLoaded', () => {

    const phoneToggle = document.querySelector('.js-phone-toggle');
    const phoneDropdown = document.querySelector('.js-phone-dropdown');

    if (!phoneToggle || !phoneDropdown) {
        return;
    }


    // Відкрити / закрити
    phoneToggle.addEventListener('click', (event) => {

        event.stopPropagation();

        const isOpen = phoneDropdown.classList.toggle('is-open');

        phoneToggle.classList.toggle('is-active', isOpen);

        phoneToggle.setAttribute(
            'aria-expanded',
            isOpen ? 'true' : 'false'
        );
    });


    // Не закривати при натисканні всередині dropdown
    phoneDropdown.addEventListener('click', (event) => {
        event.stopPropagation();
    });


    // Закрити при натисканні за межами
    document.addEventListener('click', () => {

        phoneDropdown.classList.remove('is-open');
        phoneToggle.classList.remove('is-active');

        phoneToggle.setAttribute(
            'aria-expanded',
            'false'
        );
    });


    // Закрити ESC
    document.addEventListener('keydown', (event) => {

        if (event.key === 'Escape') {

            phoneDropdown.classList.remove('is-open');
            phoneToggle.classList.remove('is-active');

            phoneToggle.setAttribute(
                'aria-expanded',
                'false'
            );
        }
    });

});