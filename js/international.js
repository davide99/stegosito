/*
 *  Mr. Worldwide
 */

var currentLocale;
let basePath;

const translations = {
    "en": {
        "welcome": "Welcome to",
        "about_us_menu": "about us",
        "motto": "The music evolution.",
        "radio_text": "Our radio:",
        "mission1": "Concentrate emerging artists at only one place: <b>stegoradio</b>",
        "mission2": "Make artists manage their own musical career",
        "mission3": "Allow fans to invest in their own favorite artists",
        "vision": "We want to create a new relationship between artists, fans and music.",
        "about_us": "About us",
        "whats_steghold": "What's steghold?",
        "whats_steghold_text": "Steghold was born to give artists control over their own music and career and to actively engage fans in the growth of their own favorite artists.",
        "key_points": "Key points and objectives",
        "key_point1": "Artists independence",
        "key_point2": "Ecosystem to aggregate artists and fans",
        "key_point3": "Fans become investors",
        "cummunity_based_text": "Our community will be a cornerstone of the project: we will give you continuous updates.",
        "follow_us": "Follow us"
    },
    "it": {
        "welcome": "Benvenuto su",
        "about_us_menu": "chi siamo",
        "motto": "L'evoluzione della musica.",
        "radio_text": "La nostra radio:",
        "mission1": "Concentrare gli emergenti in un unico luogo: <b>stegoradio</b>",
        "mission2": "Permettere agli artisti di gestire personalmente la propria carriera musicale",
        "mission3": "Dare ai fan la possibilità di investire nei loro artisti preferiti",
        "vision": "Vogliamo creare un nuovo rapporto tra artisti, fan e musica.",
        "about_us": "Chi siamo",
        "whats_steghold": "Cos'è steghold?",
        "whats_steghold_text": "Steghold nasce per dare agli artisti il controllo sulla propria musica e sulla propria carriera e per far partecipare attivamente i fan alla crescita dei loro artisti preferiti.",
        "key_points": "Punti chiave e obiettivi",
        "key_point1": "Indipendenza degli artisti",
        "key_point2": "Ecosistema per unire artisti e fan",
        "key_point3": "I fan diventano investitori",
        "cummunity_based_text": "La nostra community sarà un caposaldo di questo progetto: vi daremo aggiornamenti costanti sullo sviluppo.",
        "follow_us": "Seguici su"
    },
};

document.addEventListener("DOMContentLoaded", () => {
    //Ottengo locales preferiti
    const browserLocales = navigator.languages.map((locale) => locale.split("-")[0]);
    
    if (browserLocales.indexOf("en") < browserLocales.indexOf("it")) {
        currentLocale = "en";
    } else {
        currentLocale = "it";
    }

    const numOfSlash = (window.location.pathname.match(/\//g) || []).length;
    const dirs = numOfSlash - 1;
    basePath = '../'.repeat(dirs);

    updatePage();
});

function updatePage() {
    //Cambio bandiera mostrata sul bottone
    const flag = document.getElementById("flag-img");
    const otherLocale = currentLocale === "en" ? "it" : "en";
    flag.setAttribute("src", basePath + "img/flags/" + otherLocale + ".svg");

    document
        .querySelectorAll("[data-i18n-key]")
        .forEach((element) => {
            const key = element.getAttribute("data-i18n-key");
            const translation = translations[currentLocale][key];
            element.innerHTML = translation;
        });
}

function switchLocale() {
    currentLocale = currentLocale === "en" ? "it" : "en";
    updatePage();
}
