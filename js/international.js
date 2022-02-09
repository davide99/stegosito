/*
 * Mr. Worldwide
 * 
 * Script per mostrare la versione inglese del sito
 */

const supportedLocales = ["en", "it"];

const translations = {
    "en": {
        "welcome": "Welcome to"
    },
    "it": {
        "welcome": "Benvenuto su"
    },
};

document.addEventListener("DOMContentLoaded", () => {
    //Ottengo locales preferiti
    const browserLocales = navigator.languages.map((locale) => locale.split("-")[0]);
    //Trovo quelli comuni
    const intersection = browserLocales.filter(value => supportedLocales .includes(value));

    if (intersection.length > 0)
        var currentLocale = intersection[0];
    else
        var currentLocale = "en";

    document
        .querySelectorAll("[data-i18n-key]")
        .forEach((element) => {
            const key = element.getAttribute("data-i18n-key");
            const translation = translations[currentLocale][key];
            element.innerText = translation;
        });
});
