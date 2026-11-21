# P4 — PRIPREMA QA SISTEMA I ZATVARANJE ETAPE A


**Cilj:** Pripremiti reproducibilan, najmanje kompleksan QA sistem za buduće klijentske web-stranice. **Ne izvršavati stvarno testiranje skilla ni demo projekata sada.** Priprema testova nije dokaz njihove učinkovitosti.

**Ulaz:** `MASTER.md`, `PROJECT_STATUS.md`, `specs/qa-spec.md`, `specs/skill-spec.md` (critical floor), `research/notes.md` (QA izbor, pravila i **obavezno odjeljak `Usvojene delte za specs` — primijeni samo ACCEPTED delte prema MASTER §2**), stvarno sačuvani `<FINAL_SKILL_PATH>/SKILL.md` i relevantne `<FINAL_SKILL_PATH>/references/quality-gates.md`, `testing.md`; P0 ograničenja Node/Playwright/browsera i dozvole instalacije. **Stvarnu finalnu putanju** skilla preuzmi iz `PROJECT_STATUS.md`, ne pretpostavljaj sibling direktorij.

**Dubina:** praktična priprema/implementacija, bez novih dubinskih research tura. Ako biblioteka ili konfiguracija ovisi o aktuelnoj verziji, provjeri službenu dokumentaciju prije pisanja kompatibilnog koda. Izaberi minimalni set umjesto gomile alata.

## Plan i struktura [MUST]
1. **Jedna komanda:** napravi ulaznu `scripts/check.mjs` ili tanak wrapper i odgovarajuće `npm` skripte koje će korisnik poslije pokretati jednim dokumentovanim pozivom. Putanja/URL se određuje konfiguracijom/CLI, ne hardkodiraj samo jedan demo sajt.
2. **Konfiguracija:** jedan fajl s URL-om ili lokalnim start komandama, širinama, visinama, rutama, opcionalnim komponentama/formama, tolerancijama/pragovima i statusom očekivanih integracija. Granice bez osnove ostaju dokumentovani kandidati, ne lažni standardi.
3. **Zavisnosti:** `package.json` s provjerenim nazivima paketa i dokumentovanim verzijama/kompatibilnošću, koristeći minimalne Playwright/axe mogućnosti i dodatke samo po opravdanju. Lockfile napravi samo ako je **stvarno** nastao iz podržane instalacije; ne izmišljaj ga ručno. Ako instalacija nije dopuštena ili skupa, napiši korak instalacije za Etapu B i `NOT TESTED`.
4. **Browseri:** zasebno dokumentuj instalaciju potrebnih Playwright browsera, podršku i ograničenja. Ne preuzimaj browsere u ovoj fazi.
5. **Izvještaj:** čitljiv sažetak + strukturisani JSON sa `test_id, cilj, stanje, metoda, status, dokaz, alat/verzija, razlog ako NOT TESTED, naredni korak`; exit code mora razlikovati dokazani kritični FAIL od upozorenja i neizvršenih provjera. Definiši politiku kada neizvršena obavezna kapija blokira isporuku.
6. **Jedini QA handoff:** sve upute za čistu instalaciju, start lokalnog sajta, jednu komandu za sve i minimalnu smoke komandu, konfiguraciju, česte probleme, interpretaciju i ograničenja upiši u `TESTING_HANDOFF.md`. Nema obaveznog root `README.md` unutar finalnog skilla; opcioni README kreiraj samo iz stvarnog platformskog razloga, ne kao dupli autoritet.

## Obavezne klase provjera [MUST]
1. **Responsive/overflow:** širi i niži viewport, dokument i elementi; namjerni vs nenamjerni horizontalni scroll; stvarni sadržaj, dugi stringovi, kartice, meniji, sticky/sidra, forme u grešci, nedostajuća slika. `scrollWidth` sam nije dokaz da je svaka komponenta vizuelno dostupna.
2. **Namjerne širine:** `320, 347, 375, 390, 503, 768, 823, 1024, 1280, 1440` px; 347/503/823 su namjerno između tipičnih breakpointa. Visine i browser zoom/text spacing se testiraju gdje alat to može; inače ručna provjera/NOT TESTED.
3. **Konzola, resursi i mreža:** pageerror/console error/failed request uz razlikovanje app greške, vanjskog rate limita, testnog okruženja i očekivanih blokada.
4. **Linkovi:** interni linkovi/sidra, CTA, `tel:`/`mailto:`, neispravna interna odredišta; vanjske URL-ove tretiraj kao odvojenu potencijalno nestabilnu mrežnu provjeru.
5. **Navigacija/tastatura:** mobilni meni otvoren/zatvoren, klik/touch, Escape, fokus/povrat fokusa, sticky/sidro; element koji je vidljiv ali nedostupan tastaturom može biti P0.
6. **Forme:** klijentska validacija/poruke/aria greške, prazno/neispravno, pending, dvostruko slanje, timeout/offline/servis fail, success samo uz stvaran potvrđeni odgovor. Mock pozitivnog odgovora dokazuje samo UI behavior, ne stvarnu isporuku na server.
7. **Accessibility:** axe-core, semantika, kontrast gdje detektabilno; jasno izdvoj ručnu provjeru reflowa, čitača ekrana, kvalitetnih opisa, fokusnih tokova (posebno fokus zaklonjen sticky headerom), veličine ciljnih elemenata, otvorenog menija pri zoomu, reduced motion. Ne obećavaj potpun WCAG audit.
8. **Placeholders i autentičnost:** pretraži Lorem ipsum/TODO/FIXME/example.com, **`[POTVRDITI: ...]` / `PREDLOŽENO` / `DEMO`**, dummy email i telefoni, neprovjerene reference/certifikate; nemoj automatski tvrditi da je neobičan poslovni podatak lažan. `WARNING` + potvrda klijenta kad autentičnost nije utvrdiva.
9. **Performanse:** statički indikatori image dimension/font/loading/JS/third-party; stvarna LCP/INP/CLS mjerenja samo uz ispravno pokrenute alate i navedene uslove (Etapa B).
10. **Sigurnost:** statički pregled secrets, mixed content, HTTPS i headers na stvarnom deploymentu, dependency audit, form endpoint; ne predstavljaj alat kao pen-test ili garanciju sigurnosti.
11. **Regresija:** ponovni test zahvaćenih tokova nakon izmjene, negativne kontrole u Etapi B. Predvidi i način da se **novootkrivena potvrđena klasa greške** kasnije veže za malu regresijsku provjeru (test ostaje `NOT TESTED` dok nije stvarno izvršen). Ne kreiraj nove demo briefove, skrivene evaluacije ili rezultate sada.

## Negativne kontrole [MUST — pripremiti, ne izvršavati]
Pripremi plan/fixture za *namjerno neispravnu* stranicu: poznat overflow, nedostupan mobile menu, pogrešan interni link, placeholder, opciono lažni uspjeh forme. U Etapi B QA mora prijaviti odgovarajuće probleme; ako ne prijavi, popraviti QA sistem. Napravi i jednostavnu pozitivnu kontrolu da isključi stalne lažne FAIL-ove.

## Dozvoljene minimalne provjere u Etapi A
- `node --check` skripte **ako Node postoji**; status `PASS` važi samo za sintaksu.
- Najviše jedno minimalno pokretanje na praznoj stranici ako je izvedivo bez značajne instalacije. Prazna stranica **ne dokazuje** correctness/integracije/axe/overflow; većina QA ostaje `NOT TESTED`.
- Nema browser downloada, demo projekata, Lighthouse, end-to-end QA i A/B evaluacije sada.

## Izlaz
- `<FINAL_SKILL_PATH>/scripts/check.mjs`, `<FINAL_SKILL_PATH>/tests/` i druge **stvarno korištene** skripte; config; `package.json` i pravi lockfile samo ako instalacija zaista izvršena; **samodovoljan `TESTING_HANDOFF.md`** kao autoritativne QA upute.
- `PROJECT_STATUS.md`: P4 DONE ili DONE WITH GAPS, precizna lista NOT TESTED i stvarno potvrđenih sintaksnih provjera.
- Završni izvještaj Etape A: fajlovi, dobijene arhitektonske odluke, neprovjereno, eventualni blokatori i precizan prenos u Etapu B.

## Gotovo kada
Svi potrebni fajlovi su fizički sačuvani; struktura QA-a odgovara specifikaciji; skripta nema očiglednih lažnih PASS izlaza zbog nedostupnog alata; smoke/sintaksa se navode samo ako su stvarno izvršeni; `TESTING_HANDOFF.md` sadrži jasnu sljedeću proceduru. Ako zavisnosti/browsers nisu dostupni, status **testova** ostaje `NOT TESTED`; P4 može biti `DONE WITH GAPS` ako nije moguće kompletno pripremiti kod ili dokumentovati reproducibilnu instalaciju. Ne provlači `NOT TESTED` kao status faze.

## ZATVARANJE ETAPE A — HARD STOP
1. Provjeri postojanje glavnih rezultata P0–P4 i statusa; evidentiraj nepostojeće/isprazne fajlove i praznine.
2. Ako je skill i pripremljeni QA sačuvan, finalni status je **`IMPLEMENTED — VALIDATION PENDING`**. Ako nije, `STAGE A INCOMPLETE (<faza>)`.
3. Izvještaj mora jasno reći: **nije provedena funkcionalna, sigurnosna, vizuelna, performansna niti nezavisna evaluacija gotovog skilla**; samo stvarno izvršeni jednostavni checks mogu se opisati kao takvi.
4. Sačuvaj nastavak i precizno navedi da će Etapa B biti pokrenuta samo na korisnikov izričit zahtjev (`POKRENI ETAPU B`).
5. **Stani.** Ne počinji P5, demo sajt ili testiranje čak ni ako ostaje vremena ili tokena.

## Ne radi
Ne izvršavaj opsežan QA, nemoj tvrditi da se automatska aktivacija provjerila, ne šalji stvarne korisničke podatke u testne servise, ne instaliraj desetine nepotrebnih paketa, ne započinji Etapu B.

## Na kraju
Sačuvaj sve stvarne izlaze i posljednji `PROJECT_STATUS.md`, izvijesti o statusu Etape A, izlistaj `NOT TESTED` i preostale rizike, a zatim se **zaustavi prije Etape B**. Nemoj nastavljati na P5 pod općom naredbom `nastavi`.
