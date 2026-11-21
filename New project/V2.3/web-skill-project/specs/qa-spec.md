# SPECIFIKACIJA QA SISTEMA — priprema u P4, izvođenje u Etapi B

> **STATUS: NORMATIVNI NACRT V2 — QA JOŠ NIJE NAPISAN NI IZVRŠEN.** Izveden iz dostupnih ranijih zahtjeva; algoritmi i verzije se biraju tek u P4 nakon provjere alata.

## Cilj
Izabrati najmanji opravdani skup alata koji će buduće poslovne sajtove provjeravati reproducibilno, bez lažnog PASS-a. P4 **piše** skriptu i testove, ali ne pokreće opsežne QA provjere. P4 prije implementacije čita samo `ACCEPTED` delte za QA u `research/notes.md` (MASTER §2), uz ograničenje da se critical floor i odgođena validacija ne mogu ublažiti. Etapa B provjerava ispravnost samog testera, uključujući namjerno pogrešne primjere.

## Preporučena struktura (P4 smije pojednostaviti)
- `scripts/check.mjs` — jedna ulazna komanda ili tanak koordinator testova.
- `tests/` — odgovarajući testovi (npr. Playwright + axe), konfiguracija i primjeri.
- `package.json` i stvarni lockfile nakon pravilne instalacije, bez izmišljanja verzija ili lockfilea.
- Konfiguracijski fajl za URL/putanju, širine i definisane pragove.
- **`TESTING_HANDOFF.md` je jedina obavezna QA uputa**: instalacija od nule, verzije, browseri, start servera, jedna komanda, minimalni smoke, izlazi, NOT TESTED, ograničenja i redoslijed Etape B. Root `README.md` unutar skilla nije potreban; može postojati samo iz opravdanog platformskog razloga.

**Ne tvrdi da je sistem reproducibilan ako potrebni dependency lockfile ili paketi nisu zaista kreirani.** Ako paketi nisu instalirani u Etapi A, ostavi precizne instrukcije za zaključavanje/verifikaciju verzija u Etapi B.

## Obavezne provjere
1. **Layout i responsive:** dokumentni i elementni horizontalni overflow, preklapanja koja blokiraju čitanje/upotrebu, sadržaj pri zoomu/reflowu, dugački naslovi, dodatne nav stavke, kartice nejednake dužine, nedostajuće slike. Ne skrivaj uzrok globalnim `overflow-x: hidden`.
2. **Viewportovi:** `320, 347, 375, 390, 503, 768, 823, 1024, 1280, 1440` px; 347, 503 i 823 namjerno su neuobičajene vrijednosti da otkriju probleme između uobičajenih breakpointa. Po potrebi dodati visine, DPR, zoom i desktop/mobile stanja.
3. **Browser:** neobrađene console/page errors, neuspjeli mrežni zahtjevi, problemi pri učitavanju bitnih resursa. Ne tretiraj svaki vanjski zahtjev automatski kao bug aplikacije.
4. **Linkovi:** interni linkovi/sidra, `tel:`/`mailto:`, CTA odredišta; dostupnost vanjskih URL-ova kao odvojenu, potencijalno ograničenu mrežnu provjeru.
5. **Interakcije:** mobilni meni (otvaranje/zatvaranje, Escape, fokus, scroll/sticky header), tastaturna navigacija, vidljiv fokus, modali i dropdowni gdje postoje.
6. **Forme:** validacija i dostupnost grešaka, prazni/neispravni unosi, uspjeh samo uz stvarnu potvrdu endpointa/servisa, otkazivanje/spor odgovor i višestruko slanje gdje je primjenjivo; **SMTP/API prihvatanje ≠ dokaz isporuke u poštanski sandučić**, pa end-to-end e-mail dostavu posebno označi `NOT TESTED` dok je korisnik/deployment ne potvrdi. Server-side sigurnost ne zaključuj iz browser testa.
7. **Pristupačnost:** axe-core i namjenske ručne provjere (tastatura, fokus, razumljivost, zoom, screen reader kada je dostupan). Automatizovan nalaz nije potpuna WCAG 2.2 AA potvrda.
8. **Sadržaj/placeholders:** `Lorem ipsum`, `TODO`, `FIXME`, `example.com`, **`[POTVRDITI: ...]`, `PREDLOŽENO`, `DEMO`**, testni emailovi, lažni telefoni/adrese, neprovjerene recenzije/certifikati i nedostajući poslovni podaci. Skripta ne može dokazati autentičnost; rezultat treba `WARNING`/ručna potvrda, ne automatsko brisanje legitimnih testnih podataka.
9. **Performanse:** slike (`width`/`height`, pravilni formati, responsive srcset), fontovi, LCP hero slike (rizik lazy loadinga), CLS, JS bundle, third-party skripte; stvarna mjerenja samo kada alat može pokrenuti test u odgovarajućim uslovima.
10. **Sigurnost prema tipu:** statički sajt, forma, CMS, autentifikacija/plaćanja prema stvarnim funkcijama; podrška za pregled tajnih ključeva, security headers, HTTPS/mixed content, dependency audit i kontrolu nepotrebnih skripti. Ne nazivaj osnovni sken dokazom potpune sigurnosti.
11. **Regresija i sadržajne promjene:** ponoviti relevantne testove nakon izmjene, testirati neuobičajene tekstove i promjene broja elemenata.

## Praktični slučajevi koje treba eksplicitno predvidjeti
- Grid/Flex overflow zbog `min-width: auto`, dugi stringovi bez `overflow-wrap`.
- Sticky header koji prekriva anchor cilj (`scroll-padding-top`/`scroll-margin-top`).
- `100vh` vs `dvh` u mobilnom browseru i mali viewport po visini.
- Ispod 16px font na inputu koji može uzrokovati mobilni auto-zoom (kontekstualno provjeriti); ne zabranjivati korisnički zoom kroz viewport meta kao „popravku“. Otvoren mobile menu, fokus i ciljna dugmad moraju ostati dostupni i pri uvećanju.
- Layout shift zbog slika bez dimenzija.
- Fokus izgubljen kada se mobilni meni otvori/zatvori ili je **zaklonjen sticky elementom**; provjeriti relevantne WCAG 2.2 zahtjeve (nivo i izuzetke potvrditi u P1E).
- Pojava zabranjenog horizontalnog scrolla tek kada je mobilni meni otvoren ili tekst povećan.

## Formati izlaza i statusi
Svaki rezultat ima `test_id`, `opis`, `status: PASS|FAIL|WARNING|NOT TESTED`, ciljanu stranicu/stanje, korišteni alat/verziju (ako je dostupna), kratak dokaz, eventualni naredni korak. Po mogućnosti strukturisan JSON i čitljiv sažetak; exit kod mora razlikovati pad obaveznih testova od upozorenja i nedostupnih testova. **Nedostupan alat = NOT TESTED, nikad PASS.** Definisati šta je blokirajući FAIL prije izvođenja testova.

## Obavezna negativna kontrola u Etapi B
Pokrenuti QA i na namjerno neispravnom mini-projektu: overflow, problem s navigacijom/fokusom, loš link i placeholder. Potvrditi da odgovarajuće provjere zaista prijavljuju greške. Ako tester to ne otkrije, popraviti tester, ne tvrditi da je pouzdan.

## Odgađanje i minimalna provjera u Etapi A
P4 smije napisati `check.mjs`, pokrenuti `node --check` i najviše jedno minimalističko pokretanje na praznoj stranici (ako je to izvedivo bez značajnog troška). Ne smije proglašavati implementaciju QA-a VERIFIED samo na osnovu sintakse ili praznog primjera. Ostale provjere ostaju NOT TESTED.

## Nezavisna evaluacija (Etapa B)
Skriveni scenariji ostaju izvan dostupnog projekta/modela dok su pre-mortem i implementacija u toku. Predviđanje se zamrzava **prije implementacije demonstracijskog projekta u P6**. P7 samo provodi ocjenjivanje prema tim ranije sačuvanim predviđanjima. Naknadna ispravka nije ranije predviđen rizik. A/B sesije su opcionalne, ne lažno simulirane u jednoj sesiji.

## Poboljšanja nakon stvarnih grešaka (kasnije, bez izvršenja u Etapi A)
- Pri otkrivenoj grešci izraditi ciljanu regresijsku provjeru i sačuvati vezu s uzrokom i poboljšanim pravilom; nije isto što i nova generička checklist stavka.
- Etapa B treba uporediti barem nekoliko istih zadataka sa skillom i bez njega (ako korisnik to izričito odobri za A/B), uključujući **kvalitet, propuštene P0/P1 probleme, lažno pozitivne rizike i stvarnu potrošnju tokena/tool callova** kada je alatima dostupna. Nije dovoljno samo brojati pronađene greške; nepotrebne procedure i tokeni su negativan rezultat.
- Za promjene buduće verzije skilla koristi primjer koji je potaknuo promjenu za dijagnostiku, ali **različit nezavisan slučaj** za provjeru da pravilo generalizuje. Ne tvrdi poboljšanje na temelju samog primjera koji je viđen pri učenju. Skrivene slučajeve P7 ne otkrivati prije vremena.

## Konfiguracija i kontrola okruženja
- Konfiguracija mora odvojiti **statičke** provjere repozitorija od provjera koje zahtijevaju live URL, Playwright browser, server ili privatni testni endpoint.
- Za svaku neprimjenjivu provjeru: `N/A` u obračunu pokrivenosti uz razlog; `NOT TESTED` za primjenjivu provjeru koja nije izvršena. Nemoj „N/A“ pretvarati u PASS.
- Definiši projektnu konfiguraciju `baseURL`, `routes`, `viewports`, `forms` (naziv/selektori/endpoint contract), `menu`, `expected-third-party` i ručne korake. Nemoj pretpostavljati da svaki sajt ima meni, formu ili backend.
- Prilikom promjene visina ili zooma zabilježi stvarno podržan način simulacije; ako alat ne može pouzdano imitirati korisničko povećanje teksta, ostavi ručni check, ne lažni PASS.
- `PASS` zahtijeva stvarno izvršenu provjeru unaprijed navedenog kriterija; `WARNING` ne maskira potvrđen P0 FAIL. Ako zavisnost ili browser nije dostupan, prijavi `NOT TESTED` i odgovarajući exit status/politiku blokiranja isporuke.
- Pozitivne i negativne fixture scenarije čuvaj odvojeno od **skrivenih** nezavisnih evaluacijskih slučajeva P7; oni nikada ne smiju postati uputstvo AI-u prije zamrzavanja predviđanja.
