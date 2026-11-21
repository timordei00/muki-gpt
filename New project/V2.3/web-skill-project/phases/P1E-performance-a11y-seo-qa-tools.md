# P1E — PERFORMANSE, PRISTUPAČNOST, SEO I QA ALATI


**Cilj:** Formulisati provjerljive P0/P1 preporuke za kvalitet stvarnih poslovnih sajtova i izabrati **najmanji opravdani skup provjera**. Ovdje se samo istražuje i odlučuje; P4 implementira pripremu QA, Etapa B ga testira.

**Ulaz:** `MASTER.md`, `PROJECT_STATUS.md`, `research/notes-1B.md` (layout i stanja), `research/notes-1D.md` (sigurnosni minimum), `specs/qa-spec.md` (zahtjevi provjera), P0 stanje alata. Čitaj samo sažetke ili relevantne dijelove drugih fajlova.

**Zajednički format nalaza:** bitni rizici/preporuke imaju P0/P1/P2, LIGHT/STANDARD/FULL ili „svi režimi“, uvjet/N/A, preventivnu odluku, provjeru, dokaz i odredište P1G/P2/P3 — prema MASTER §7; ne pravi tabelu za trivijalno.

**Dubina:** **FOCUSED**, ali **DEEP za kritičnu nedoumicu** koja može dovesti do pogrešnog prioriteta, praga ili testnog rezultata. WCAG 2.2, aktuelne CWV definicije, browser podrška i API-ji potvrđuju se primarnim izvorima (W3C/WAI, web.dev, Chrome/MDN, Google Search Central, Playwright/axe službena dokumentacija). Ne nagađaj pragove.

## Performanse [MUST]
1. Definiši Core Web Vitals LCP, INP i CLS u relevantnim verzijama; odvoji *field* od *lab* mjerenja, mrežu/uređaj, uslove i interpretaciju. Ne tvrdi da je jedan Lighthouse rezultat iskustvo stvarnih korisnika.
2. Za svaku od LCP, INP, CLS: uzroci na maloj poslovnoj stranici, preventivna odluka, šta alat može izmjeriti, šta samo sugeriše. Posebno: **ne lazy-loadati kritičnu LCP/hero sliku bez opravdanja**, preload/fetchpriority samo kad odgovaraju resursima, `width`/`height`/aspect-ratio za sprečavanje CLS-a.
3. Slike: format (WebP/AVIF gdje primjenjivo), `srcset`/`sizes`, kompresija, širina, cache i tradeoff; fontovi (subset za č ć đ š ž i relevantna pisma, self-hosting, `font-display`, fallback metrika); JS izvršavanje, tree shaking/code splitting samo kada potrebni, dugotrajni event listeneri i memory leak rizici u interaktivnim aplikacijama, third-party skripte, DOM i render path.
4. Budžeti prema projektu i hosting ograničenjima: ne izmišljaj univerzalnu granicu koja ne proizlazi iz izvora ili briefa; predloži razumne *kandidate* koji se moraju izmjeriti.
5. Odvoj `npm build` veličinu od transfera i stvarnog runtime troška; navedi ograničenja predložene metrice.

## Pristupačnost [MUST]
1. WCAG 2.2 AA kao polazni **cilj**, ali ne obećavaj certifikaciju nakon automatskog skenera.
2. Tastaturna navigacija, vidljiv fokus, redoslijed fokusa, focus management za mobile menu/modale, Escape i povrat fokusa, dostupni nazivi, HTML semantika, razumljive oznake/greške formi, kontrast i neovisnost o boji.
3. Zoom, reflow, text spacing, dinamična promjena veličine teksta, small viewport, veličina i razmak dodirnih ciljeva (*Target Size*), `prefers-reduced-motion`, screen reader (ručno kada je dostupan); vidljiv i **neprekriven fokus** (*Focus Not Obscured*) i kontrast prema tipu sadržaja. Posebno poveži sticky header/mobilni meni iz P1B sa fokusom pri zoomu. Provjeri **tačne WCAG 2.2 kriterije, razine i izuzetke** u W3C, ne nagađaj brojeve niti univerzalne piksel-pragove.
4. Razlikuj kritičnu nedostupnost glavnog toka (P0) od važnog ali neblokirajućeg problema (P1); prioritet je stvarna posljedica, ne rezultat samog alata.
5. Automatski vs ručno: axe-core može pronaći mnoge obrasce, ali ne može razumjeti sve odnose, kontekst, namjeru i kompletan korisnički tok.

## SEO [MUST]
1. Crawlability/indexability, semantički naslovi, title/meta description, canonical, robots i sitemap prema vrsti sajta.
2. Lokalni SEO: potvrđeni NAP podaci, Google Business Profile gdje primjenjivo, structured data prema vrsti djelatnosti i valjanosti, lokacije i usluge, bez izmišljenih recenzija ili lažnih business markupa.
3. Višejezičnost (relevantni `lang`, hreflang ako zaista više verzija), migracija URL-ova i 301 preusmjeravanja, hosting ograničenja.
4. Ne garantuj rangiranje, promet ili rich results. SEO podaci klijenta mogu biti NOT VERIFIED ako ih nije potvrdio.

## QA alatni izbor [MUST]
1. Uporedi Playwright (+ Chromium, Firefox, WebKit prema dostupnosti), axe-core, Lighthouse CI, ESLint/Stylelint, TypeScript, dependency audit, link checker, visual regression, ručne provjere. Za svaki: šta hvata, šta ne hvata, cijena instalacije/održavanja, false positives i kada vrijedi u projektu SMB sajta.
2. Predloži **minimalni početni skup** za statičku poslovnu stranicu, dodatke po funkcijama i uvjetima, te kad je prevelika biblioteka nepotrebna.
3. Uvedi matrice `provjera | alat | automatizovano/ručno | dokaz PASS | lažni PASS rizik | kad N/A`; posebno navedi backend formu, kontakt endpoint, third-party i stvarni deployment kao odvojenu granicu.
4. Za otvorene vanjske linkove i mrežne zahtjeve objasni kako tretirati rate limit, privremeni pad ili mrežnu blokadu bez lažnog FAIL/PASS; vanjska dostupnost nije isto što i valjanost URL-a.
5. Upoznaj P4 sa razumnim granicama testiranja (neuobičajene širine, mobilni meni u otvorenom stanju, zoom, falsifikovani neuspjesi forme). Praktični testovi tek u Etapi B.

## Izvori i dokazna disciplina
Koristi stvarno otvorene primarne izvore; iz već postojećih stručnih pregleda preuzmi relevantne zaključke uz atribuciju i razliku od primarnog dokaza. Ako alat nije dostupan u Worku, navedi predviđenu provjeru kao `NOT TESTED`, ne simuliraj izlaz.

## Izlaz
`research/notes-1E.md`: razdvojeni sažeci odluka o performansama, pristupačnosti, SEO-u i alatima; registri izvora; predloženi critical floor s izvorima i izuzecima; minimum QA stacka i opcionalni slojevi; matrica automatsko/ručno; prijedlozi za `references/performance.md`, `accessibility-seo.md`, `quality-gates.md`, `testing.md`. `PROJECT_STATUS.md`.

## Gotovo kada
Primarni izvori podupiru standarde i pragove; ključni failure modes su povezani s preventivnim odlukama i planiranim provjerama; QA alatima nisu pripisane mogućnosti koje nemaju; odvojene su lab/field metrike i automatizacija/ručni pregled.

## Ne radi
Ne pokreći Lighthouse, browser, axe, testove, mrežne probe sajta ni demo projekt; ne piši QA kod (P4); ne proglašavaj WCAG ili SEO usklađenost.

## Na kraju
Sačuvaj obavezne rezultate i ažuriraj `PROJECT_STATUS.md`. Ako je aktivna `POKRENI ETAPU A`, **automatski nastavi na P1F** bez međustopa, dodatne korisničke poruke ili posebnog faznog izvještaja. Ako je korisnik tražio samo ovu imenovanu fazu, ovdje stani. Pri stvarnom blokatoru evidentiraj razlog i ne proglašavaj fazu završenom.
