// import { Building } from 'typings/Building';

// Commented as dir ./en_US does not exist currently
// const furtherFiles = require.context('./en_US/', true, /.*(\/index)?\.js(on)?/);
const modules = {
    appstore: {
        save: 'Lagre',
        reset: 'Tilbakestill',
        noMapkit:
            'Denne utvidelsen fungerer ikke med karttypen "MapKit" grunnet begrensninger på MapKit!',
        dev:
            'Denne utvidelsen er fortsatt under utvikling, aktivering kan medføre feil.',
        closeWarning: {
            title: 'Ulagrede endringer',
            text: 'Du har gjort endringer som ikke har blitt lagret.',
            close: 'Lukk vindu',
        },
    },
    settings: {
        name: 'Innstillinger',
        save: 'Lagre',
        discard: 'Forkast endringer',
        reset: 'Resett',
        export: 'Eksporter',
        import: 'Importer',
        resetWarning: {
            title: 'Tilbakestill endringer',
            text:
                'Vil du virkelig tilbakestille alle innstillinger til standard?',
            close: 'Avbryt',
            total: 'Alle innstillinger',
            module: 'Kun for denne modulen',
        },
        resetWarningSetting: {
            title: 'Tilbakestill innstillinger',
            text:
                'Vil du virkelig tilbakestille denne innstillingen <b>{setting}</b> for modulen <b>{module}</b> til standardverdien?',
            close: 'Avbryt',
            reset: 'Nullstille',
        },
        closeWarning: {
            title: 'Ulagrede endringer',
            text:
                'Du har gjort endringer i innstillingene som ikke er lagret. Tilbakestill, fjern dem eller lagre dem for å lukke innstillinger.',
            close: 'Lukk vindu',
        },
        changeList: {
            true: 'På',
            false: 'Av',
        },
    },
} as { [moduleId: string]: { [key: string]: unknown } };

const t = {} as { [key: string]: unknown };

// Commented as dir ./en_US does not exist currently
// furtherFiles
//     .keys()
//     .forEach(
//         key => (t[key.split('/')[1].replace(/\..*$/, '')] = furtherFiles(key))
//     );

export default {
    modules,
    ...t,
    error: {
        title: 'LSS Manager: Error',
        msg:
            'Om denne feilen skjer ofte, vennligst rapporter det til LSSM teamet!',
    },
    warnings: {
        version: {
            title: 'Feil LSS Manager versjon',
            text:
                'Kjære bruker, vi ser at du ikke bruker siste versjon av LSS Manager. Den siste vesjonen er {version}, men du har {curver}. Last inn spillet på nytt med (Ctrl + F5, på Apple enheter Command + F5), dette bør fikse feilen. Om feilen fortsetter vennligst rapporter det til LSSM teamet.',
            close: 'Lukk vindu og omlast spillet (anbefalt).',
            abort: 'Likk vindu uten å omlaste spillet',
        },
    },
    globalSettings: {
        name: 'Innstillinger',
        labelInMenu: {
            title: 'Etikett istedenfor ikon i navigasjonslinjen',
            description:
                'Viser en enkel etikett i navigasjonslinjen i stedet for LSSM-logoen.',
        },
        allowTelemetry: {
            description:
                'Styrer om LSS-Manager får samle data som hjelper oss i å utvikle utvidelsen.',
            title: 'Tillatt telemetri',
        },
        iconBg: {
            description: 'Konfigurer bakgrunnen til LSSM-ikonet',
            title: 'LSSM-Ikon Bakgrunn',
        },
        iconBgAsNavBg: {
            description:
                'Bytt farge på hele navigasjonsbaren i fargen til LSSM bakgrunnen!',
            title: 'Navigasjonsbar farge',
        },
    },
    vehicles: {
        0: {
            caption: 'Mannskapsbil',
            color: '#cc0000',
            coins: 25,
            credits: 5_000,
            minPersonnel: 1,
            maxPersonnel: 6,
        },
        1: {
            caption: 'Lett mannskapsbil',
            color: '#bb0000',
            coins: 25,
            credits: 5_000,
            minPersonnel: 1,
            maxPersonnel: 3,
        },
        2: {
            caption: 'Stigebil',
            color: '#d92626',
            coins: 30,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 3,
            special: 'Nødvendig etter at du har bygd 3 brannstasjoner.',
        },
        3: {
            caption: 'Innsatslederbil brann',
            color: '#d02525',
            coins: 25,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 3,
            special: 'Nødvendig etter at du har bygd 6 brannstasjoner.',
        },
        4: {
            caption: 'Tungredningsbil',
            color: '#ad1f1f',
            coins: 25,
            credits: 12_180,
            minPersonnel: 1,
            maxPersonnel: 4,
            special: 'Nødvendig etter at du har bygd 4 brannstasjoner.',
        },
        5: {
            caption: 'Ambulanse',
            color: '#9c691c',
            coins: 25,
            credits: 5_000,
            minPersonnel: 1,
            maxPersonnel: 3,
        },
        6: {
            caption: 'Tankbil',
            color: '#990000',
            coins: 25,
            credits: 17_300,
            minPersonnel: 1,
            maxPersonnel: 3,
            special: 'Nødvendig etter at du har bygd 7 brannstasjoner.',
        },
        7: {
            caption: 'CBRNe enhet',
            color: '#770000',
            coins: 25,
            credits: 19_200,
            minPersonnel: 1,
            maxPersonnel: 6,
            special: 'Nødvendig etter at du har bygd 11 brannstasjoner.',
            schooling: 'Krever spesialistutdanning (CBRNe-enhet)',
            shownSchooling: 'CBRNe-enhet',
        },
        8: {
            caption: 'Patruljebil',
            color: '#378b18',
            coins: 25,
            credits: 5_000,
            minPersonnel: 1,
            maxPersonnel: 2,
        },
        9: {
            caption: 'Luftambulanse',
            color: '#e67219',
            coins: 30,
            credits: 300_000,
            minPersonnel: 1,
            maxPersonnel: 1,
        },
        10: {
            caption: 'Snorkelbil',
            color: '#dc1818',
            coins: 25,
            credits: 19_000,
            minPersonnel: 1,
            maxPersonnel: 6,
            special:
                'For å kjøpe med kreditter krever det rang: Kaptein, <br> Lavere rangerte medlemmer kan kjøpe kjøretøyet for 25 mynter. <br> Quint fungerer som en stigebil og en brannbil.',
        },
        11: {
            caption: 'Politihelikopter',
            color: '#1b8f0f',
            coins: 30,
            credits: 300_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            schooling: 'Police - Police Aviation',
            shownSchooling: 'Police Aviation',
        },
        12: {
            caption: 'Pansret kjøretøy',
            color: '#1ca512',
            coins: 25,
            credits: 17_300,
            minPersonnel: 6,
            maxPersonnel: 6,
            schooling: 'Police - Våpentrening',
            shownSchooling: 'Våpentrening',
            special: 'Nødvendig etter at du har bygt 8 politistasjoner.',
        },
        13: {
            caption: 'Hundepatrulje',
            color: '#1a6d22',
            coins: 25,
            credits: 7_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            schooling: 'Politi - Hundepatrulje',
            shownSchooling: 'Hundepatrulje',
            special: 'Nødvendig etter at du har bygt 6 politistasjoner.',
        },
        14: {
            caption: 'Politimotorsykkel',
            color: '#3a6622',
            coins: 18,
            credits: 2_500,
            minPersonnel: 1,
            maxPersonnel: 1,
            schooling: 'Politi - Politimotorsykkel',
            shownSchooling: 'Politimotorsykkel',
        },
        15: {
            caption: 'Delta kjøretøy',
            color: '#253322',
            coins: 23,
            credits: 7_000,
            minPersonnel: 2,
            maxPersonnel: 4,
            special: 'Required once you have built 8 police stations',
            schooling: 'Politi - Våpentrening',
            shownSchooling: 'Våpentrening',
        },
        16: {
            caption: 'Røykdykkerbil',
            color: '#aa0000',
            coins: 25,
            credits: 11_860,
            minPersonnel: 1,
            maxPersonnel: 3,
            special: 'Nødvendig etter at du har bygd 5 brannstasjoner.',
        },
        17: {
            caption: 'Innsatsstøttebil',
            color: '#791515',
            coins: 25,
            credits: 25_500,
            minPersonnel: 1,
            maxPersonnel: 6,
            schooling: 'Krever spesialistutdanning (Skadestedsledelse) ',
            shownSchooling: 'Innsatsstøttebil',
            special: 'Nødvendig etter at du har bygd 13 brannstasjoner.',
        },
        18: {
            caption: 'Redningsbil',
            color: '#880000',
            coins: 25,
            credits: 12_180,
            minPersonnel: 1,
            maxPersonnel: 4,
            special: 'Nødvendig etter at du har bygd 4 brannstasjoner.',
        },
        19: {
            caption: 'Dykkerbil',
            color: '#225577',
            coins: 25,
            credits: 10_000,
            minPersonnel: 4,
            maxPersonnel: 5,
            special: 'Krever spesialistutdanning (Redningsdykker kurs)',
        },
        20: {
            caption: 'Lett redningsbåt',
            color: '#22776d',
            coins: 12,
            credits: 6_000,
            minPersonnel: 0,
            maxPersonnel: 0,
            special:
                'Et egnet kjøretøy trengs for å trekke tilhengeren / båthenger. (Dykkerbil, Mannskapsbil, Lett mannskapsbil)',
        },
        21: {
            caption: 'Branntankbil',
            color: '#570f0f',
            coins: 19,
            credits: 19_000,
            minPersonnel: 1,
            maxPersonnel: 6,
        },
        22: {
            caption: 'Utrykningspolitibil',
            color: '#0ead23',
            coins: 10,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            schooling: 'Politi - Utrykningspoliti',
            shownSchooling: 'Utrykningspoliti',
        },
        23: {
            caption: 'Utrykningsenhetbil',
            color: '#1f8d20',
            coins: 15,
            credits: 19_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            schooling: 'Politi - Våpentrening',
            shownSchooling: 'Våpentrening',
        },
        24: {
            caption: 'Legebil',
            color: '#9c1c1c',
            coins: 20,
            credits: 4_000,
            minPersonnel: 1,
            maxPersonnel: 1,
            schooling: 'Redning - Legevaktslege',
            shownSchooling: 'Legevaktslege',
            special: 'Krever spesialistutdanning (Legevaktslege)',
        },
        25: {
            caption: 'Innsatslederbil helse',
            color: '#997122',
            coins: 25,
            credits: 25_000,
            minPersonnel: 1,
            maxPersonnel: 1,
            special: 'Nødvendig etter at du har bygd 10 redningsstasjoner',
        },
        26: {
            caption: 'Akuttbil',
            color: '#9c1c1c',
            coins: 20,
            credits: 4_000,
            minPersonnel: 2,
            maxPersonnel: 2,
        },
        27: {
            caption: 'Ambulansemotorsykkel',
            color: '#9c1c1c',
            coins: 20,
            credits: 4_000,
            minPersonnel: 1,
            maxPersonnel: 1,
            schooling: 'Redning - Ambulansemotorsykkel',
            shownSchooling: 'Ambulansemotorsykkel',
        },
        28: {
            caption: 'Syketransport',
            color: '#9c1c1c',
            coins: 12,
            credits: 5_000,
            minPersonnel: 2,
            maxPersonnel: 2,
        },
        29: {
            caption: 'First responder bil',
            color: '#9c1c1c',
            coins: 25,
            credits: 4_000,
            minPersonnel: 1,
            maxPersonnel: 1,
        },
        30: {
            caption: 'Akutthjelper',
            color: '#9c1c1c',
            coins: 12,
            credits: 2_500,
            minPersonnel: 1,
            maxPersonnel: 1,
            schooling: 'Redning - Legevaktslege',
            shownSchooling: 'Legevaktslege',
            special: 'Krever spesialistutdanning (Legevaktslege)',
        },
        31: {
            caption: 'Intensivambulanse',
            color: '#9c1c1c',
            coins: 30,
            credits: 10_000,
            minPersonnel: 3,
            maxPersonnel: 3,
            schooling: 'Redning - Legevaktslege',
            shownSchooling: 'Legevaktslege',
            special: 'Krever spesialistutdanning (Legevaktslege)',
        },
        32: {
            caption: 'Akuttbil',
            color: '#9c1c1c',
            coins: 20,
            credits: 4_000,
            minPersonnel: 2,
            maxPersonnel: 4,
        },
        33: {
            caption: 'ATV',
            color: '#570f0f',
            coins: 5,
            credits: 5_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            wtank: 2_000,
            schooling: 'Brannstasjon - ATV',
            shownSchooling: 'ATV',
        },
        34: {
            caption: 'Branntankbil',
            color: '#570f0f',
            coins: 25,
            credits: 300_000,
            minPersonnel: 2,
            maxPersonnel: 5,
            wtank: 2_000,
            schooling: 'Brannstasjon - Skogbrann helikopterutdannin',
            shownSchooling: 'Skogbrann helikopterutdannin',
        },
    },
    buildings: {
        0: {
            caption: 'Brannstasjon',
            color: '#bb0000',
            coins: 30,
            credits: 100_000,
            extensions: [
                {
                    caption: 'Ambulanseutvidelse',
                    credits: 100_000,
                    coins: 20,
                    duration: '7 dager',
                },
                {
                    caption: 'Flyplassutvidelse',
                    credits: 100_000,
                    coins: 20,
                    duration: '7 dager',
                },
                {
                    caption: 'Vannredningsutvidelse',
                    credits: 100_000,
                    coins: 20,
                    duration: '7 dager',
                },
            ],
            levelcost: ['1. 10.000', '2. 50.000', '3.-39. 100.000'],
            maxBuildings: '5.000 sammen med små brannstasjoner',
            maxLevel: 39,
            special:
                'Fra og med den 24. brannstasjonen øker kostnadene for å bygge en ny brannstasjon i henhold til følgende formel: <code> 100.000 + 200.000 * LOG <sub> 2 </sub> (Antall eksisterende brannstasjoner - 22) </code>. Myntprisen forblir konstant!',
            startPersonnel: 10,
            startVehicles: ['Mannskapsbil', 'Lett mannskapsbil'],
            maxBuildingsFunction: (): number => 5_000,
        },
        1: {
            caption: 'Brannskole',
            color: '#992222',
            coins: 50,
            credits: 500_000,
            extensions: new Array(3).fill({
                caption: 'Flere klasserom',
                credits: 400_000,
                coins: 40,
                duration: '7 dager',
            }),
            levelcost: [],
            maxBuildings: 'Ingen grense',
            maxLevel: 0,
            special:
                'Finansministre og admins kan (utvide) brannvesenskoler ved hjelp av kreditter fra foreningens statskasse. Kurs og mestere på kurs kan starte opplæringskurs på brannskolen.',
            startPersonnel: 0,
            startVehicles: [],
        },
        2: {
            caption: 'Ambulansestasjon',
            color: '#ffa500',
            coins: 35,
            credits: 200_000,
            extensions: [
                {
                    caption: 'Intensivbehandling utvidelse',
                    credits: 200_000,
                    coins: 25,
                    duration: '7 dager',
                },
            ],
            levelcost: ['1. 10.000', '2. 50.000', '3.-39. 100.000'],
            maxBuildings: 'Ingen grense',
            maxLevel: 39,
            special: '',
            startPersonnel: 3,
            startVehicles: ['Ambulanse'],
        },
        3: {
            caption: 'Helseskole',
            color: '#8c852c',
            coins: 50,
            credits: 500_000,
            extensions: [
                ...new Array(3).fill({
                    caption: 'Flere klasserom',
                    credits: 400_000,
                    coins: 40,
                    duration: '7 dager',
                }),
            ],
            levelcost: [],
            maxBuildings: 'Ingen grense',
            maxLevel: 0,
            special:
                'Finansministre og administratorer kan (utvide) alliansepoliti skoler ved hjelp av kreditter fra alliansekassen.',
            startPersonnel: 0,
            startVehicles: [],
        },
        4: {
            caption: 'Sykehus',
            color: '#bbe944',
            coins: 25,
            credits: 200_000,
            extensions: [
                {
                    caption: 'Generell medisin',
                    credits: 10_000,
                    coins: 10,
                    duration: '7 dager',
                },
                {
                    caption: 'Generell kirurgi',
                    credits: 10_000,
                    coins: 10,
                    duration: '7 dager',
                },
                {
                    caption: 'Gynekologisk',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 dager',
                },
                {
                    caption: 'Urologi',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 dager',
                },
                {
                    caption: 'Traume',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 dager',
                },
                {
                    caption: 'Nevrologi',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 dager',
                },
                {
                    caption: 'Nevrokirurgi',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 dager',
                },
                {
                    caption: 'Kardiologi',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 dager',
                },
                {
                    caption: 'Karkirurgi',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 dager',
                },
            ],
            levelcost: ['1.-20. 19.000 Credits / 11 Coins'],
            maxBuildings: 'Ingen grense',
            maxLevel: 20,
            special:
                'Finansministre og admins kan (utvide) alliansesykehus ved hjelp av kreditter fra alliansekassen.',
            startPersonnel: 0,
            startVehicles: [],
        },
        5: {
            caption: 'Helikopterstasjon',
            color: '#e7ad2f',
            coins: 50,
            credits: 1_000_000,
            extensions: [],
            levelcost: [],
            maxBuildings: 'se spesiells',
            maxLevel: 0,
            special:
                'Opp til den 125. bygningen (av alle typer) totalt maks. Fire landingsplasser kan bygges. Etter det øker antallet med 1 hver 25. bygning (starter på 125.).',
            startPersonnel: 0,
            startVehicles: [],
            maxBuildingsFunction: (buildingsAmountTotal: number): number =>
                buildingsAmountTotal < 125
                    ? 4
                    : Math.floor(buildingsAmountTotal / 25),
        },
        6: {
            caption: 'Politistasjon',
            color: '#007700',
            coins: 35,
            credits: 100_000,
            extensions: [
                {
                    caption: 'Fengselscelle',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Dager',
                },
                ...new Array(9).fill({
                    caption: 'Flere celler',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Dager',
                }),
            ],
            levelcost: ['1. 10.000', '2. 50.000', '3.-39. 100.000'],
            maxBuildings: '1.700 sammen med små politistasjoner',
            maxLevel: 39,
            special:
                'Fra og med den 24. politistasjonen øker kostnadene for nybygging av en politistasjon i henhold til følgende formel: <code> 100.000 + 200.000 * LOG <sub> 2 </sub> (Antall eksisterende politistasjoner - 22) </code>. Myntprisen forblir konstant!',
            startPersonnel: 2,
            startVehicles: ['Patruljebil'],
            maxBuildingsFunction: (): number => 1_700,
        },
        7: {
            caption: 'Nødetatssenter',
            color: '#24c3ae',
            coins: 0,
            credits: 0,
            extensions: [],
            levelcost: [],
            maxBuildings: 'Alle 25 bygningene ett kontrollsenter',
            maxLevel: 0,
            special: 'Kontrollsenteret er administrasjonssenteret.',
            startPersonnel: 0,
            startVehicles: [],
            maxBuildingsFunction: (buildingsAmountTotal: number): number =>
                Math.floor(buildingsAmountTotal / 25) + 1,
        },
        8: {
            caption: 'Politiskole',
            color: '#225522',
            coins: 50,
            credits: 500_000,
            extensions: new Array(3).fill({
                caption: 'Flere klasserom',
                credits: 400_000,
                coins: 40,
                duration: '7 dager',
            }),
            levelcost: [],
            maxBuildings: 'Ingen grense',
            maxLevel: 0,
            special:
                'Finansministre og administratorer kan (utvide) alliansepoliti skoler ved hjelp av kreditter fra alliansekassen.',
            startPersonnel: 0,
            startVehicles: [],
        },
        13: {
            caption: 'Politiheliport',
            color: '#148423',
            coins: 50,
            credits: 1_000_000,
            extensions: [],
            levelcost: ['1. 1.000.000 kreditter / 50 mynter'],
            maxBuildings: 'se spesiells',
            maxLevel: 1,
            special:
                'Opptil 2 landingsplasser kan bygges per stasjon (utvidelsesetapper). Opp til den 125. bygningen (av alle typer) totalt maks. Fire landingsplasser kan bygges. Deretter øker antallet med 1 hver 25. bygning (begynner på 125).',
            startPersonnel: 3,
            startVehicles: [],
            maxBuildingsFunction: (buildingsAmountTotal: number): number =>
                buildingsAmountTotal < 125
                    ? 4
                    : Math.floor(buildingsAmountTotal / 25),
        },
        14: {
            caption: 'Oppstillingsplass',
            coins: 0,
            credits: 0,
            extensions: [],
            levelcost: [],
            maxBuildings: 4,
            maxLevel: 0,
            special:
                'Du kan stasjonere så mange av dine egne kjøretøy som du vil på et oppstillingsområde, medlemmer av alliansen kan bruke oppstillingsplassen. En oppstillingsplass forblir i 24 timer, men du kan når som helst tilbakestille det til 24 timer. Med Premium-konto kan du ha 8 oppstillingsplasser samtidig',
            startPersonnel: 0,
            startVehicles: [],
            maxBuildingsFunction: (): number => 4,
        },
        16: {
            caption: 'Fengsel',
            coins: 'x',
            credits: 100_000,
            extensions: [
                {
                    caption: 'Fengselscelle',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Dager',
                },
                ...new Array(9).fill({
                    caption: 'Flere celler',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Dager',
                }),
            ],
            levelcost: [],
            maxBuildings: 'Ingen grense',
            maxLevel: 0,
            special:
                'Denne bygningen kan bare bygges og utvikles av administratorer og finansministre med kreditter fra alliansekassen. De bygde fengselscellene er tilgjengelige for alle medlemmer av alliansen.',
            startPersonnel: 0,
            startVehicles: [],
        },
        18: {
            caption: 'Brannstasjon (liten)',
            color: '#aa1111',
            coins: 25,
            credits: 50_000,
            extensions: [],
            levelcost: [
                '1. 10.000',
                '2. 50.000',
                '3.-5. 100.000',
                'Konvertering til normal vakt: differansepris til normal vakt',
            ],
            maxBuildings: '5.000 sammen med brannstasjoner',
            maxLevel: 5,
            special:
                'Fra og med den 24. brannstasjonen øker kostnadene for å bygge en ny brannstasjon i henhold til følgende formel: <code> (100.000 + 200.000 * LOG <sub> 2 </sub> (Antall eksisterende brannstasjoner - 22)) / 2 </code>. maks. 1 million kreditter. Myntprisen forblir konstant!',
            startPersonnel: 10,
            startVehicles: ['Mannskapsbil', 'Lett mannskapsbil'],
            maxBuildingsFunction: (): number => 5_000,
        },
        19: {
            caption: 'Politistasjon (liten)',
            color: '#116611',
            coins: 25,
            credits: 50_000,
            extensions: [
                {
                    caption: 'Fengselscelle',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Dager',
                },
                ...new Array(1).fill({
                    caption: 'Flere celler',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Dager',
                }),
            ],
            levelcost: [
                '1. 10.000',
                '2. 50.000',
                '3.-4. 100.000',
                'Konvertering til normal vakt: differansepris til normal vakt',
            ],
            maxBuildings: '1700 med politistasjoner',
            maxLevel: 4,
            special:
                'Fra og med den 24. politistasjonen beregnes kostnadene for nybygging av en politistasjon i henhold til følgende formel: <code> (100.000 + 200.000 * LOG <sub> 2 </sub> (Antall eksisterende politistasjoner - 22 )) / 2 </code>. Myntprisen forblir konstant!',
            startPersonnel: 2,
            startVehicles: ['Patruljebil'],
            maxBuildingsFunction: (): number => 1_700,
        },
        20: {
            caption: 'Ambulansestasjon (liten)',
            color: '#eeb611',
            coins: 25,
            credits: 100_000,
            extensions: [],
            levelcost: [
                '1. 10.000',
                '2. 50.000',
                '3.-5. 100.000',
                'Konvertering til normal vakt: differansepris til normal vakt',
            ],
            maxBuildings: 'Ingen grense',
            maxLevel: 5,
            special: '',
            startPersonnel: 3,
            startVehicles: ['Ambulanse'],
        },
        21: {
            caption: 'Legevakt',
            color: '#e2e53b',
            coins: 25,
            credits: 100_000,
            extensions: [
                {
                    caption: 'Generell medisin',
                    credits: 10_000,
                    coins: 10,
                    duration: '7 dager',
                },
            ],
            levelcost: ['1. 10.000', '2. 50.000', '3.-5. 100.000'],
            maxBuildings: 'Ingen grense',
            maxLevel: 5,
            special: '',
            startPersonnel: 0,
            startVehicles: ['Ikke. Du kan kjøpe maks. 2 Kjøretøy'],
        },
        25: {
            caption: 'Brannheliport',
            color: '#148423',
            coins: 50,
            credits: 1_000_000,
            extensions: [],
            levelcost: ['1. 1.000.000 kreditter / 50 mynter'],
            maxBuildings: 'se spesiells',
            maxLevel: 1,
            special:
                'Opptil 3 landingsplasser kan bygges per stasjon (utvidelsesetapper). Opp til den 125. bygningen (av alle typer) totalt maks. Fire landingsplasser kan bygges. Deretter øker antallet med 1 hver 25. bygning (begynner på 125).',
            startPersonnel: 2,
            startVehicles: ['Skogbrannhelikopter'],
            maxBuildingsFunction: (buildingsAmountTotal: number): number =>
                buildingsAmountTotal < 125
                    ? 3
                    : Math.floor(buildingsAmountTotal / 25),
        },
    },

    buildingCategories: {
        Brann: {
            buildings: [1, 2, 3, 25],
            color: '#ff2d2d',
        },
        Helse: {
            buildings: [4, 5, 6, 11, 21],
            color: '#ffa500',
        },
        Politi: {
            buildings: [7, 8, 10, 13, 9],
            color: '#00ac00',
        },
        Annet: {
            buildings: [0, 12],
            color: '#02a18c',
        },
    },
    vehicleCategories: {
        'Firefighters': {
            vehicles: {
                'Fire trucks': [0, 1, 10, 18, 20],
                'WaterTanker': [6, 20],
                'Special vehicles': [2, 3, 4, 6, 7, 10, 16, 17, 29, 32],
                'Boats': [19],
            },
            color: '#ff2d2d',
        },
        'Rescue Vehicles': {
            vehicles: {
                'Ambulances': [5, 26, 27, 28, 30, 31],
                'HEMS': [9],
                'First Responder': [0, 1],
                'Rescue Boat': [19],
            },
            color: '#ffa500',
        },
        'Police Vehicles': {
            vehicles: {
                'Patruljebil': [8],
                'SWAT': [15, 12, 22],
                'Police Motorcycle': [14],
                'Police helicopter': [11],
                'K-9 Unit': [13],
                'Sheriff': [21],
            },
            color: '#00ac00',
        },
    },
    small_buildings: {
        0: 18,
        2: 20,
        6: 19,
    },
    vehicleBuildings: [0, 3, 5, 6, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18],
    cellBuildings: [6],
    cellExtensions: [
        '6_0',
        '6_1',
        '6_2',
        '6_3',
        '6_4',
        '6_5',
        '6_6',
        '6_7',
        '6_8',
        '6_9',
    ],
    bedBuildings: [4, 21],
    schoolBuildings: [1, 3, 8],
    dispatchCenterBuildings: [7],
    schoolings: {
        Brannstasjon: [
            {
                caption: 'CBRNe-enhet',
                duration: '3 dager',
            },
            {
                caption: 'Skadestedsledelse',
                duration: '5 dager',
            },
            {
                caption: 'ARFF-Training',
                duration: '3 dager',
            },
            {
                caption: 'Redningsdykker kurs',
                duration: '4 dager',
            },
            {
                caption: 'Sjønavigering',
                duration: '5 dager',
            },
        ],
        Politi: [
            {
                caption: 'Politihelikopterflyvning',
                duration: '7 dager',
            },
            {
                caption: 'Våpentrening',
                duration: '5 dager',
            },
            {
                caption: 'Hundepatrulje',
                duration: '5 dager',
            },
            {
                caption: 'Politimotorsykkel',
                duration: '3 dager',
            },
            {
                caption: 'Utrykningspoliti',
                duration: '3 dager',
            },
        ],
        Redning: [
            {
                caption: 'Legevaktslege',
                duration: '5 dager',
            },
            {
                caption: 'Ambulansemotorsykkel',
                duration: '3 dager',
            },
        ],
    },
    amount: 'Antall',
    search: 'Søk',
    alliance: 'Allianse',
    premiumNotice:
        'Denne utvidelsen utvider en premium funksjon av spillet, og er derfor kun tilgjengelig for premium brukere av Nødsentralspillet.',
    credits: 'Kreditter',
    close: 'Lukk',
    fullscreen: {
        expand: 'Aktiver fullskjerm',
        compress: 'Deaktiver fullskjerm',
    },
    hideTitle: 'Show heading | Hide heading',
    vehicle: 'Biler | Bil | Biler',
    building: 'Bygninger',
    station: 'Stasjoner | Stasjon | Stasjoner',
    distance: 'Distanse | Distanser',
    vehicleType: 'Kjøretøytype',
    noOptions: 'Sorry, no matching options.',
    fmsReal2Show: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        9: 9,
    },
    buildingIcons: [
        'fire',
        'rss',
        'hospital',
        'clinic-medical',
        'graduation-cap',
        'shield-alt',
        'helicopter',
        'graduation-cap',
        'helicopter',
        'building',
        '',
        'ship',
        'ship',
        'fire',
        'stethoscope',
        'shield-alt',
        'clinic-medical',
        'plane',
        'shield-alt',
    ],
    pois: [
        'Park',
        'Innsjø',
        'Sykehus',
        'Skog',
        'Busstopp',
        'Trikkestopp',
        'Togstasjon (regional)',
        'Togstasjon (regional og langdistanse)',
        'Godsstasjon',
        'Matvarebutikk (liten)',
        'Matvarebutikk (stor)',
        'Bensinstasjon',
        'Skole',
        'Museum',
        'Kjøpesenter',
        'Bilverksted',
        'Motorveiavkjøring',
        'Julemarked',
        'Lagerbygning',
        'Nattklubb',
        'Stadion',
        'Gård',
        'Kontorbygning',
        'Basseng',
        '',
        'Teater',
        'Tivoli',
        'Elv',
        'Liten flyplass (flystripe)',
        'Stor flyplass (flystripe)',
        'Flyplassterminal',
        'Bank',
        'Varehus',
        'Bro',
        'Gatekjøkken',
        'Cargohavn',
        'Gjenvinningssenter',
        'Skyskraper',
        'Cruisehavn',
        'Marina',
        'Planovergang',
        'Tunnel',
        'Kaldt varehus',
        'Kraftverk',
        'Fabrikk',
        'Skrotplass',
        'Metrostasjon',
        'Liten kjemisk lagringstank',
        'Stor kjemisk lagringstank',
        'Hotell',
        'Bar',
        'Avfallsdeponi',
        'Parkeringshus',
        'Silo',
        'Lyskryss',
        'Snekkerverksted',
        'Restaurant',
        'Sentrum',
    ],
    only_alliance_missions: [57, 74],
    transfer_missions: [306, 307],
};
