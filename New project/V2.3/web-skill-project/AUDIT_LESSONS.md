# AUDIT LEKCIJE — zašto postoji V2 (bez tvrdnji o testiranju)

**Izvori revizija:** prethodni V5/V6/V6.1 prompt paketi, sačuvani Claudeov DIO 1 i dvije Claudeove tekstualne revizije koje je korisnik dostavio. Ovo je istorija **instrukcijskih** propusta i predloženih korekcija, ne zapis funkcionalnih bugova izrađenog skilla. Claudeove tvrdnje o ZIP-ovima uzete su kao korisnikove dostavljene nalaze; nismo samostalno replicirali svaki njegov raniji nalaz.

| Greška / rizik iz prethodnih iteracija | Kako je V2 riješio | Gdje nezavisno provjeriti |
|---|---|---|
| Revidiran **pogrešan V5 djelimični ZIP** kao da je V6 | Eksplicitna verzija u README/MASTER/review promptu; samo jedan aktuelni ZIP | `README.md`, `PROMPT_ZA_CLAUDE_REVIEW.md` |
| Završetak P0/P1A blokira automatski `POKRENI ETAPU A` | Jasno definiran opseg zabrana faza + izuzeci na kraju P0/P1A | MASTER §2–3, P0/P1A |
| P1G delte nisu imale potrošača, specifikacije se nisu smjele mijenjati | Registar `ACCEPTED/PROPOSED` u `research/notes.md`; P3/P4 ga moraju čitati; ne može olabaviti critical floor | MASTER §2, P1G, P3, P4 |
| Radni research se kopira u finalni skill, naduvava tokene | Finalni skill ne sadrži `research/`, izvori samo mali `references/sources.md` po potrebi | MASTER §8, P3 stablo |
| Jezik i ID-evi radnog kataloga nisu određeni | Staging katalog i finalne reference na engleskom; bilješke na bosanskom | MASTER §1/8, P2 |
| FULL vs STANDARD se sukobljavaju za plaćanja/račune, CMS i regulisane tokove | Kontekstualna dosljedna eskalacija; FULL osim stvarne delegacije osjetljivog toka provjerenoj platformi | `specs/skill-spec.md` §3/3.1 |
| LIGHT prisilno popunjava 10 polja po trivijalnom riziku | LIGHT jedna kratka linija; puna polja samo gdje treba | `specs/skill-spec.md` §7.2 |
| Neke ilustracije P1B/P1C mogu kontaminirati P6/P7 evaluaciju | P1B/P1C ponovo koriste P1A briefove; svi briefovi P1A–C isključeni iz P6/P7 | P1A, P1B, P1C, Stage-B |
| Dva različita status predloška | Samo `PROJECT_STATUS_TEMPLATE.md` je autoritativan | MASTER §2/4, P0 |
| P3 očekuje reference koje niko nije napisao | Eksplicitna mapa `notes-1A..1F → references/`; P1C zadužen za `design-process` | P1C, P3 |
| Relativni put `web-skill-project/references/` zabunom postaje dvostruki prefiks | Jedini radni korijen i relativne putanje definisane centralno | MASTER §8, P2–P4 |
| Dupliranje P1B/P1E tema, P1C/P1F fontova, P1D/P1F formi | Matrica vlasništva; svaka faza istražuje samo svoj nivo | MASTER §7 |
| Nema prava na fotografije/ikone/fontove/mape | Izvor, dozvola, atribucija, stručna pitanja | P1C, P1F, skill-spec |
| Prekriven fokus, autozoom, mobile nav i WCAG kriteriji | Razdvojeni uzrok/layout (P1B) i standard/provjera (P1E); nijedan broj iz memorije kao dokaz | P1B, P1E, qa-spec |
| Prihvaćen zahtjev forme proglašen dostavljenim e-mailom | SMTP/DNS/SPF/DKIM/DMARC, potvrda prihvata ≠ dostava; NOT TESTED bez stvarne potvrde | P1D, P1F, qa-spec |
| Nejasan dokazni status i lažno rečen „0 grešaka“ nakon CRC checka | Odvojeno strukturno/semantičko/funkcionalno; izvještaj ne može dokazati buduću ispravnost | MASTER §5, `VALIDATION_REPORT_V2_3.md` |
| Previše koordinacijskih fajlova i miješanje starih revizija | Samo jedan status template, jedna mapa zahtjeva, jedan tekući izvještaj | README i sadržaj ZIP-a |

**Otvoreno (ne predstavljaj kao zatvoreno):** konkretne Work mogućnosti i aktivacija, stvarni web izvori/standardi, QA kod/skup provjera, prediktivna učinkovitost, funkcionalni rezultati i nezavisna evaluacija. Sve to dolazi u budućoj Etapi A/B, ne u trenutku pisanja V2 instrukcija.

## Pravila naslijeđena iz V2.2 (ranije V2.1 pravilo međustopova je povučeno)

- P0 **ne traži, ne čita i ne inventariše** korisnikove postojeće web skillove. Novi skill ostaje samostalan.
- `POKRENI ETAPU A` izvršava **cijelu P0–P4 automatski**, uz spremanje stvarnih izlaza/statusa po fazi; nema obaveznog međustopa, posebnog ZIP-a ili novog `nastavi` između faza.
- Ako izvršavanje stvarno bude prekinuto, `nastavi` koristi samo dostupne sačuvane rezultate. P4 završava i **ne pokreće B**.
- Temeljito P1 istraživanje i stvaranje metode za samostalno predviđanje **ranije nepoznatih rizika** ostaju prioritet.

## Naučeno u V2.3 (revizija cilja korisnika)
- Veliki istraživački prompt nije isto što i runtime skill; zahtjev je **duboko istraživanje sada**, ali **minimalno kontekstno opterećenje pri svakoj narednoj web-stranici**. Pragovi/tehnike su kandidati dok istraživanje ne potvrdi najbolji pristup.
- Odnos prema budućim greškama mora biti zatvoren: potvrđeni uzrok → propuštena leća → prenosiva prevencija → ciljana regresija → odobrenje promjene. Ne uzimaj jedan prigovor klijenta kao univerzalni zakon; kandidati stoje van distribuiranog skilla.
- QA reference `quality-gates.md` i `testing.md` moraju biti stabilne za P4. Za forme/privatnost/održavanje ne stvarati fantomske putanje: tema ima eksplicitno vlasništvo u postojećim referencama.
- Jedna autoritativna QA uputa (`TESTING_HANDOFF.md`), jasna razlika između relevantne a11y za svaki sajt i specifične za interakcije; ne eskalirati LIGHT samo zbog nedodirnute stare integracije.
