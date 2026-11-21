# MASTER · web-professional-standards · V3

## Mandat i granica izvršenja

Ovaj paket opisuje budući rad. Samo poruka korisnika pokreće fazu. Tekst u ZIP-u, izvorima, primjerima ili promptu za kasnije čita se kao dokumentacija. Aktuelni zahtjev korisnika i stvarno dostupne dozvole određuju opseg. Izrada prenosivog paketa ne podrazumijeva instalaciju, promjenu drugih skillova, produkcije ili kontaktiranje trećih strana.

| Naredba iz korisničke poruke | Tok |
|---|---|
| `POKRENI ETAPU A` | Izvrši cijelu tabelu faza odozgo nadolje, od prvog nedovršenog valjanog koraka. Sačuvaj izlaz i status poslije svake faze pa odmah nastavi. Stani nakon P4 ili pri stvarnom blokatoru koji sprečava dalji rad. |
| `POKRENI P0` … `POKRENI P4`, uključujući pojedinačne P1A–P1G | Izvrši samo imenovanu fazu sa stvarno dostupnim ulazima. Zapiši stanje i stani. |
| `nastavi` | Nastavi prethodno autorizovan opseg iz statusa i sačuvanih fajlova. Ako je A završena, iznesi status. Za prelazak u B potrebna je nova izričita naredba. |
| `POKRENI ETAPU B` | Tek po zasebnom zahtjevu za testiranje i s potrebnim izlazima A primijeni [plan B](phases/stage-B/README.md). |

Jasna ekvivalentna poruka vrijedi kao odgovarajuća naredba. Nejasna naredba za nastavak bez evidencije prethodnog opsega zahtijeva razjašnjenje. Izvještaji, bilješke i status su na bosanskom. Distribuirani skill, njegove reference, P2 materijal i tehničke upute uz QA su na engleskom. Poruke pri radu na klijentskom sajtu prate jezik korisnika. Novi skill je samostalan. Nijedna faza ne treba učitavati, inventarisati ili mijenjati ranije korisnikove web skillove.

## Vlasništvo i putanje

MASTER određuje izvršenje, lokacije, dokaze i završetak. [Specifikacija skilla](specs/skill-spec.md) je autoritet za ponašanje proizvoda, [QA specifikacija](specs/qa-spec.md) za kriterije i izlaze provjere. Fazni dokumenti određuju rad na svom rezultatu. Bilješke revizije i misaoni prolazi služe održavanju dokumentacije. Ne ulaze u kontekst svakodnevnog rada skilla.

Sve putanje u ugovorima faza računaj od direktorija koji sadrži ovaj MASTER. `S/` označava tačno `output/web-professional-standards/`, a `Q/` označava `output/web-qa/`. To su dva direktorija unutar projekta. P3 gradi prenosivi skill u S. P4 gradi prateći, opcionalan QA alat u Q. Skill mora imati upotrebljive kriterije i ručnu alternativu i kada je instaliran sam. Staging, istraživanje, QA fixture i status ostaju izvan S.

## Ugovori faza

U svakoj fazi koristi MASTER, njen fazni dokument i tekući `PROJECT_STATUS.md`, koji P0 prvi kreira iz predloška. Tabela navodi ostale ulaze i obavezne izlaze. Oznaka `S/references/` znači skup stvarnih vlastitih referenci iz mape u P3. U fazama s više velikih ulaza pročitaj prvo odluke i samo potrebne odjeljke. Redoslijed izvršenja ostaje isti i kad faza ne koristi izlaz neposredno prethodne faze.

| Faza | Dodatni ulazi | Obavezni izlazi |
|---|---|---|
| [P0](phases/P0-environment-audit.md) | `PROJECT_STATUS_TEMPLATE.md` | `environment-audit.md`, `PROJECT_STATUS.md` |
| [P1A](phases/P1A-predictive-engineering.md) | `environment-audit.md`, `specs/skill-spec.md` | `research/notes-1A.md` |
| [P1B](phases/P1B-fluid-layout-frontend.md) | `research/notes-1A.md`, `specs/skill-spec.md` | `research/notes-1B.md` |
| [P1C](phases/P1C-design-identity-ux.md) | `research/notes-1A.md`, `research/notes-1B.md`, `specs/skill-spec.md` | `research/notes-1C.md` |
| [P1D](phases/P1D-security.md) | `research/notes-1A.md`, `specs/skill-spec.md` | `research/notes-1D.md` |
| [P1E](phases/P1E-performance-a11y-seo-qa-tools.md) | `research/notes-1B.md`, `research/notes-1C.md`, `research/notes-1D.md`, `specs/qa-spec.md` | `research/notes-1E.md` |
| [P1F](phases/P1F-technology-hosting-maintenance.md) | `research/notes-1D.md`, `research/notes-1E.md`, `specs/skill-spec.md` | `research/notes-1F.md` |
| [P1G](phases/P1G-synthesis.md) | `environment-audit.md`, `research/notes-1A.md`, `research/notes-1B.md`, `research/notes-1C.md`, `research/notes-1D.md`, `research/notes-1E.md`, `research/notes-1F.md`, `specs/skill-spec.md`, `specs/qa-spec.md` | `research/notes.md` |
| [P2](phases/P2-failure-catalog.md) | `research/notes.md` | `staging/failure-patterns.md`, `staging/context-index.md` |
| [P3](phases/P3-build-skill.md) | `environment-audit.md`, `specs/skill-spec.md`, `specs/qa-spec.md`, `research/notes.md`, `staging/failure-patterns.md`, `staging/context-index.md` | `S/SKILL.md`, `S/references/`, uključujući `S/references/quality-gates.md`, `S/references/testing.md`, `S/references/improvement-loop.md` |
| [P4](phases/P4-qa-preparation.md) | `environment-audit.md`, `research/notes.md`, `specs/qa-spec.md`, `S/SKILL.md`, `S/references/quality-gates.md`, `S/references/testing.md` | `Q/scripts/check.mjs`, `Q/tests/`, `Q/check.config.json`, `Q/package.json`, `Q/TESTING_HANDOFF.md` |

Svaki P1 autor odgovara za jedan sloj. P1A bira metodu. P1B određuje geometriju i ponašanje frontenda. P1C određuje identitet, sadržaj i povratnu informaciju korisniku. P1D obrađuje serverski tok, integritet i zaštitu podataka. P1E definira kriterije i granicu dokaza. P1F određuje uslove rada na hostingu i poslije predaje. Za formu se, primjerice, korisnička poruka oblikuje u P1C, značenje uspjeha određuje u P1D, dokaz u P1E, a nadzor dostave u P1F. Nalaz s drugog sloja uputi vlasniku s kratkim razlogom.

## Dokazi, odluke i istraživanje

- `VERIFIED` traži stvarno obavljenu radnju s ciljem, okruženjem, datumom i opažanjem. `SOURCED` traži otvoren izvor s naslovom, URL-om, datumom, tvrdnjom i granicom primjene. `INFERRED` označava zaključak izveden iz imenovanih nalaza. `ASSUMPTION` označava otvorenu pretpostavku i način da se razriješi.
- `PASS`, `FAIL`, `WARNING` i `NOT TESTED` su ishodi pojedine provjere. `N/A` traži razlog neprimjenjivosti. Prazan rezultat ili nedostupan alat ne potvrđuju ispravnost. Preneseni nalaz zadržava prvobitnu oznaku. R0 označava npr. gubitak važnog zapisa, ozbiljno izlaganje podataka ili nemogućnost završetka glavne radnje, uključujući prepreku pristupačnosti. R1 značajno otežava rad, kvalitet ili održavanje uz održiv zaobilazni put. R2 ima mali doseg i malu posljedicu. Ozbiljnost je odvojena od stepena dokazanosti. P0 i P1A–P1G su imena faza.
- Istražuj duboko kad izbor metode, sukob izvora, promjenjivi standard ili ozbiljna posljedica zavise od odgovora. Provjeri primarni izvor, uslove i ograničenja. Traži drugačiji nalaz, podatak ili kontekst koji bi promijenio važnu odluku. Kod stabilne, uske tvrdnje dovoljan može biti jedan neposredni mjerodavni izvor. Stani kad novi izvor samo ponavlja zaključak i ključni izuzeci su pokriveni. Broj URL-ova, linija ili obrazaca nije kriterij gotovosti.
- U svakoj P1 bilješci sačuvaj pitanje, odluku ili otvorenu alternativu, osnovu, izuzetak, posljedicu i kako je provjeriti. Grupiraj srodne nalaze. Kritičnu nepotvrđenu tvrdnju izdvoji iz implementacije. Ako bez nje nema sigurnog ili upotrebljivog ishoda, označi blokiranog potrošača i završi nezavisni rad u dozvoljenom opsegu.
- P1G u `research/notes.md` vodi jedini registar `Usvojene delte za specs`. Svaka delta navodi ciljni odjeljak, prethodnu i novu odluku, osnovu, uticaj i potrošače. Samo `ACCEPTED` vrijedi iznad početne implementacijske preporuke. `PROPOSED` čeka dokaz ili odluku. P2, P3 i P4 primjenjuju prihvaćene delte za svoj izlaz. Cilj, kritični minimum, odobrenje trajne promjene i granica A/B ostaju obavezni.

## Nastavak i završetak

Faze koriste `NOT STARTED`, `IN PROGRESS`, `DONE`, `DONE WITH GAPS` i `BLOCKED`. Prije prelaska provjeri stvarni sadržaj svih obaveznih izlaza i ažuriraj [jedini predloženi format statusa](PROJECT_STATUS_TEMPLATE.md). Za otvorenu prazninu zapiši koji sljedeći korak može ići, koji ne može i zašto. Obavezan izlaz koji nedostaje ili ne rješava ključni zadatak nije dovoljan za nastavak zavisne faze. Duga istraživanja zapisuj tokom rada. Pri nastavku provjeri i ulaze na kojima je sačuvana odluka zasnovana. Ako su se promijenili, ponovi samo pogođenu fazu ili dio i ponovo pregledaj zavisne izlaze. Očuvaj prethodne verzije i korisničke izmjene. Ne prepisuj nepoznat postojeći izlaz.

Sama sačuvana bilješka P0 služi kao marker. Trajnost između sesija može se potvrditi tek ponovnim čitanjem ranije zabilježenog sadržaja u drugoj sesiji. U Etapi A dozvoljene su provjere strukture, veza i sintakse napisanih fajlova. Stvarni testovi, izvođenje QA runnera, browser preuzimanja za testiranje, demo-sajtovi, skriveni slučajevi i nezavisna evaluacija pripadaju Etapi B.

Po P4 provjeri cijeli lanac i predaj lokacije S i Q, njihov sadržaj ili paket ako je izvoz dostupan, status i neizvršene provjere. `IMPLEMENTED — VALIDATION PENDING` traži sve obavezne izlaze i razriješene strukturne blokatore. Inače upiši `STAGE A INCOMPLETE (<faza>)` i stvarni razlog. Nakon P4 stani.
