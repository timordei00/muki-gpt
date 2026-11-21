# P0 — AUDIT OKRUŽENJA

**Cilj:** Utvrditi šta okruženje stvarno može, kako se registruje/aktivira **novi** skill `web-professional-standards`, kako čuvati rezultate kroz sesije i koja ograničenja utiču na Etapu A/B. **Ne traži, ne čitaj i ne inventariši postojeće korisnikove web skillove.** Ovo je audit, ne istraživanje web dizajna i ne QA.

**Ulaz:** `MASTER.md`, `PROJECT_STATUS_TEMPLATE.md` i postojeći `PROJECT_STATUS.md` ako postoji.

**Dubina:** praktična provjera; službenu dokumentaciju ciljane platforme provjeri samo za relevantna pravila instalacije/registracije vlastitog skilla.

## Pitanja

### [MUST] Pristup, pisanje i trajnost
1. Možeš li čitati fajlove paketa (`MASTER.md`, `phases/`)? Gdje se nalaze? Ako ne, prijavi blokator; ne izmišljaj sadržaj.
2. Možeš li stvarno kreirati i mijenjati fajlove u radnom folderu? Zabilježi stvarnu putanju i ograničenja čuvanja.
3. Kreiraj **marker-fajl unutar trajnog projektnog foldera** i evidentiraj tačnu putanju. **Ne briši marker.** Trajnost između sesija ostaje `UNCONFIRMED` dok ga zaista ne pročitaš u kasnijoj sesiji.

### [MUST] Mreža i izvori
4. Ako alat postoji, učini jedan stvarni mrežni zahtjev prema relevantnom primarnom izvoru; zabilježi ishod, ne pretpostavljaj internet.
5. Ako alat postoji, izvrši jedan upit i otvori jedan relevantan rezultat; provjeri može li se zapisati naziv, URL i datum pristupa.

### [MUST] Runtime i alati
6. Provjeri dostupnost i verzije Node.js i npm, ili zabilježi da nisu dostupni.
7. Ako je dopušteno, u privremenom folderu **izvan postojećih projekata** testiraj instaliranje jednog malog paketa ili pouzdan `dry-run`; razlikuj simulaciju od stvarne instalacije. Obriši samo svoj privremeni folder.
8. Ako je dopušteno, iz privremenog foldera pokreni jednostavan lokalni statički server, napravi jedan zahtjev i ugasi ga.
9. Provjeri prisutnost/verziju Playwrighta i browsera. Ako browser već postoji, eventualno samo otvori `about:blank`; inače **ne preuzimaj** browser. Nepokrenuto označi `NOT TESTED` s razlogom.
10. Po potrebi provjeri prisutnost git/Python/curl i značajna ograničenja sesije; izbjegni duge eksperimente.

### [MUST] Format **novog** skilla — bez inventara starih
11. Iz službene dokumentacije ciljane platforme utvrdi potrebnu strukturu/fajlove, pravila `name`/`description`/frontmattera, mjesto instalacije i način ručnog/automatskog pozivanja novog skilla. Razdvoji `SOURCED` pravila platforme i `VERIFIED` stvarno isprobanu aktivaciju; **testiranje aktivacije nije zadatak P0**. Ako službena dokumentacija nije dostupna, navedi `ASSUMPTION`/`NOT TESTED` i najmanji korak za P3.

## Izlaz

1. `environment-audit.md`:
   - Sažetak do deset linija: šta radi, šta ne radi i šta blokira Etapu A/B.
   - Tabela `Stavka | Izvršena radnja | Stvarni rezultat | PASS/FAIL/WARNING/NOT TESTED | Ograničenje/korak`.
   - Pravila formata/registracije **novog** skilla i dokazni status; **bez popisa ili čitanja postojećih web skillova**.
   - Stvarna radna putanja i može li se na njoj trajno sačuvati rad; ako nije potvrđeno, navedi ograničenje.
   - Posljedice za P4 i Etapu B; neizvršene provjere s razlogom.
2. `PROJECT_STATUS.md` prema jedinom `PROJECT_STATUS_TEMPLATE.md` (MASTER §4). Oznaka `P0 DONE` samo ako su ključni izlazi stvarno sačuvani; inače `DONE WITH GAPS` ili `BLOCKED`. Marker ostaje `UNCONFIRMED` do zasebne sesije. Sljedeća faza P1A.
3. Marker-fajl ostaje sačuvan u projektnom folderu.

## Gotovo kada
Sve stavke 1–11 imaju stvarni rezultat ili jasno dokumentovanu nemogućnost; poznata je mogućnost čuvanja i nastavka, a pravila **novog** skilla su potvrđena iz dokumentacije ili označena nepotvrđenim. Izlazni fajlovi su stvarno sačuvani. Ako nema pristupa projektnim fajlovima, ne proglašavaj P0 potpuno završenim.

## Ne radi
- **Ne traži, ne čitaj, ne upoređuj niti mijenjaj postojeće Web Colors/Web Layout/Web Animations/Web Errors ili bilo koje druge korisnikove web skillove.** Ne traži njihove putanje ni sadržaj; nisu preduvjet novom skillu.
- Ne instaliraj pakete u postojeće foldere; ne preuzimaj browsere ili velike pakete; ne registruj novi skill.
- Ne pokreći QA/Lighthouse, ne gradi demo stranice i ne otvaraj Etapu B.
- Ne radi zadatke P1A **unutar P0**; pod `POKRENI ETAPU A` prijeđi na P1A čim P0 završi, kako propisuje `MASTER.md` §2–3.
- Obriši samo privremene datoteke koje si sam stvorio za audit. **Sačuvaj projektni marker.** Ne izmišljaj naredbe/rezultate.

## Na kraju
Sačuvaj `environment-audit.md`, `PROJECT_STATUS.md` i marker. Ako je aktivna `POKRENI ETAPU A`, **odmah pređi na P1A** nakon uspješne provjere P0 izlaza, bez dodatnog pitanja ili izvještaja između faza. Ako je zatražen samo P0, završi i stani. Pri stvarnom blokatoru evidentiraj razlog i ne improviziraj nastavak. Trajnost markera među sesijama ostaje `UNCONFIRMED` dok se stvarno ponovo ne očita.
