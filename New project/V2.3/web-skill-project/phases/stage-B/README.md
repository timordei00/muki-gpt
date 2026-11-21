# ETAPA B — ODGODENO TESTIRANJE (NIJE POKRENUTO)

**Status:** samo pripremljene instrukcije. Bez obzira na to što su fajlovi ovdje prisutni, Etapa B se **ne izvršava** u Etapi A. Pokreće se isključivo kad korisnik izričito zahtijeva `POKRENI ETAPU B`.

## P5 — QA sistema
Pročitaj `TESTING_HANDOFF.md`, status, P4 konfiguraciju i QA specifikaciju. Postavi dozvoljene zavisnosti/browsere i pokreni testove; negativna i pozitivna kontrola moraju pokazati da alat hvata poznate greške i ne prijavljuje stalno lažni FAIL. Svaki rezultat s komandom, verzijom, uslovima i stvarnim izlazom.

## P6 — Demo
Najmanje dva **nova**, međusobno različita briefa; **nikad ne koristiti ilustrativne briefove, njihove derivacije ili već poznate očekivane odgovore iz P1A–P1C**. **Prije implementacije** zabilježi i zamrzni predviđanja i preventivne odluke. Tek zatim implementacija i relevantne QA provjere. Sačuvaj vremenski/strukturni trag implementacijskog stanja prije otkrivanja skrivenih slučajeva. Ovo je demonstracija, ne dokaz statističkog poboljšanja.

## P7 — Nezavisna evaluacija
Korisnik ili nezavisni evaluator čuva unaprijed pripremljene skrivene scenarije **izvan pristupa modela koji se evaluira**. Nakon P6, korisnik ih otkriva, pa se mjeri: predviđeno / propušteno / nepotrebna složenost / funkcionalni test / regresija; **gdje alati omogućavaju, uporedi i tokene, učitane reference te broj nepotrebnih koraka, po jednakom briefu**. Retroaktivni popravak je `POST-DISCOVERY`, ne predviđanje. Ovdje ne izmišljaj skriveni skup ako korisnik nije pripremio nezavisan skup. A/B (bez/sa skillom) samo na korisnikov zahtjev, u odvojenim sesijama i sa istim briefovima.

## P8 — Završna revizija
Strogo pregledaj kontradikcije, referenciranje, aktivaciju, P0/P1, lažno pozitivan i lažno negativan QA, sigurnosne rupe, suvišne apstrakcije, generički dizajn i održavanje. Potvrđene propuste popravi i ponovi odgovarajuće provjere. **Provjeri na novom nezavisnom scenariju da generalizovano pravilo iz greške nije samo previše specifičan patch; uporedi i trošak/štetu od dodatne instrukcije.** Završni izvještaj razlikuje VERIFIED, SOURCED, INFERRED, ASSUMPTION, NOT TESTED i testne statuse.

## Obavezni ulazi i stop
- Etapa B ne smije početi bez stvarnog `SKILL.md`, QA pripreme i `TESTING_HANDOFF.md`; prijavi nedostatke umjesto lažiranja.
- Ne stavljati skrivene evaluacijske scenarije u dostupni paket ili repo prije P7.
- Ako je testni alat nedostupan, `NOT TESTED`, ne `PASS`.
- Ne tvrditi da jedna demonstracija ili mali A/B uzorak dokazuju opće statističko poboljšanje.
