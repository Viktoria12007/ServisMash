import '../../node_modules/just-validate/dist/js/just-validate';
import Inputmask from "inputmask";
import Swiper from 'swiper';
import { Pagination, Mousewheel, HashNavigation, Keyboard } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', function () {
    // Swiper
    const swiper = new Swiper('.swiper', {
        modules: [Pagination, Mousewheel, HashNavigation, Keyboard],
        direction: 'vertical',
        mousewheel: false,
        keyboard: {
            enabled: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + "</span>";
            },
        },
        hashNavigation: {
            watchState: true,
        },
        breakpoints: {
            769: {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">' + '0' + (index + 1) + "</span>";
                    },
                },
            },
            1024: {
                simulateTouch: false,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">' + '0' + (index + 1) + "</span>";
                    },
                },
            }
        },
    });

    // вызов reorganizationPage при первой загрузке страницы
    reorganizationPage();

    // маска телефона
    const selector = Array.from(document.querySelectorAll('input[type="tel"]'));
    const im = new Inputmask('+7 (999) 999-99-99');
    im.mask(selector);

    // Прикрепить файл
    const fileInput = document.querySelector('input[type="file"]');
    fileInput.addEventListener('change', (e) => {
        let files = e.currentTarget.files;

        if (files.length) {
            const namesFiles = [];
            files = Array.from(files);
            files.forEach((el) => {
                namesFiles.push(el.name);
            })

            fileInput.closest('label').querySelector('span').textContent = namesFiles.join(', ');
        }
        else {
            fileInput.closest('label').querySelector('span').textContent = 'Прикрепить файл';
        }
    });

    // валидация формы
    const validateForms = function(selector, rules) {
        new window.JustValidate(selector, {
            rules: rules,
            messages: {
                name: {
                    required: 'Как к вам можно обращаться?',
                    minLength: 'Имя должно содержать минимум 2 символа',
                    maxLength: 'Имя должно содержать не более 30 символов'
                },
                company: {
                    required: 'Как называется ваша компания?',
                    minLength: 'Название компании должно содержать минимум 2 символа',
                    maxLength: 'Название компании должно содержать не более 40 символов'
                },
                message: {
                    required: 'Пожалуйста, введите сообщение',
                    minLength: 'Ваше сообщение должно содержать минимум 5 символов',
                    maxLength: 'Ваше сообщение должно содержать не более 300 символов'
                },
                tel: {
                    required: 'Укажите ваш телефон',
                    function: 'Пожалуйста, введите правильный номер'
                },
                email: {
                    required: 'Укажите ваш e-mail',
                    email: 'Пожалуйста, введите правильный e-mail',
                    minLength: 'Ваш e-mail должен содержать минимум 6 символов',
                    maxLength: 'Ваш e-mail должен содержать не более 50 символов'
                }
            },
            submitHandler: function(form) {
                const formData = new FormData(form);
                const xhr = new XMLHttpRequest();

                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            textResultModal.innerHTML = 'Отправлено!';
                        } else {
                            textResultModal.innerHTML = 'Не отправлено! Попробуйте ещё раз!';
                        }
                        overlay.classList.add('overlay_show');
                        resultModal.classList.add('result-modal_show');
                    }
                }

                xhr.open('POST', 'mail.php', true);
                xhr.send(formData);
                form.reset();
                fileInput.closest('label').querySelector('span').textContent = 'Прикрепить файл';
            }
        });
    }
    validateForms('.application-form',
        { name: {required: true, minLength: 2, maxLength: 30},
            company: {required: true, minLength: 2, maxLength: 40},
            message: {required: true, minLength: 5, maxLength: 300},
            email: {required: true, email: true, minLength: 6, maxLength: 50},
            tel: {required: true, function: () => {
                for (let value of selector) {
                    const phone = value.inputmask.unmaskedvalue();
                    return Number (phone) && phone.length === 10
                }

            }} });

    // управление модалкой
    const overlay = document.querySelector('.overlay');
    const resultModal = document.querySelector('.result-modal');
    const closeResultModal = document.querySelector('.result-modal__close');
    const textResultModal = document.querySelector('.result-modal__text');
    function closeModal() {
        resultModal.classList.remove('result-modal_show');
        overlay.classList.remove('overlay_show');
    }
    closeResultModal.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    // карта
    try {
        ymaps.ready(init);
    } catch (e) {
        console.error(e);
    }
    function init() {
        const myMap = new ymaps.Map("map", {
            center: [50.619549, 36.630674],
            zoom: 13
        });

        const myPlacemark = new ymaps.Placemark([50.619549, 36.630674], {}, {
            iconColor: '#e67008',
        });

        myMap.geoObjects.add(myPlacemark);
        myMap.controls.remove('geolocationControl');
        myMap.controls.remove('searchControl');
        myMap.controls.remove('trafficControl');
        myMap.controls.remove('typeSelector');
        myMap.controls.remove('fullscreenControl');
        // myMap.controls.remove('zoomControl');
        myMap.controls.remove('rulerControl');
        myMap.behaviors.disable(['scrollZoom']);
    };

    // мобильное меню
    const burgerButton = document.querySelector('.burger-button');
    const menuMobile = document.querySelector('.mobile-menu');
    const closeMenuMobile = document.querySelector('.mobile-menu__close-button');
    const navLinks = document.querySelectorAll('.header-list__item');
    burgerButton.addEventListener('click', () => {
        menuMobile.classList.add('show');
    });
    closeMenuMobile.addEventListener('click', () => {
        menuMobile.classList.remove('show');
    });
    navLinks.forEach((item) => {
        item.addEventListener('click', () => {
            menuMobile.classList.remove('show');
        });
    })

    // ресайз окна
    function reorganizationPage() {
        const navList = document.querySelector('.header-nav');
        const mobileMenu = document.querySelector('.mobile-menu');
        const logoLink = document.querySelector('.logo-link');
        const contactsWrap = document.querySelector('.contacts__wrap');
        const mapWrap = document.querySelector('.contacts__map-wrap');
        const contactsList = document.querySelector('.contacts-list');
        if (window.innerWidth >= 1024) {
            swiper.mousewheel.enable();
            swiper.keyboard.enable();
            logoLink.after(navList);
            contactsWrap.append(contactsList);
        } else if (window.innerWidth > 768 && window.innerWidth <= 1023) {
            swiper.mousewheel.disable();
            swiper.keyboard.disable();
            logoLink.after(navList);
            contactsWrap.append(contactsList);
        }
        else if (window.innerWidth > 430 && window.innerWidth <= 768) {
            swiper.mousewheel.disable();
            swiper.keyboard.disable();
            mobileMenu.append(navList);
            mapWrap.append(contactsList);
        }
        else {
            swiper.mousewheel.disable();
            swiper.keyboard.disable();
            mobileMenu.append(navList);
            mapWrap.append(contactsList);
        }
    }
    window.addEventListener('resize', () => {
        console.debug('resize');
        swiper.update();
        swiper.pagination.render();
        reorganizationPage();
    });
});
