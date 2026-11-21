# P1B — FLUID LAYOUT I FRONTEND


**Cilj:** Izdvojiti **preventivne arhitektonske i CSS odluke** koje sprječavaju lomljenje poslovnih stranica pri neuobičajenim širinama, dužem sadržaju, povećanju teksta i promjeni stanja interakcija. Nije cilj enciklopedija CSS svojstava.

**Ulaz:** `MASTER.md`, `PROJECT_STATUS.md`, `environment-audit.md`, `research/notes-1A.md` (samo odabrane leće i način zapisa rizika), relevantni dijelovi `specs/skill-spec.md`. Ne otvaraj korisnikove postojeće web skillove; istraži temu samostalno iz otvorenih relevantnih izvora i zadrži sažete, primjenjive smjernice.

**Zajednički format nalaza:** bitni rizici/preporuke imaju P0/P1/P2, LIGHT/STANDARD/FULL ili „svi režimi“, uvjet/N/A, preventivnu odluku, provjeru, dokaz i odredište P1G/P2/P3 — prema MASTER §7; ne pravi tabelu za trivijalno.

**Dubina:** **DEEP** za fluidnost, intrinsic sizing, overflow i root-cause; **FOCUSED** za ostale stabilne CSS osnove; browser-kompatibilnost i aktuelna API ograničenja potvrdi primarnim izvorima. Za glavnu DEEP oblast ciljaj ≥3 nezavisna relevantna izvora, jedan primarni; nema potrebe za tri izvora za svako pojedinačno CSS svojstvo.

## Obavezna pitanja

### A. Layout prema sadržaju, ne prema uređajima [MUST]
1. Kada Grid, a kada Flexbox? Objasni izbor prema odnosima sadržaja, ne popularnosti biblioteke.
2. Kako koristiti `minmax()`, `min()`, `max()`, `clamp()`, `auto-fit`/`auto-fill`, `fr`, `min-content`, `max-content`, `fit-content`, `%`, `rem`, `em`, `px`, `ch` i razumne maksimalne širine?
3. Kada je `px` **opravdan** (npr. granice detalja), a kada fiksna dimenzija stvara rizik? Ne propisuj jednu jedinicu svuda.
4. Kako primijeniti intrinsic sizing, `min-width: 0`, `min-height: 0`, `overflow-wrap`, `min-inline-size: 0`, logical properties, `box-sizing` i prilagodljiv razmak?
5. Koje su granice container queries i media queries, šta rade pri promjeni raspoloživog prostora, i šta zahtijeva provjeru browser podrške?
6. Kada izabrati breakpoint prema **lomljenju sadržaja**, a ne prema katalogu uređaja?

### B. Otkrivanje i sprječavanje overflowa [MUST]
1. Napravi **root-cause stablo** za horizontalni overflow: grid/flex minimalna veličina, duga riječ/URL, slike i embedovi, fiksna širina, negativni margin, transform, apsolutno pozicioniranje, 100vw/scrollbar, dinamički sadržaj, otvoreni meni.
2. Za svaku klasu: okidač, zašto nastaje, preventivna odluka i najmanja ciljana provjera; razlikuj namjerni carousel/overflow od greške.
3. Kada `overflow-x: hidden` ili `clip` ima legitimnu upotrebu, a kada samo skriva nedostupan sadržaj? Obavezno opiši kako prvo pronaći uzrok.
4. Kako u DOM-u razlikovati `scrollWidth` od **stvarnog** problema, identifikovati element koji prelijeva, te otkriti vizuelno preklapanje koje nema dokumentni overflow?

### C. Stanja, sadržaj i viewport [MUST]
1. Kratak/dug naslov, 1/20 kartica, različite dužine teksta, dodatne nav-stavke, dugi nazivi usluga, nedostajuća slika, nov jezik/pismo, promijenjen font.
2. Mobilne visine (`100vh`, `svh`, `lvh`, `dvh`): stvarna ograničenja i kako spriječiti odsijecanje primarnog sadržaja na niskom ekranu.
3. Sticky/fixed header, sidra i `scroll-padding-top`/`scroll-margin-top`: kada zaista rade, kada prekrivaju naslov ili fokus.
4. Mobile nav i dropdown: otvoreno/zatvoreno, Escape, fokus i povrat fokusa, touch, smanjen prostor, `aria-expanded`, scroll lock kada je opravdan; detaljni WCAG kriteriji pripadaju P1E.
5. Zoom, povećan font, text spacing, reflow i korisničke postavke; ne mijenjati font-size browsera kao način zaobilaženja problema.
6. Responsive slike (`srcset`, `sizes`, `picture`, `object-fit`, `aspect-ratio`, `width`/`height`), embedovi i video; P1E obrađuje učitavanje, CLS i prioritet LCP.
7. iOS input auto-zoom pri malim veličinama fonta (uključujući čest slučaj `font-size` ispod 16px): traži provjeren uslov i browser/verzijski kontekst, ne univerzalno pravilo. **Ne otklanjaj auto-zoom zabranom korisničkog zooma** (`maximum-scale=1`, `user-scalable=no`). Provjeri dostupnost otvorenog mobilnog menija i fokusnih elemenata i pri većem zoomu/uvećanju teksta.

### D. Kvalitet i održavanje frontend koda [MUST]
- KISS/DRY uz kontekst: kada izvući zajedničku komponentu, a kada pretjerana apstrakcija otežava izmjene; modularni CSS, design tokens i ponovna upotreba stilova, bez copy-paste varijanti po svakoj sekciji.
- Semantički HTML, progressive enhancement, separation of concerns i TypeScript samo gdje zaista smanjuje rizik; izbjegni mrtvi kod i nepotrebne frameworke, ali ne minimiziraj broj linija po svaku cijenu.

### E. Primjena u arhitekturi [MUST]
1. Koje odluke o HTML/CSS strukturi i komponentama unaprijed smanjuju rizik pri dodavanju sadržaja ili jezika?
2. Kako pisati **kratka pravila** za `references/fluid-layout.md` koja vode od uzroka do preventivne odluke i provjere, bez prepisivanja osnovne dokumentacije?
3. Primijeni leće iz P1A **na ista dva već zapisana ilustrativna briefa u `research/notes-1A.md`**. Izvedi samo relevantne frontend rizike (orijentaciono 3–6); **ne izmišljaj još dva nova briefa**. Jasno navedi da ovo nije nezavisan test ni dokaz učinkovitosti; isti briefovi ne ulaze u P6/P7.
4. Za svaku preporuku navedi uvjet kada **ne važi**, najjednostavniju provjeru i rizik neželjenih nuspojava.

## Potrebne provjere izvora
- Koristi otvorene primarne izvore (MDN, web.dev, specifikacije CSS/W3C, dokumentacija browsera) za sporne i verzijski osjetljive tvrdnje. Imena su polazišta, ne dokaz da su pregledana.
- Najprije iskoristi relevantna postojeća kvalitetna istraživanja; detaljno istražuj samo odluke koje mijenjaju rezultat.
- Ništa ne mjeri na demo sajtu sada; sva predložena testiranja navedi kao **NOT TESTED** dok Etapa B ne potvrdi.

## Izlaz
`research/notes-1B.md` (bosanski): sažetak odluka, registar otvorenih izvora, tabela `uzrok | okidač | preventivno pravilo | izuzetak | automatska/ručna provjera | P0/P1/P2 | LIGHT/STANDARD/FULL | dokaz`, stablo overflow uzroka, prijedlozi za `references/fluid-layout.md`, primjeri rizika, otvorena pitanja za P1E/P1G/P2. Izbjegni nepotrebno prepisivanje definicija. Ažuriraj `PROJECT_STATUS.md`.

## Gotovo kada
- Postoji **primjenjivo** stablo za identifikaciju, ne samo sakrivanje, horizontalnog overflowa.
- Obrađeni su abnormalni viewporti, zoom, duži sadržaj i interaktivna stanja, te navedene iznimke.
- Preporuke su vezane za uzrok, prevenciju i provjeru; reference ne prepisuju opću CSS dokumentaciju.
- Svaka značajna tvrdnja ima odgovarajuću oznaku i izvor ili eksplicitnu neizvjesnost; izlaz je sačuvan.

## Ne radi
Ne implementiraj stranicu, ne pokreći browser/QA/benchmarks, ne prelazi u P1C, ne mijenjaj postojeće skillove i ne proglašavaj zoom/overflow testove izvršenim.

## Na kraju
Sačuvaj obavezne rezultate i ažuriraj `PROJECT_STATUS.md`. Ako je aktivna `POKRENI ETAPU A`, **automatski nastavi na P1C** bez međustopa, dodatne korisničke poruke ili posebnog faznog izvještaja. Ako je korisnik tražio samo ovu imenovanu fazu, ovdje stani. Pri stvarnom blokatoru evidentiraj razlog i ne proglašavaj fazu završenom.
