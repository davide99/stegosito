/*
 *  Mr. Worldwide
 */

var en = false;

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
    
    if (browserLocales.indexOf("en") < browserLocales.indexOf("it")){
        currentLocale = "en";
    }else{
        currentLocale = "it";
    }

    updatePage();
});

function updatePage() {
    //Cambio bandiera mostrata sul bottone
    const flag = document.getElementById("flag-img");
    const otherLocale = currentLocale === "en" ? "it" : "en";
    flag.setAttribute("src", "img/flags/" + otherLocale + ".svg");

    document
        .querySelectorAll("[data-i18n-key]")
        .forEach((element) => {
            const key = element.getAttribute("data-i18n-key");
            const translation = translations[currentLocale][key];
            element.innerText = translation;
        });
}

function switchLocale() {
    currentLocale = currentLocale === "en" ? "it" : "en";
    updatePage();
}
