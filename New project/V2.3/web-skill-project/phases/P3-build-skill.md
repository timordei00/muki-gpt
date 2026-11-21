# P3 — IZGRADNJA SKILLA `web-professional-standards`


**Cilj:** Implementirati **stvarni, prenosiv, sažet** skill koji orkestrira kvalitet poslovnih web-stranica, bira režim po riziku, predviđa prije koda i poziva relevantne reference umjesto da ih sve učitava.

**Ulaz:** `MASTER.md`, `PROJECT_STATUS.md`, `specs/skill-spec.md`, `research/notes.md` (pročitaj `Usvojene delte za specs`; primijeni samo `ACCEPTED` prema MASTER §2, ne ublažavaj critical floor), `references/failure-patterns.md`, `references/site-type-matrix.md`, P0 dokumentovana pravila aktivacije **novog** skilla, po potrebi sažeci `research/notes-1X.md`. `specs/qa-spec.md` za očekivane provjere. **Stvarna finalna putanja** iz `PROJECT_STATUS.md` je jedino odredište; ako P1G nije mogao odrediti lokaciju, P3 je mora provjeriti prema P0 i upisati **prije prvog pisanja**. Sve dalje navedene putanje skilla tumači prema tom zapisu. Ne učitavaj sve ranije članke.

**Dubina:** primjena i interna revizija (ne nova opća istraživačka faza); primarne izvore samo za nerazriješena ograničenja ciljne platforme ili očigledne P0/P1 nedoumice.

## Koraci [MUST]
1. **Putanje i izvori:** ulazne `research/` i `references/` iz P1/P2 nalaze se u radnom `web-skill-project/` folderu. Finalni `web-professional-standards/` je susjedan ili `web-skill-project/output/` ako platforma to zahtijeva. Kopiraj samo validirane/relevantne sadržaje u finalni skill, bez nepotrebnog fizičkog dupliranja; zabilježi finalnu putanju.
2. **Target format:** iz P0 potvrdi putanju, registraciju, naziv, frontmatter, `description` ograničenja i način otkrivanja. Ako nije provjereno, ne tvrdi da je plugin instaliran ili da se automatski aktivira; izradi kompatibilan prenosiv paket uz eksplicitnu napomenu. Ne oslanjaj se na zastarjele upute iz memorije.
3. **Activation scope:** `description` razumljivo obuhvata EN/BS korisničke zahtjeve za stvarne sajtove (website, landing page, business website, web stranica, sajt, stranica za firmu) uz relevantne tehnologije (HTML/CSS/React/Astro) **samo u kontekstu izrade ili izmjene**. Napiši kratko „kada ne koristiti“: konceptualno pitanje, izolovana analiza jezika, nepovezan kodni isječak; ne preširoko za sve CSS upite.
4. **Usklađivanje specifikacija:** prije implementacije eksplicitno pročitaj odjeljak `Usvojene delte za specs` u `research/notes.md`; samo `ACCEPTED` (s izvorom/razlogom) se primjenjuju iznad početne implementacijske preporuke u `specs/`, nikada iznad MASTER hard stopa i critical floor-a. `PROPOSED` nisu promjene. Kod stvarnog sukoba navedi blokator i najmanji naredni korak.
5. **Tri režima:** LIGHT / STANDARD / FULL iz `specs/skill-spec.md` sa jasnim okidačima eskalacije, bez forsiranja 5–10 rizika za trivijalnu izmjenu. P0 critical floor važi uvijek za dodirnute površine.
6. **Brief i dizajn prije koda:** do pet pitanja koja stvarno mijenjaju odluku; ostale rupe kao eksplicitne pretpostavke. Design direction za FULL, sažetak za STANDARD; vizuelni identitet iz stvarnog klijenta, ne generički template.
7. **Predictive procedure:** kratak `brief → akteri/tokovi/komponente → zavisnosti/promjene → samostalni rizici → preventivni izbor → katalog kao kontrola`. Razdvoji porijeklo i ne prepisuj početni zapis naknadno. Samo rizici koji mijenjaju odluke, osim obaveznog P0.
8. **Implementacija:** jednostavan stack po briefu, semantika, pristupačnost, sigurnost po tipu, funkcionalne forme bez lažne potvrde, autentični podaci i prava, strategija održavanja.
9. **Provjere i isporuka:** definisane P0/P1 kapije, ciljani automated/manual checks, PASS/FAIL/WARNING/NOT TESTED s dokazom, ne izmišljaj testiranje; prije produkcije nema nerazjašnjenih placeholdera i poslovnih tvrdnji.
10. **Samostalna orkestracija:** izradi kratku mapu `korak → vlastita referenca → uslov učitavanja` koja pokriva dizajn/boje, layout, animacije, sigurnost i uzročno predviđanje grešaka. Nema zavisnosti od drugih korisnikovih skillova niti čitanja njihovog sadržaja. Kod konflikta prvo sigurnost, funkcionalnost i pristupačnost zajedno.
11. **Progressive disclosure:** `SKILL.md` je operativan (ciljano 100–200 linija, osim kad platforma zahtijeva drugačije), s tabelom `korak/režim → vlastita referenca → uvjet učitavanja`. Reference su po oblastima, bez ogromnih „obavezno pročitaj sve“ direktiva. Za svaki link iz tabele provjeri tačno **postojeći finalni fajl**. `references/quality-gates.md` i `references/testing.md` su stabilne obavezne putanje koje P4 očekuje i ne smiju se tiho spojiti/izbrisati. Ostale se smiju objediniti samo uz ispravljenu mapu i bez fantomskih naslova.
11a. **Učenje iz realnih grešaka bez trošenja tokena pri običnom radu:** napiši kratki `references/improvement-loop.md` s okidačem (bug ili konkretan feedback), sanitizovanim kandidatom u **zajedničkom, odobrenom prostoru za održavanje skilla, dostupnom i budućim projektima**, **van instaliranog skilla i klijentskog repozitorija**, analizom uzroka i propuštene leće, kriterijem generalizacije, odobrenjem korisnika prije izmjene skilla i ciljanim regresijskim testom. `SKILL.md` sadrži samo jednu uslovnu vezu; ne učitavaj protokol za svaki uspješan zadatak. Skill ne upisuje automatski promjene u vlastitu distribuciju niti memoriju modela.
12. **Samorevizija prije završetka:** provjeri frontmatter format, linkove/relativne putanje, nepotrebno dupliciranje, kontradikcije, sve reference postoje, primjenjivost za lokalne firme, odsustvo neprovjerenih tvrdnji o aktivaciji. Mehanički pregled fajlova nije isto što i praktični test aktivacije.

## Predložena struktura (samo korisni fajlovi)
```text
web-professional-standards/
├── SKILL.md
├── references/
│   ├── predictive-engineering.md
│   ├── failure-patterns.md
│   ├── site-type-matrix.md
│   ├── design-process.md
│   ├── fluid-layout.md
│   ├── security.md
│   ├── performance.md
│   ├── accessibility-seo.md
│   ├── technology-selection.md
│   ├── quality-gates.md
│   ├── testing.md
│   └── improvement-loop.md     # samo pri bug/feedback/zahtjevu za update
├── scripts/                  # priprema u P4
└── tests/                    # priprema u P4
```
Nepotrebne duplikate spoji. **Ne kopiraj radni `research/` u finalni skill.** Ako izvor treba korisniku skilla, napravi samo kratak `references/sources.md` s URL-om/datumom/ograničenjem. Ne pravi enciklopediju: vlastite reference sadrže samo odluke, okidače, izuzetke i provjere potrebne za samostalan rad.

## Mapa iz istraživačkih bilješki u finalne reference [MUST]

| Radni izlaz (staging) | Finalna referenca ili odredište |
|---|---|
| `research/notes-1A.md` + P1G algoritam | `references/predictive-engineering.md` |
| `research/notes-1B.md` | `references/fluid-layout.md` |
| `research/notes-1C.md` | `references/design-process.md` (vlasnik P1C) |
| `research/notes-1D.md` | `references/security.md` |
| `research/notes-1E.md` | `references/performance.md`, `references/accessibility-seo.md`, `references/quality-gates.md`, `references/testing.md` |
| `research/notes-1F.md` | `references/technology-selection.md` i lokalni hosting/handover dijelovi potrebnih referenci |
| `references/failure-patterns.md` + `references/site-type-matrix.md` iz P2 | odgovarajući finalni `references/` fajlovi |
| `research/notes.md` | uvjeti, eskalacije, prihvaćene delte i odabir najmanjeg skupa referenci; **ne kopirati research** |
| P1A (RCA) + P1C (feedback) + P1G (minimalni protokol) | `references/improvement-loop.md`, *samo na okidač* |

Izostavi ili sažmi **neobaveznu** finalnu referencu samo uz zabilježen razlog i funkcionalnu zamjenu unutar vlastitih finalnih referenci; **izuzetak: `quality-gates.md`, `testing.md` i `improvement-loop.md` moraju fizički postojati jer se na njih oslanjaju P4 i on-demand napredovanje**; interni linkovi iz `SKILL.md` ne smiju voditi na nepostojeće fajlove. Sve finalne reference piši na **engleskom** i zadrži izvorni dokazni status gdje je relevantno.

## Dodatne obaveze [MUST]
- Svaki link iz `SKILL.md` vodi na **stvarnu vlastitu internu referencu**; platform-specific putanje potvrdi prije tvrdnje.
- Upozori na neprovjerenu aktivaciju i ponudi ručni način upotrebe/pozivanja kada je podržan.
- Procedura mora biti **operativna**: okidač, odluka, izlaz i provjera, a ne samo „pravi kvalitetan sajt“.
- Relevantna pravila se čitaju po potrebi: statički sajt bez forme ne učitava autentifikaciju/plaćanja; LIGHT promjena boje ne učitava QA komplet; `improvement-loop.md` ne učitava se bez potvrđene greške, značajnog feedbacka ili izričitog zahtjeva za promjenu skilla. Sam prijedlog za učenje ne znači da je skill išta sam promijenio.
- Pravni/medicinski/finansijski podaci i licence ostaju klijentski/stručno potvrđene; ne izmišljaj.

## Izlaz
- Sačuvan `web-professional-standards/SKILL.md` i **stvarne, neprazne potrebne reference**.
- Ne zahtijevaj root `README.md` u instaliranom skillu: upute za aktivaciju zabilježi u projektnom izvještaju/statusu; **QA instalacijske upute će P4 staviti u `TESTING_HANDOFF.md`**, ne u proizvoljni README koji platforma može ignorisati.
- Mapa vlastitih referenci i uslova učitavanja, lista neprovjerenog; `PROJECT_STATUS.md` (`P3 DONE`, `DONE WITH GAPS` ili `BLOCKED`).

## Gotovo kada
Skill se može pročitati kao procedura bez učitavanja cijele baze; svaka obavezna referenca postoji, naziv i metadata su razumno usklađeni s P0; rizici dolaze prije kataloga; critical floor i stvarna funkcionalnost ne mogu nestati u LIGHT; netestirano nije proglašeno gotovim.

## Ne radi
Ne pravi demo sajt, ne pokreći automatsko testiranje ni A/B, ne izmišljaj registraciju/aktivaciju. Ne čitaj niti mijenjaj postojeće korisnikove web skillove. Ne proglašavaj spremnim za produkciju.

## Na kraju
Sačuvaj obavezne rezultate i ažuriraj `PROJECT_STATUS.md`. Ako je aktivna `POKRENI ETAPU A`, **automatski nastavi na P4** bez međustopa, dodatne korisničke poruke ili posebnog faznog izvještaja. Ako je korisnik tražio samo ovu imenovanu fazu, ovdje stani. Pri stvarnom blokatoru evidentiraj razlog i ne proglašavaj fazu završenom.
