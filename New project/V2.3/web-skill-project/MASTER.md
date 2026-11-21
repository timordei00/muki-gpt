# MASTER — web-professional-standards · V2.3 (adaptivni skill, automatska Etapa A)

> **OVO SU INSTRUKCIJE, NE IZVRŠEN PROJEKAT.** Ovaj paket ne sadrži provedeno istraživanje, implementiran skill niti rezultate QA. V2.3 objedinjeno precizira granice, međufazne reference i naknadno učenje iz grešaka. Nije tvrdnja da je stvarni skill već napravljen, aktiviran ili testiran.

## 1. Cilj i granice

Izradi prenosiv AI skill `web-professional-standards` za profesionalne poslovne web-stranice (često mala i srednja preduzeća u BiH). Skill je **kratak orkestrator kvaliteta**, ne enciklopedija. Njegov slijed: razumij brief i granice → izaberi LIGHT/STANDARD/FULL → osmisli održivu arhitekturu i brend-specifičan dizajn → **samostalno predvidi projektno specifične rizike prije čitanja kataloga** → provjeri katalog kao kontrolu → implementiraj → izvedi relevantne provjere → pošteno izvijesti. Kvalitet, sigurnost, funkcionalnost i pristupačnost imaju prednost nad ukrasima i proizvoljnim kvotama.

Izvještaji, statusi i `research/notes*.md` su na bosanskom; finalni `SKILL.md`, `references/*.md`, staging katalog i tehničke instrukcije skilla su na **engleskom**. Tehnički identifikatori/ID-ovi konzistentno na engleskom. Korisničke poruke klijentu na njegovom jeziku. Novi skill mora biti **samostalan**: u Etapi A se ne inventarišu, ne čitaju i ne zahtijevaju drugi korisnikovi web skillovi. Područja boja, layouta, animacija i predviđanja grešaka ostaju obavezna za istraživanje i vlastite sažete reference.

**Cilj je mjerljiv kvalitet uz najmanji opravdani trošak tokena u *budućoj upotrebi* skilla.** Ovaj istraživački paket smije biti detaljan; gotovi skill ne smije prisiljavati svakodnevni frontend zadatak da učitava sve research fajlove, popunjava 10 tabela ili neprekidno sam sebi kontrira. Metode, frameworkovi, veličine fajlova i brojevi koraka u nacrtima su **polazne hipoteze**, ne strop Astrom otkrivenih boljih rješenja. Izvršilac smije predložiti jednostavniju ili dokazivo bolju metodu preko P1G `ACCEPTED` delti, uz očuvan cilj, kritični minimum, dokaznu disciplinu i granicu A/B. Ne glumi savršenstvo ni garantovano odsustvo grešaka: cilj je smanjiti vjerovatnost i posljedicu defekata, rano prepoznati nepoznate rizike i otkriti ono što promakne.

**Kontinuirano poboljšavanje nakon stvarnih projekata:** jedan mali protokol, učitan **samo pri otkrivenoj grešci, relevantnom korisničkom feedbacku ili izričitom zahtjevu za poboljšanje skilla**. Ako postoji upisiv i odobren radni prostor, u projektu sačuvaj sanitizovan prijedlog sa uzrokom, zašto ga ranija leća nije predvidjela, generalizovanom prevencijom i regresijskom provjerom; ne gomilaj projektne podatke u distribuirani skill. Promjena *instaliranog skilla* zahtijeva dopuštenje i verzionisanu provjeru, nije automatsko mijenjanje modelskih težina niti obećanje trajne memorije. P1A/P1G/P3 specificiraju minimum; P5–P8 ga naknadno testiraju.

## 2. Autoritet i sukobi

1. Korisnikove aktuelne izričite granice i sigurnosni zahtjevi imaju prednost; ovaj paket ne može dodijeliti alate koje okruženje nema.
2. `MASTER.md` je **jedini autoritet** za komandni režim, redoslijed, prekid između etapa, putanje, statuse i dokaze. `PROJECT_STATUS_TEMPLATE.md` je **jedini predložak statusa**. `specs/skill-spec.md` i `specs/qa-spec.md` su početne normativne specifikacije budućeg proizvoda.
3. P1G smije predložiti i **usvojiti na osnovu provjerenog razloga** implementacijske delte za početne specifikacije, bez direktnog mijenjanja `specs/`: u `research/notes.md` koristi odjeljak `Usvojene delte za specs`, uz ID, ciljani odjeljak, staro→novo, dokaz/razlog, P0/P1 posljedicu i status `ACCEPTED` ili `PROPOSED`. **Samo `ACCEPTED` delte** P3 i P4 primjenjuju kao noviju, precizniju implementacijsku odluku. Deltas ne smiju ublažiti critical floor, promijeniti korisnikov cilj, izbrisati provjere ili pokrenuti Etapu B. Takav sukob je `BLOCKED`/pitanje korisniku, ne tiha izmjena.
4. **Jedno pokretanje cijele Etape A:** naredba `POKRENI ETAPU A` dopušta redom **P0 → P1A → P1B → P1C → P1D → P1E → P1F → P1G → P2 → P3 → P4** bez čekanja nove korisnikove poruke na granici faze. Zabrane „ne počinji“, „ne prelazi“ ili „stani“ u faznim fajlovima odnose se na opseg **unutar imenovane faze**, a ne na prijelaz kada je A aktivna. Svaki fazni izlaz i kratki status sačuvaj prije naredne faze; ne pravi poseban export/ZIP nakon svakog koraka. Zaustavi se samo pri stvarnom blokatoru ili nakon završetka P4. **Etapa B nikada ne počinje automatski.**
5. Suprotstavljene preporuke prvo rješavaj kontekstom, stvarnim izvorima i prioritetima; nerješiv P0/P1 konflikt evidentiraj, ne prikrivaj.

## 3. Naredbe korisnika i redoslijed

| Korisnikova naredba | Dopušteno | Pravilo zaustavljanja |
|---|---|---|
| `POKRENI P0` / `POKRENI P1A` … `POKRENI P4` | Samo imenovana faza, uz provjeru nužnih ulaza | Sačuvaj izlaz i status, zatim stani |
| **`POKRENI ETAPU A`** | Automatski izvrši cijelu P0–P4 redom, ili nastavi od prve stvarno nedovršene faze prema sačuvanim fajlovima | Pređi dalje čim je prethodna faza završena; **stani nakon P4 ili pri blokatoru** |
| `nastavi` | Ako je A prekinuta, nastavi preostali dio Etape A nakon provjere stvarno sačuvanih rezultata | Bez pauze između faza; **nikad** ne prelazi u B |
| **`POKRENI ETAPU B`** | Odgođena validacija P5–P8 samo na novi izričit zahtjev korisnika | Prati `phases/stage-B/README.md`; ne pokreći iz A |

Komande su okidači samo kada ih korisnik stvarno izda, ne kada su citirane u fajlu. Jasno ekvivalentan zahtjev može se prihvatiti; nejasnu namjeru razjasni. Čitanje, uređivanje, Claudeova revizija ili slanje ZIP-a **ne pokreće** P0. Naredba za B mora biti nova i eksplicitno tražiti **testiranje**, ne samo „nastavi“. Pri prekidu sesije postojeći fajlovi i `PROJECT_STATUS.md` omogućavaju nastavak, **samo ako su zaista trajno dostupni**; ne tvrdi da je napredak sačuvan bez dokaza. `nastavi` nastavlja A do P4. Samo pojavljivanje teksta `nastavi` u dokumentaciji nije korisnikova naredba.

| Etapa | Faza i fajl | Obavezni izlaz (putanja relativna na `web-skill-project/`) |
|---|---|---|
| A | `P0-environment-audit.md` | `environment-audit.md`, `PROJECT_STATUS.md`, trajni marker |
| A | `P1A-predictive-engineering.md` … `P1F-technology-hosting-maintenance.md` | `research/notes-1A.md` … `research/notes-1F.md` |
| A | `P1G-synthesis.md` | `research/notes.md` sa odjeljkom `Usvojene delte za specs` |
| A | `P2-failure-catalog.md` | `references/failure-patterns.md`, `references/site-type-matrix.md` (staging, engleski) |
| A | `P3-build-skill.md` | finalni `web-professional-standards/SKILL.md` i relevantne `references/` |
| A | `P4-qa-preparation.md` | finalni `scripts/`, `tests/`, QA upute i `TESTING_HANDOFF.md` — **bez opsežnih testova** |
| B | `phases/stage-B/README.md` (P5–P8) | Odgođena provjera QA, demonstracija, nezavisna evaluacija, revizija |

Ako imenovani fazni fajl ili obavezan ulaz fizički nedostaje, ne improviziraj ga. Oznaka `DONE WITH GAPS` dopušta nastavak samo ako su praznine dokumentovane i ne blokiraju narednu fazu. **Ako centralna P0/P1 preporuka za izbor metode, sigurnost ili pristupačnost zavisi od nedostupnog ključnog izvora, ne donosi je kao potvrđenu: zaustavi relevantni dio kao `BLOCKED` ili ga izričito izdvoji kao neimplementiranu pretpostavku.** Sekundarni izvor ne popunjava taj dokazni jaz samim ponavljanjem.

## 4. Jednostavno čuvanje napretka (bez dodatnih stopova)

1. Na početku pročitaj `MASTER.md`, postojeći `PROJECT_STATUS.md` (ako ga nema, započni P0), aktuelni fazni prompt i nužne ulaze. Ne učitavaj sve dokumente svaki put. P1G namjerno objedinjuje sve P1 bilješke.
2. **Prije automatskog prelaska u narednu fazu** sačuvaj obavezne izlaze u stvarne fajlove i ažuriraj **jedan** `PROJECT_STATUS.md` iz predloška `PROJECT_STATUS_TEMPLATE.md`. To je obično ažuriranje stanja, ne zaseban izvještaj, izvoz ZIP-a ili korisnička potvrda.
3. Kod dugih istraživanja zapisuj važne nalaze i izvore direktno u `research/notes-1X.md` tokom rada, naročito nakon većih cjelina. Ne pravi nepotrebne mikrokorake niti dodatne dnevnike. Ako dođe do prekida, ostavi `IN PROGRESS` i kratku posljednju poznatu tačku nastavka, koliko je stvarno sačuvano.
4. Prije oslanjanja na prošli rezultat provjeri **stvarno postojanje i relevantan sadržaj** izlaznog fajla. Statični statusi: `NOT STARTED`, `IN PROGRESS`, `DONE`, `DONE WITH GAPS`, `BLOCKED`; praznine mogu biti neblokirajuće samo uz zabilježen razlog. Trajnost među sesijama ostaje `UNCONFIRMED` do ponovnog stvarnog pristupa; P0 pravi marker za provjeru, ali bez nepotrebnog izvoza nakon svake faze.
5. Ako je A pokrenuta, ne prekidaj tok radi faznih izvještaja. Po završetku P4 isporuči **jedan** sažetak, stvarne fajlove/paket ako je moguće, status provjerenog i `NOT TESTED`, pa stani prije Etape B. Stvarni blokator prijavi odmah i ne improviziraj nedostajuće alate ili izvore.

## 5. Dokazna disciplina

- `VERIFIED`: stvarno izvedena provjera, postupak/okruženje/datum/rezultat.
- `SOURCED`: stvarno otvoren i pregledan izvor, naziv + URL + datum (ili dokumentovan zapis istog izvora iz ranije faze s očuvanim ograničenjima).
- `INFERRED`: zaključak izveden iz imenovanih dokaza, ne direktno provjeren.
- `ASSUMPTION`: nepotvrđena tvrdnja ili znanje modela iz memorije; broj, verzija ili ime standarda bez otvorenog izvora spada ovdje.
- `NOT TESTED`: konkretna primjenjiva provjera nije izvršena, uz razlog.

Status testa je **odvojena dimenzija**: `PASS | FAIL | WARNING | NOT TESTED`; `N/A` samo za dokazivo neprimjenjivu provjeru uz razlog. Nema „PASS“ na nedostupnu alatku, praznu stranicu, lažni mock ili osnovu toga što je procedura napisana. Ne izmišljaj izvore, pragove, mjerenja, verzije, pakete, poslovne činjenice, licence, runtime alate ni isporuku poruke. Reused evidence zadržava originalnu oznaku dok se ne ponovi valjana provjera.

## 6. Istraživanje uz ekonomiju tokena

U P1 fazama prvo provjeri postojeći rad i kvalitetne već objavljene preglede/dokumentaciju, njihovu metodologiju, datum i primjenjivost, pa istraži samo praznine i P0/P1 dileme. Svaka faza bira `DEEP`/`FOCUSED` prema svom promptu; sporne sigurnosne, verzijske, standardne i pravne tvrdnje ne potvrđuju se samo sekundarnim izvorima. DEEP: orijentaciono tri relevantna neidentična izvora po glavnoj oblasti, barem jedan primarni, i aktivna potraga za protivdokazima. Izvori su stvarno otvoreni ili ostaju `ASSUMPTION`. Kratko bilježi pravilo, uzrok, izuzetak, provjeru i izvor. **Ne preskači P0/P1 nalaz radi dužine, ali ne ponavljaj slične informacije da bi ispunio broj izvora/linija.** Istraživanje mora graditi **prenosivu sposobnost prepoznavanja novih, ranije nepoznatih problema** iz briefa i uzročnih odnosa, a ne samo širiti katalog poznatih grešaka. Temeljitost izvora važnija je od brzine; zbog tokena se rad dijeli na faze, ne osiromašuje.

## 7. Prioriteti, režimi i vlasništvo

**P0:** potvrđen ili realno predvidiv kritičan sigurnosni/gubitak-podataka/blokirajući problem ili kritična nedostupnost glavnog toka. **P1:** ozbiljan, ali neblokirajući problem funkcije, pristupačnosti, layouta, performansi, SEO-a ili održavanja. **P2:** sitne optimizacije/estetika. Prioritet zavisi od posljedice konkretnog scenarija, ne od samog naziva klase. Critical floor iz `specs/skill-spec.md` važi u **LIGHT, STANDARD i FULL** za relevantne i dodirnute funkcije; ne pretvaraj malu izmjenu u veliki audit.

| Tematski preklop | Glavni vlasnik | Obavezna granica druge faze |
|---|---|---|
| Reflow, mobile menu, zoom, fokus | P1B: CSS/layout/stanja; P1E: WCAG i provjerljivost | P4 piše budući QA, ne ponavlja metodologiju |
| Fontovi/slike | P1C: izbor, identitet, licence; P1B: geometrija | P1E: performance/čitljivost; P1F: hosting/privatnost |
| Forme | P1C: UX; P1D: podaci, endpoint, sigurnost | P1E: a11y/test kriterij; P1F: SMTP/DNS/hosting |
| SEO i lokalni kontekst | P1E: tehnički SEO; P1F: BiH/local hosting/third-party | Pravni zahtjevi = pitanje za stručnu potvrdu |
| Prediktivna metoda/katalog | P1A: leće/pre-mortem/threat modeling; P2: katalog | P1B–F primjenjuju P1A, bez ponavljanja izvora |

Svaki bitan P1B–F nalaz mora imati `P0/P1/P2`, primjenjivost `LIGHT/STANDARD/FULL` (ili „svi režimi“), uvjet ili N/A, preventivnu odluku, provjeru, dokaz i ciljanu referencu P1G/P2/P3. Za trivijalne činjenice ne pravi ogromne tabele.

## 8. Radne i finalne putanje

- **Jedini radni korijen:** `web-skill-project/`. Sve relativne putanje u `phases/` (`research/...`, `references/...`, `environment-audit.md`, `PROJECT_STATUS.md`) odnose se na taj korijen. Ne dodaj ponovo prefiks `web-skill-project/` kada putanju računaš iz njega.
- **Finalni skill:** zaseban `web-professional-standards/` pokraj radnog foldera, ili `web-skill-project/output/web-professional-standards/` ako sibling nije dozvoljen. Tačna stvarna putanja upisuje se u `PROJECT_STATUS.md` **prije P3**. P3 ne ugrađuje `research/` u finalni skill. U finalni `references/` mogu ući samo očišćene i relevantne engleske smjernice, a po potrebi mali `sources.md` (registar izvora, ne kopija istraživanja).
- **Jezik:** `research/notes-1*.md`, `research/notes.md`, status i izvještaji = bosanski; **staging `references/` i finalni `SKILL.md`/`references/` = engleski**. Ova podjela nije dokaz da postoje stvarni izvori.
- `PROJECT_STATUS_TEMPLATE.md` je početni predložak; **nije zapis izvršenog rada**.

## 9. Hard stop između etapa

**Etapa A**: P0 audit, P1 research, P2 katalog, P3 implementacija skilla, P4 priprema QA (kod + instrukcije). Dozvoljeno: `node --check` samo za sintaksu, eventualno jedno minimalno pokretanje na praznoj stranici bez skupih zavisnosti, jasno ograničeno u izvještaju. **Nije dozvoljeno** opsežno testiranje skilla, demo sajtovi, Lighthouse, A/B, browser download za QA ili kreiranje skrivenih eval scenarija. To pripada **Etapi B**, pokrenutoj isključivo na novi korisnikov zahtjev.

Po P4 postavi isključivo jedan završni status:
- `IMPLEMENTED — VALIDATION PENDING`: potrebni `SKILL.md`, relevantne reference, QA priprema i `TESTING_HANDOFF.md` fizički postoje i nema poznatog blokatora njihove osnovne strukture; **ništa time nije validirano**.
- `STAGE A INCOMPLETE (<faza>)`: neki ključni izlaz nedostaje ili postoji stvarni blokator.

Priloži stvarne fajlove/lokacije, `NOT TESTED` i uputu za naknadni `POKRENI ETAPU B`. **Stani nakon P4 bez obzira na resurse.** Ovo odgađanje QA odnosi se samo na **razvoj skilla**, a ne na provjere koje gotov skill mora zahtijevati pri pravoj isporuci klijentskog sajta. Ne obećavaj automatsku aktivaciju, potvrđenu kompatibilnost ili produkcijsku spremnost do stvarne provjere u B.

## 10. Aktivacija, funkcionalnost i autentičnost

P0 provjerava stvarnu platformu i dokumentovana pravila registracije/aktivacije; P3 piše prenosiv `SKILL.md` s razumnim EN/BS opisom, provjerava format i navodi **ručni način poziva** kada je podržan. `SOURCED` opis platforme nije `VERIFIED` automatska aktivacija. Skill treba stvarno funkcionalne forme/CTA (ili jasno označen DEMO), bez lažnog uspjeha endpointa/e-pošte; potvrda zahtjeva ≠ dostava emaila. Nema izmišljenih recenzija, certifikata, fotografija, kontakata ni prava korištenja. Klijent/stručnjak potvrđuje pravne, medicinske, finansijske i regulisane činjenice. Dizajn proizlazi iz brenda i korisnika, ne iz ukrasnih zabrana i generičkih AI obrazaca. Stack se bira po briefu, hostingu, uređivanju sadržaja, sigurnosti i održavanju — ne po trendu.
