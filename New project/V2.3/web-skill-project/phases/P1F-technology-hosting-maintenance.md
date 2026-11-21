# P1F — IZBOR TEHNOLOGIJE, HOSTING, BIH I ODRŽAVANJE


**Cilj:** Odabrati najjednostavniji održiv web stack po stvarnom briefu, dostupnom hostingu i osobi koja će održavati sajt; uključiti kontekst BiH bez izmišljanja pravnih zahtjeva.

**Ulaz:** `MASTER.md`, `PROJECT_STATUS.md`, `research/notes-1D.md` (arhitekture i sigurnosne granice), `research/notes-1E.md` (performanse/SEO), relevantni `specs/skill-spec.md` i P0 audit. Prethodne dokumente čitaj selektivno.

**Zajednički format nalaza:** bitni rizici/preporuke imaju P0/P1/P2, LIGHT/STANDARD/FULL ili „svi režimi“, uvjet/N/A, preventivnu odluku, provjeru, dokaz i odredište P1G/P2/P3 — prema MASTER §7; ne pravi tabelu za trivijalno.

**Dubina:** **FOCUSED** za izbor tehnologije i rutinski hosting; **DEEP** samo za nerazriješenu P0/P1 dilemu ili lokalnu/pravnu/regulatornu tvrdnju. Za ažurnost platformi, deploymenta, licenci i lokalnog prava traži službene izvore. Poređenje tehnologija neka bude kratka odlučiva matrica za BiH SMB, ne šest jednako dugih eseja; pravne tvrdnje ostaju pitanja za stručnu potvrdu.

## Tehnologija [MUST]
1. Uporedi **HTML/CSS/JS, Astro, React SPA, Next.js, WordPress i najmanje jednu kategoriju no-code/hosted buildera**. Opiši: kad je prikladno, kad nije, stvarni JS/deploy/hosting zahtjevi, održavanje, sadržaj koji klijent uređuje, lock-in, sigurnost dodataka, trošak i buduće proširenje.
2. Razlikuj: statička brošura, stranica s formom, blog s redovnim uređivanjem, CMS, više jezika, rezervacije, trgovina, korisnički računi. Nemoj preporučiti kompleksan backend kada postoji siguran jednostavniji servis.
3. Izbor frontend frameworka nije estetska odluka. Definiši kontekstualno stablo pitanja: sadržaj/statika → način uređivanja → integracije → SEO/rendering → hosting → budžet/održavanje.
4. Za WordPress navedi sigurnost ažuriranja, dodataka i odgovornosti za održavanje; za no-code navedi ograničenja prilagođavanja, izvoza i privatnosti bez pretpostavljanja istih za sve platforme.
5. E-commerce i računi ne znače automatski „napravi sam“: prepoznaj prag za provjerenu platformu/specijalistu.

## Hosting i deployment [MUST]
1. Shared hosting/cPanel, Apache `.htaccess`, Nginx, statički CDN hosting, serverless i hosting koji zahtijeva runtime. Provjeri gdje se konfiguracija primjenjuje (server/proxy/CDN), ne izmišljaj podršku konkretne ponude.
2. HTTPS/TLS, certifikati, HSTS uvjeti, security headers, cache-control, redirects, domen/DNS, backup/restore, monitoring, upload/deploy i rollback. Razlikuj konfiguraciju predloženu u kodu od **stvarno deployane** konfiguracije.
3. Hosting bez server-side funkcija: kako forms-as-a-service ili odgovarajući endpoint mijenjaju tok podataka, ko prima i zadržava podatke; poveži s P1D, ne dupliciraj sigurnosni vodič. Za kontakt-formu razmotri `mail()` / SMTP / form servis i realnu dostavu e-pošte: domen/DNS, SPF/DKIM (a prema potrebi DMARC), provider ograničenja, rizik spam foldera, test isporuke pri deployu, logovanje bez osjetljivih podataka i ko održava poštanski tok. **Prihvaćen API zahtjev ne dokazuje dostavljen e-mail**; bez stvarne provjere status je NOT TESTED.
4. Kako dokumentovati implementaciju da je drugi programer može preuzeti ili klijent može mijenjati tekstove, slike, radno vrijeme, usluge bez razbijanja layouta?

## Lokalni kontekst BiH [MUST]
1. Latinica i eventualna ćirilica, font glyph coverage (`č ć đ š ž`, ćirilični test samo kada relevantan), HTML `lang`, višejezične verzije i dužina prevedenih fraza.
2. Telefoni/pozivni brojevi, `tel:`, `mailto:`, međunarodni format kada relevantan, kontakt-podaci iz jednog izvora, adrese, radno vrijeme, lokalna valuta i datumi. Ne izmišljaj poslovne podatke.
3. Lokalni SEO, Google Business Profile gdje primjenjivo, lokalni structured data, Maps embed kao treća strana (provjeriti dopuštenu upotrebu/uvjete i privatnost, ne samo iframe), alternativa običnim linkom, Viber/WhatsApp deep link i njegov fallback; njihove aktuelne URL sheme provjeri na službenim izvorima prije stavljanja u skill.
4. Self-hosted fontovi kao privacy/performans odluka (ne univerzalna pravna garancija). Treće strane: analitika, Maps, font servisi, chat widgeti, kolačići i tokovi podataka.
5. Konkretna pravila privatnosti i zaštite podataka u BiH/GDPR primjenjuju se prema jurisdikciji i stvarnoj obradi: provjeri **aktuelne službene propise/institucije**, odvoji pravno pitanje od implementacijskog minimuma; gdje treba stručnjak, navedi jasno. Ne tvrdi „GDPR automatski važi svima“.

## Održavanje i vlasništvo [MUST]
- Ko uređuje tekst i slike (klijent, autor ili agencija), učestalost izmjena, potreba za CMS-om, dokumentacija i obuka.
- Vlasništvo domene/hostinga i DNS-a, pristupi i **sigurna predaja klijentu** (bez upisivanja lozinki/tajni u research/ZIP), prenosivost, licence, sigurnosna ažuriranja, backup/restore, e-mail domena i formulara, troškovi, buduće višejezično proširenje.
- Održivost bez overengineeringa: šta pripremiti danas, a šta tek kada se pojavi potreba.

## Izlaz
`research/notes-1F.md`: matrica tehnologija (situacija → izbor → alternative → tradeoff), stablo odluke za brief, hosting/deploy napomene, kontrolna lista BiH pitanja i relevantnih službenih izvora, upute za održavanje, signali eskalacije, prijedlozi za `references/technology-selection.md` i relevantne dijelove `security.md`/`accessibility-seo.md`. Status projekta.

## Gotovo kada
Postoji praktičan kriterij za izbor stacka i hostinga koji ne pretpostavlja budžet; BiH specifičnosti su obrađene bez pravnih halucinacija; jasno je ko i kako održava stranicu; izvori i izuzeci su dokumentovani.

## Ne radi
Ne kupuj hosting, domene, licence ili usluge; ne konfiguriraj produkciju; ne vrši pravnu analizu umjesto stručnjaka; ne otvaraj račune i ne mijenjaj tuđe resurse. Ne prelazi P1G.

## Na kraju
Sačuvaj obavezne rezultate i ažuriraj `PROJECT_STATUS.md`. Ako je aktivna `POKRENI ETAPU A`, **automatski nastavi na P1G** bez međustopa, dodatne korisničke poruke ili posebnog faznog izvještaja. Ako je korisnik tražio samo ovu imenovanu fazu, ovdje stani. Pri stvarnom blokatoru evidentiraj razlog i ne proglašavaj fazu završenom.
