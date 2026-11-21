# P2 — KATALOG GREŠAKA I MATRICA TIPOVA SAJTOVA


**Cilj:** Izgraditi katalog **uzročnih** obrazaca grešaka i kontekstualnu matricu po djelatnosti. Katalog je kontrola nakon samostalnog pre-mortema, ne zamjena za samostalno predviđanje.

**Ulaz:** `MASTER.md`, `PROJECT_STATUS.md`, `research/notes.md` iz P1G (**obavezno pročitati `Usvojene delte za specs`; primijeniti samo `ACCEPTED` implementacijske delte iz MASTER §2**), relevantne specifične `research/notes-1X.md` samo za detalje ili izvore; `specs/skill-spec.md` i `specs/qa-spec.md` samo relevantne odjeljke.

**Dubina:** **DEEP** za P0/P1 uzroke i prevenciju, **FOCUSED** za P2 detalje. Research reuse: ne izvlači katalog iz memorije kao dokaz; zasnivaj pravila na dokumentovanim nalazima P1 faza, uz sačuvane izvore i statuse.

## Primarno pravilo
**Prvo projekt samostalno generiše rizike iz briefa; tek potom se pregledava katalog.** Ovdje pravimo katalog, ali procedura korištenja ne smije dopustiti priming modela prije samostalne analize.

## Obavezne klase [MUST]
- Header/nav/sticky header: dugi nazivi, više stavki, nestanak nav, sidra ispod headera, mobile menu, fokus, touch, tastatura.
- Hero i kritični sadržaj: predugačak naslov, mala visina viewporta, LCP slika, CTA vidljivost, nedostajući sadržaj.
- Grid/Flex/kartice: intrinsic minimum, `min-width: 0`, dugi stringovi, nejednaka dužina, različite slike, responsivni prijelazi.
- Fontovi i slike: glyph coverage, fallback metrika, CLS, font loading, `srcset`/dimenzije, licence.
- Forme/endpoint: validacija, spam, višestruko slanje, timeout, nepovezana forma, lažna potvrda, privatnost.
- Interakcije i animacije: reduced motion, popups/modali, Escape/fokus, scroll, slabi uređaji, nekompatibilni efekti.
- Hosting/third-party: TLS, mixed content, headers, CMS dodaci, ključevi, vanjski embed i privacy, offline/kvota.
- Accessibility/SEO: semantika, fokus, kontrast, lokalni NAP, `lang`, sidra, crawlability/indeksiranje, stvarna autentičnost podataka.
- Održavanje: dodatne usluge, nova navigacija, jezici/ćirilica, drugi editor, CMS, novi hosting, migracija, regresija.

## Format stavke
`ID | komponenta / tip sajta | uzrok + okidač | simptom / posljedica | najmanja prevencija | provjera (auto/ručno) | P0/P1/P2 | izvor/oznaka | relevantni režimi`.

Pravilo mora imati **uzrok**, ne samo simptom. Ako je preventivna mjera potencijalno štetna (npr. globalno skrivanje overflowa, strogi HSTS bez uslova), navedi izuzetak/kontraindikaciju. Ne prepisuj generičke liste iz OWASP-a na običan statički sajt bez aktivne površine.

Cilj je okvirno **30–60 neduplikativnih i za praksu bitnih obrazaca**, bez obavezne kvote. Spoji slične stavke; ne preskači nijedan važan P0/P1 uzrok samo da ostaneš u rasponu. P2 dekoraciju ne gomilaj.

## Matrica tipova sajtova [MUST]
Za svaki: **restoran, advokatska kancelarija, klinika, automehaničarska radionica, zanatlija, lokalna trgovina, korporativna firma, uslužni biznis/portfolio**. Dodaj druge tipove samo kad njihovi rizici stvarno odudaraju.

Polja: `tip | primarni korisnik/cilj | bitni tokovi i sadržaj | specifični rizici | potrebne potvrde klijenta | dizajnerski pravac | relevantni testovi | stack/hosting uvjeti`.

Ne izmišljaj obavezne funkcije: online rezervacija ili plaćanje se dodaje samo ako brief to traži. Regulisane tvrdnje i posebni podaci zahtijevaju klijentsku/stručnu potvrdu.

## Lightweight algoritam [MUST]
Napiši proceduru iz P1A/P1G: `brief → akteri/podaci/tokovi → komponente/zavisnosti → promjene sadržaja i stanja → samostalni rizici → prioritizacija → preventivne odluke → katalog kao kontrola → kriteriji provjere`. Definiši pravilo porijekla `SAMOSTALNO / KATALOG / OTKRIVENO KASNIJE` i da se početni blok ne mijenja retroaktivno. Samo važni rizici koji mijenjaju odluku; critical floor uvijek.

## Kontrola kvaliteta [MUST]
1. Duplicirani uzrok s drukčijim nazivom? Spoji.
2. Rizik koji nije primjenjiv na navedeni tip sajta? Označi uslov ili izbaci.
3. Pozitivna prevencija koja ne zahtijeva nepotrebnu kompleksnost? Ako nema, ponovo razmotri.
4. Provjera koja ne može otkriti navedeni problem? Oznaka ručno/NOT TESTED, a ne izmišljena automatizacija.
5. Sadrži li katalog tvrdnje bez izvora ili izvan opsega P1? Oznaka ASSUMPTION i otvoreno pitanje, ne maskirati.
6. Jesu li P0/P1 uzroci ostali pokriveni nakon spajanja? Provjeri preko P1G.

## Izlaz
- `references/failure-patterns.md` (staging katalog **na engleskom**, relativno na `web-skill-project/`; P3 ga filtrira za finalni skill) s obrascima i jasnim **stabilnim engleskim** identifikatorima.
- `references/site-type-matrix.md` (staging matrica **na engleskom**; P3 je usklađuje s finalnom referencom) s matricom i algoritmom izbora po briefu.
- `references/predictive-engineering.md` **na engleskom, samo ako** odabrana procedura iz P1G još nije odgovarajuće pohranjena; inače napravi kratku referencu na postojeće autoritativno mjesto, ne dupliciraj.
- **Kratak odjeljak „Coverage / remaining gaps“ unutar `references/site-type-matrix.md`**: pokrivenost P0/P1, ograničenja, otvorena P3/P4 pitanja. Ne pravi dodatni samostalni izvještaj; evidentiraj glavna ograničenja i u `PROJECT_STATUS.md`.

## Gotovo kada
Katalog ima konkretne okidače i uzroke, osam matrica su korisne i specifične, pravilo samostalno-prije-kataloga je jasno, nema izmišljenih „tipičnih certifikata/recenzija“, svi važni nedostaci su evidentirani i fajlovi su sačuvani.

## Ne radi
Ne kreiraj demo web-stranicu, ne simuliraj dokazanu preventivnu učinkovitost, ne piši `SKILL.md`, ne pokreći QA, ne proširuj katalog radi broja.

## Na kraju
Sačuvaj obavezne rezultate i ažuriraj `PROJECT_STATUS.md`. Ako je aktivna `POKRENI ETAPU A`, **automatski nastavi na P3** bez međustopa, dodatne korisničke poruke ili posebnog faznog izvještaja. Ako je korisnik tražio samo ovu imenovanu fazu, ovdje stani. Pri stvarnom blokatoru evidentiraj razlog i ne proglašavaj fazu završenom.
