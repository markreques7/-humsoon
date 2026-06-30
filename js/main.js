// ======================================
// HUMSON Language System
// ======================================

function changeLanguage(lang) {

    // Меняем весь текст
    document.querySelectorAll("[data-lang]").forEach(element => {

        const key = element.getAttribute("data-lang");

        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }

    });

    // Активная кнопка языка
    document.querySelectorAll(".lang-btn").forEach(button => {
        button.classList.remove("active");
    });

    document
        .querySelector(`.lang-btn[data-lang="${lang}"]`)
        .classList.add("active");

    // Сохраняем язык
    localStorage.setItem("language", lang);

}

// Клики по RU EN UZ
document.querySelectorAll(".lang-btn").forEach(button => {

    button.addEventListener("click", function () {

        changeLanguage(this.dataset.lang);

    });

});

// Загружаем сохраненный язык
window.addEventListener("DOMContentLoaded", () => {

    const savedLanguage = localStorage.getItem("language") || "ru";

    changeLanguage(savedLanguage);

});




// ===========================
// MOBILE MENU
// ===========================

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".menu-overlay");

if (menuToggle && nav && overlay) {

    menuToggle.addEventListener("click", () => {

        menuToggle.classList.toggle("active");
        nav.classList.toggle("active");
        overlay.classList.toggle("active");

    });

    // Закрытие по клику на затемнение
    overlay.addEventListener("click", () => {

        menuToggle.classList.remove("active");
        nav.classList.remove("active");
        overlay.classList.remove("active");

    });

    // Закрытие после выбора пункта
    document.querySelectorAll(".nav a").forEach(link => {

        link.addEventListener("click", () => {

            menuToggle.classList.remove("active");
            nav.classList.remove("active");
            overlay.classList.remove("active");

        });

    });

}