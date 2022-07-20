/*
 *  Mr. Worldwide
 */

var currentLocale;

const translations = {
    "en": {
        "welcome": "Welcome to",
        "about_us_menu": "about us",
        "motto": "The music evolution.",
        "mission1": "Make artists finance and manage their own musical career",
        "mission2": "Allow fans to invest in their own favorite artists through exclusive NFTs",
        "mission3": "Move the music world onto the Algorand blockchain, taking advantage of immediate transactions and a user-friendly app",
        "vision": "We want everyone with a smartphone, who listens to or makes music, to be an NFT owner.",
        "about_us": "About us",
        "whats_steghold": "What's steghold?",
        "whats_steghold_text": "Steghold was born to allow artists to gain control over their own music and career and allow fans to actively engage in the growth and development of their own favorite artists, through an NFT social marketplace.",
        "key_points": "Key points and objectives",
        "key_point1": "Artists independence",
        "key_point2": "App to sell and buy NFTs",
        "key_point3": "Fans become investors",
        "key_point4": "Concerts and events in the metaverse",
        "key_point_text": "Everything integrated into a user-friendly ecosystem.",
        "cummunity_based_text": "Our community will be a cornerstone of the project. We take what we do very seriously and that's why we will give you continuous updates.",
        "why_algorand": "Why Algorand?",
        "why_algorand_text1": "We choose the Algorand blockchain because:",
        "why_algorand1": "It's renowned for its safety, speed and reliability",
        "why_algorand2": "It's meant to be used for DeFi services",
        "why_algorand3": "Transactions' costs are very low",
        "why_algorand4": "More than 1000 transactions per second are guaranteed",
        "why_algorand5": "Being carbon-neutral, it protects the environment",
        "why_algorand6": "It was created by an Italian",
        "why_algorand_text2": "This makes it the ideal solution to base the steghold infrastructure on.",
        "phase": "Phase",
        "phase1": "Project showcase: website & social network",
        "phase2": "Launch steghold’s app (BETA) on Apple Store and Google Play Store",
        "phase3": "Launch our first NFTs collection",
        "phase4": "App update: main features integrations",
        "phase5": "Launch first artists and their NFTs on the app",
        "phase6": "Launch of steghold’s token",
        "phase7": "steghold’s app becomes available to all artists globally",
        "phase8": "Organization of events and concerts in the metaverse",
        "follow_us": "Follow us"
    },
    "it": {
        "welcome": "Benvenuto su",
        "about_us_menu": "chi siamo",
        "motto": "L'evoluzione della musica.",
        "mission1": "Permettere agli artisti di finanziare e gestire la propria carriera musicale",
        "mission2": "Dare ai fan la possibilità di investire nei loro artisti preferiti tramite NFT esclusivi",
        "mission3": "Trasportare il mondo della musica sulla blockchain di Algorand grazie a transazioni veloci e un'app user friendly",
        "vision": "Vogliamo che chiunque abbia uno smartphone e ascolti o produca musica, sia il proprietario di un NFT.",
        "about_us": "Chi siamo",
        "whats_steghold": "Cos'è steghold?",
        "whats_steghold_text": "Steghold nasce per dare agli artisti la possibilità di avere il controllo sulla propria musica e sulla propria carriera e per dare l’opportunità ai fan di partecipare attivamente alla crescita e allo sviluppo del loro artista preferito, tramite un NFT social marketplace.",
        "key_points": "Punti chiave e obiettivi",
        "key_point1": "Indipendenza degli artisti",
        "key_point2": "App per creare vendere e comprare NFT",
        "key_point3": "I fan diventano investitori",
        "key_point4": "Concerti ed eventi sul metaverso",
        "key_point_text": "Il tutto integrato in un ecosistema user friendly.",
        "cummunity_based_text": "La nostra community sarà un caposaldo di questo progetto. Prendiamo quello che facciamo molto seriamente, è per questo che vi daremo aggiornamenti costanti sullo sviluppo.",
        "why_algorand": "Perchè Algorand?",
        "why_algorand_text1": "Abbiamo deciso di utilizzare la blockchain di Algorand perchè:",
        "why_algorand1": "È rinomata per la sua sicurezza, velocità ed affidabilità",
        "why_algorand2": "È progettata per creare servizi DeFi",
        "why_algorand3": "Le transazioni hanno un costo irrisorio",
        "why_algorand4": "Permette di effettuare più di 1000 transazioni al secondo",
        "why_algorand5": "Protegge l’ambiente perchè è una blockchain Carbon Neutral",
        "why_algorand6": "È stata creata da un italiano",
        "why_algorand_text2": "Questo la rende la soluzione ideale sulla quale basare l'infrastruttura di steghold.",
        "phase": "Fase",
        "phase1": "Presentazione del progetto: website & social network",
        "phase2": "Lancio dell’app (BETA) di steghold su Apple Store e Google Play Store",
        "phase3": "Lancio della nostra collezione NFT",
        "phase4": "Update dell’app: integrazione delle feature principali",
        "phase5": "Lancio dei primi artisti e dei loro NFT sull’app",
        "phase6": "Lancio del token di steghold",
        "phase7": "L’app di steghold diventa disponibile per gli artisti in tutto il mondo",
        "phase8": "Organizzazione di eventi e concerti nul metaverso",
        "follow_us": "Seguici su"
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
    document.getElementById("lightpaper_link").setAttribute("href", "files/lightpaper_" + currentLocale + ".pdf");
}

function switchLocale() {
    currentLocale = currentLocale === "en" ? "it" : "en";
    updatePage();
}
