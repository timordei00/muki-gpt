# P1C — DIZAJNERSKI IDENTITET, UI/UX I ANIMACIJE


**Cilj:** Istražiti **pozitivan, ponovljiv proces** za prepoznatljiv dizajn različitih poslovnih klijenata bez generičkog AI izgleda, uz upotrebljivost, smislen sadržaj i interakcije. Ovo nije lista zabranjenih dekoracija.

**Ulaz:** `MASTER.md`, `PROJECT_STATUS.md`, relevantni dijelovi `specs/skill-spec.md`; `research/notes-1A.md` (okidači za pre-mortem) i iz `notes-1B.md` samo arhitektonska ograničenja. Ne traži postojeće web skillove; sačuvaj samostalan pregled primjenjivih principa boja, identiteta i animacija.

**Zajednički format nalaza:** bitni rizici/preporuke imaju P0/P1/P2, LIGHT/STANDARD/FULL ili „svi režimi“, uvjet/N/A, preventivnu odluku, provjeru, dokaz i odredište P1G/P2/P3 — prema MASTER §7; ne pravi tabelu za trivijalno.

**Dubina:** **FOCUSED** za ustaljena dizajnerska pravila; **DEEP** ako je važan sporan nalaz o psihologiji, dokazima UX-a ili postupku stvaranja jedinstvenosti. Primarne izvore koristi kada se tvrdnja predstavlja kao istraživački dokazana, a ne kao dizajnerska smjernica.

## Pitanja [MUST]
1. **Creative brief:** šta znati o publici, djelatnosti, lokalnom kontekstu, cilju, tonu, brendu, realnim fotografijama, tekstovima, konkurenciji i ko uređuje sadržaj? Koje informacije treba pitati klijenta (najviše pet pitanja koja materijalno mijenjaju odluke), koje smiju ostati označene pretpostavke?
2. **Proces identiteta:** brief → jedna centralna vizuelna ideja → vizuelni jezik → tipografija → paleta/tokeni → kompozicija/hero → CTA i tokovi → validacija. Pokaži kako se iz stvarnog konteksta izvodi ideja, a ne iz univerzalnog predloška.
3. **Pozitivna diferencijacija:** kako stvarni brief mijenja kompoziciju restorana, advokata, klinike, radionice i drugih usluga (raspored, gustoću, tonalitet, fotografiju, hero, navigaciju)? Razlikovanje se izvodi iz identiteta *trenutnog klijenta* i dostupnog projekta/sesije, ne iz uvida u tuđe privatne projekte niti kroz novitet radi novosti. Ne dodavati originalnost koja narušava upotrebljivost. Oznake poput 01/02/03 nisu zabranjene, nego moraju imati stvarno značenje.
4. **Vizuelne osnove:** hijerarhija, Gestalt, grid, whitespace, tipografska skala, ritam razmaka, kontrast, informacije iznad/preko pregiba, jasni CTA, čitljivost, predvidljiva navigacija i obrazloženje 60/30/10 kao opcije, ne zakona.
5. **Content-first UX:** rad s dugim/praznim stvarnim tekstom, kartice različite dužine, stranice bez fotografija, cijene samo kada ih klijent potvrdi, lokalizacija i ton bez generičkih tvrdnji.
6. **Interakcije i stanja:** hover, focus, active, disabled, pending, success, error, empty, offline, touch i tastatura. Nema dekorativne „interaktivnosti“ bez svrhe. Forme moraju imati razumljiva stanja, ali sigurnosnu implementaciju istražuje P1D.
7. **Animacije:** kada pomažu orijentaciji/povratnoj informaciji, kada smetaju; CSS, Intersection Observer, scroll-driven i View Transitions gdje su opravdani. Poštovati `prefers-reduced-motion`, ne blokirati interakciju, paziti na `transform`/`opacity`, layout/scroll performanse i slabije uređaje. Podršku funkcija provjeriti.
8. **Autentičnost i prava:** ne izmišljati logo, fotografije osoblja, licence, izjave klijenata, broj projekata ili certifikate. Za fotografije, ikone, fontove i druge vizuelne resurse evidentiraj porijeklo, dozvolu/licencu, uvjete atribucije i ograničenja komercijalne upotrebe; nepotvrđeno ne tretiraj kao slobodno za objavu. Pravne dileme označi za stručnu potvrdu, ne kao gotov pravni savjet. Ako podaci nedostaju, označiti i tražiti potvrdu prije produkcije.
9. **Radno testiranje dizajna (plan, ne izvršenje):** vizuelna raznolikost, zadatak za korisnika, pronalaženje CTA, čitljivost, responzivnost, smanjen pokret, kvalitativni pregled. Razlikovati subjektivnu ocjenu od provjerenih mjerenja. **Korisnički feedback:** kako iz prigovora „izgleda generički“ ili „dugme skače na hover“ izdvojiti objektivnu UX grešku, ograničenje konkretnog brenda ili lični ukus. Ne usvajati subjektivnu zabranu kao univerzalno pravilo skilla bez dokaza. Za budući stvarni sajt procijeni **renderovani izgled**, ne samo čitljivost CSS-a; ako alat za vizuelni pregled nije dostupan, rezultat je `NOT TESTED`, ne tvrdnja da je estetika potvrđena.

## Analiza izvora [MUST]
Potraži kvalitetne postojeće UX smjernice i sinteze (npr. Nielsen Norman Group, W3C WAI, web.dev, službena dokumentacija platforme); kritički razdvoji dokaz, heuristiku i estetski ukus. Kada izvor nije otvoren, ne pripisuj mu pravilo. Ne istražuj ponovo CSS tehniku koja je već obrađena u P1B.

## Ponovna upotreba ilustracija i vlasništvo [MUST]
Ako prikazuješ konkretan dizajnerski pre-mortem, koristi **ista dva postojeća fiktivna briefa iz `research/notes-1A.md`**, a ne nove improvizovane briefove. Primjeri su ilustracije, ne evaluacija; P6/P7 ih ne koriste. P1C je **vlasnik nacrta** za `references/design-process.md`; P3 ga piše iz `notes-1C.md`, uz doprinos `notes-1B.md` samo za layout ograničenja. Svaki važan rizik navedi sa P0/P1/P2, režimom, uvjetom, prevencijom, predviđenom provjerom i dokaznim statusom prema MASTER §7.

## Izlaz
`research/notes-1C.md`: kratak pozitivni „design direction“ algoritam, primjer dva *različita* vizuelna pravca za **dva već sačuvana briefa iz P1A** (označeno ilustracija), matrica `odluka | na čemu se temelji | kada ne važi | kako provjeriti | dokaz`, pravila dizajna/interakcija/animacija, pitanja za klijenta, pravila protiv generičnosti, **sažet prijedlog sadržaja za `references/design-process.md` (piše P3)**, otvorena pitanja za P1G/P3. `PROJECT_STATUS.md`.

## Gotovo kada
Postoji sažeta procedura koja kreira različit identitet na osnovu klijenta; kada ne postoje materijali, AI ne izmišlja njihovu autentičnost; UX/animacije ostaju pristupačne; preporuke su dokazno označene i ne ponavljaju nepotrebno iste principe u vlastitim referencama.

## Ne radi
Ne kreiraj vizualne mockupove ili demo web-stranice, ne mjeri stvarne UX metrike, ne kopiraj sadržaj s tuđih sajtova, ne donosi konačne WCAG pragove (P1E), ne prelazi P1D.

## Na kraju
Sačuvaj obavezne rezultate i ažuriraj `PROJECT_STATUS.md`. Ako je aktivna `POKRENI ETAPU A`, **automatski nastavi na P1D** bez međustopa, dodatne korisničke poruke ili posebnog faznog izvještaja. Ako je korisnik tražio samo ovu imenovanu fazu, ovdje stani. Pri stvarnom blokatoru evidentiraj razlog i ne proglašavaj fazu završenom.
