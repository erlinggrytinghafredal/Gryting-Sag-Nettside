# Gryting Trelast / Gryting Sag – nettside

Enkel, statisk flersides nettside (ren HTML/CSS/JS – ingen rammeverk, ingen backend).

## Filstruktur

```
gryting-site/
├── index.html        Forside
├── tjenester.html     Produkter og tjenester
├── om-oss.html        Om oss / historikk
├── kontakt.html        Kontaktskjema, kart, adresse
├── css/style.css       Alt av design
└── js/main.js          Mobilmeny + kontaktskjema
```

## Publisere med GitHub + Cloudflare Pages

1. Opprett et nytt repository på GitHub (f.eks. `gryting-trelast`).
2. Last opp alle filene i denne mappen til repositoryet (behold mappestrukturen).
3. Gå til Cloudflare → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
4. Velg repositoryet. Du trenger ikke noe "build command" – dette er en ferdig statisk side, så la byggekommando stå tom og sett output-mappen til `/` (rot).
5. Cloudflare gir deg en gratis lenke, f.eks. `gryting-trelast.pages.dev`.
6. Vil du bruke et eget domene (f.eks. grytingtrelast.no), legger du det til under **Custom domains** i samme Pages-prosjekt.

Neste gang du vil endre noe: be meg om justeringer, last opp de nye filene til GitHub, så oppdaterer Cloudflare siden automatisk i løpet av et par minutter.

## Facebook-feeden

Feeden på forsiden bruker Facebooks offisielle "Page Plugin" – en gratis, offisiell embed som Facebook selv drifter. Den oppdateres automatisk når dere legger ut nye innlegg, og krever ingen innlogging, API-nøkkel eller vedlikehold fra dere.

To ting å være obs på:
- Feeden vises kun hvis Facebook-siden er **offentlig**.
- Noen nettlesere med streng sporingsbeskyttelse (f.eks. Brave, eller Firefox i "strict"-modus) kan blokkere innebygd Facebook-innhold. Da vises i stedet en enkel lenke til Facebook-siden, slik at ingenting går i stykker.

## Kontaktskjemaet

Skjemaet er i dag koblet opp mot en **mailto-lenke**: når noen sender skjemaet, åpnes deres eget e-postprogram med meldingen ferdig utfylt til grytre@online.no. Dette krever ingen server og virker "gratis", men brukeren må selv trykke send i sitt eget e-postprogram.

Vil dere heller at meldingen sendes direkte fra nettsiden (uten å åpne e-postprogram), er et gratis alternativ **Formspree** (formspree.io):
1. Opprett en gratis konto og et skjema der.
2. Bytt ut `action`-attributtet i `<form id="kontakt-skjema">` i `kontakt.html` med lenken Formspree gir deg.
3. Si ifra, så bygger jeg om `js/main.js` til å bruke den løsningen i stedet for mailto.

## Bilder

Siden bruker foreløpig ingen fotografier – kun typografi og en enkel årring-motiv (siden dere sager tre). Har dere bilder av sagbruket, produkter eller ferdige leveranser, sier dere bare fra, så setter jeg dem inn på riktige steder (forside, om oss, tjenester).

## Kart og adresse

Kartet bruker OpenStreetMap (gratis, ingen API-nøkkel nødvendig) med et omtrentlig punkt basert på Grytingveien/Gryting i Gjerstad kommune. Har dere et mer nøyaktig kartfeste (f.eks. fra Google Maps), kan jeg justere koordinatene.
