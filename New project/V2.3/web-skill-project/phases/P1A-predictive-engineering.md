# P1A — PREDIKTIVNI INŽENJERING


**Cilj:** Istražiti i odabrati metode kojima skill `web-professional-standards` predviđa i sprječava greške **prije** pisanja koda, te ih pretvoriti u kratku, provjerljivu proceduru prilagođenu malim i srednjim poslovnim sajtovima. Rezultat nisu bilješke o literaturi nego **odluke**: koja metoda, kada, u kolikoj mjeri, gdje zakazuje i kako se iz briefa samostalno izvode rizici prije nego što se otvori katalog grešaka. Ovo je istraživanje i dizajn procedure. Katalog grešaka (P2) i gotov skill (P3) ne nastaju ovdje.

**Ulaz:**
- `MASTER.md`, `PROJECT_STATUS.md`.
- `environment-audit.md` (izlaz P0): šta okruženje stvarno može (pretraga, otvaranje izvora, čuvanje fajlova). **Nije potreban inventar postojećih korisnikovih web skillova**; metoda samostalnog prepoznavanja rizika mora raditi bez njih.
- `specs/skill-spec.md`, samo odjeljci *Režimi rada*, *Kritični minimum*, *Proces za novu stranicu* i *Granice i status*. Radni je nacrt: ako nalaz zahtijeva izmjenu, predloži je u izlazu, ne mijenjaj spec.
- `specs/qa-spec.md` **ne otvaraj** prije prvog samostalnog papirnog prolaza: koristi ga tek naknadno za retro-provjeru, da poznati primjeri ne usmjere početnu analizu.

Ako `environment-audit.md` ne postoji ili P0 nije izvršen, **ne pokreći ni P0 ni ovu fazu naslijepo**: prijavi stanje i čekaj upute. Ako okruženje ne može pretraživati i otvarati izvore, tvrdnje mogu biti samo ASSUMPTION i faza ne smije biti označena kao potpuno završena.

## Dubina
**DEEP** za oblasti 1, 2, 3, 5 i 7 (one određuju kvalitet predviđanja). **FOCUSED** za oblasti 4 i 6 (ustaljene prakse; alatni dio pokrivaju P1E i P4), ali ne površno.

- Za svaku DEEP oblast najmanje tri kvalitetna relevantna izvora, barem jedan primarni (autor metode, standard, službena dokumentacija). **Isti izvor se smije koristiti u više oblasti ako zaista pokriva različite tvrdnje; ne pribavljaj umjetno 15 nepovezanih URL-ova samo radi broja.** Za standarde iza paywalla koristi samo ono što si stvarno otvorio; sadržaj koji nisi vidio ne pripisuj izvoru.
- Metode su stare, ali pretraži aktuelne revizije i savremene kritike (npr. da li se neka praksa još preporučuje ili je zamijenjena).
- **Tragovi za početak pretrage** (iz memorije, dakle ASSUMPTION dok ih ne otvoriš; nisu ograničenje ni popis obaveznih izvora): Klein, *Performing a Project Premortem* (HBR, 2007), i rad o *prospective hindsight* (Mitchell, Russo, Pennington, 1989); IEC 60812 i AIAG-VDA FMEA Handbook; Threat Modeling Manifesto, OWASP Threat Modeling Cookbook, Microsoft dokumentacija za STRIDE, NIST SP 800-30; ISTQB glosar/syllabus (equivalence partitioning, boundary value); IEEE 1044 i IBM Orthogonal Defect Classification; Google SRE Book, poglavlje o postmortemima; HAZOP (IEC 61882) zbog vodećih riječi; istraživanja o samokorekciji jezičkih modela (npr. Huang i dr., 2023). Ako se trag ne može potvrditi, odbaci ga, ne dopunjuj detaljima iz sjećanja.

## Research reuse prije pojedinačnih izvora
Prvo provjeri postoji li kvalitetan pregled literature ili metodologije s jasnom primjenjivošću i ograničenjima; zatim potvrdi ključne tvrdnje u primarnim izvorima. Dodatno istražuj stvarne praznine, kritike i specifičnosti malih poslovnih web-projekata. Ne čitaj više sličnih radova ako ne mijenjaju preporuku.

## Pitanja

### 1. Pre-mortem i FMEA: praktičan izbor [MUST]
1. Šta je svaka metoda u izvornom obliku i šta je o njenoj učinkovitosti **pouzdano poznato**, a šta je samo uvriježeno vjerovanje?
2. Šta se gubi kad se FMEA prenese iz proizvodnje na izradu sajtova? Provjeri kritike numeričkog bodovanja rizika (S×O×D) i savremenu zamjenu, pa odluči treba li skill uopće numeričko bodovanje. Radna hipoteza za provjeru: MASTER-ovi P0/P1/P2 uz pitanje „koja bi provjera ovo uhvatila prije isporuke“. Prihvati ili odbaci uz razlog.
3. Napiši pravilo izbora: kada je dovoljan pre-mortem, kada FMEA po komponentama ili tokovima, kada oboje. Koja je **najmanja verzija** koja i dalje hvata P0 klase?
4. Šta pre-mortem radi lošije kad ga izvodi jedan model bez tima (generičnost, sidrenje na prvi odgovor, optimizam prema vlastitom planu)? Predloži konkretne mjere.
5. [AKO JE RELEVANTNO] Druge metode (HAZOP vodeće riječi, STPA, fault tree): najviše pasus po metodi; zaslužuje li mjesto ili je preskupa za SMB sajtove?

### 2. Threat modeling: samo metoda, ne kontrole [MUST]
1. Koji laki okvir je razmjeran statičkom sajtu, sajtu s formom, CMS-u i sajtu s plaćanjem? Uporedi najmanje pristup iz Threat Modeling Manifesta, STRIDE i misuse/abuse cases; za privatnost provjeri postoji li laka metoda (npr. LINDDUN).
2. Kako se iz briefa u nekoliko linija izvodi minimalni model: akteri, imovina (podaci, reputacija, dostupnost), tokovi podataka i granice povjerenja (preglednik, hosting, servis za forme i e-poštu, treće strane, administratorski pristup)?
3. Kako ocijeniti rizik prema imovini i posljedici za klijenta, a ne prema popisu napada? Kada je nešto P0 po MASTER-ovoj definiciji, a kada nije?
4. Koji signali znače da jednostavan pristup više nije dovoljan i da treba preporučiti platformu ili specijalistu? Predloži signale; konačne pragove usklađuje P1G s nalazima P1D.
5. Kako se izlaz modela upisuje u zapis rizika (oblast 7) tako da P1D kasnije veže konkretne kontrole bez dupliranja?

*Granica prema P1D:* ne istražuj konkretne kontrole (headeri, CSP, validacija, autentifikacija). Ovdje je samo metoda.

### 3. Scenario i granične vrijednosti [MUST]
1. Koje tehnike testnog inženjerstva (equivalence partitioning, boundary value, state transition, decision table, kombinatorika/pairwise, scenariji upotrebe) mogu raditi **prije koda**, nad briefom, dizajnom i sadržajem? Koje gube smisao bez gotovog softvera?
2. Koje dimenzije varijacije su relevantne za poslovni sajt? Polazna hipoteza za provjeru, ne za kopiranje: sadržaj (prazno, predugo, previše stavki, dijakritici), prikaz (širina, zoom, razmak teksta, visina), stanje (učitavanje, greška, prazno, sporo), unos, vrijeme (radno vrijeme, datumi, naknadne izmjene), okruženje (uređaj, mreža, preglednik, asistivna tehnologija, blokatori), integracije (pad, kvota, promjena), ljudi (klijent mijenja sadržaj, više urednika).
3. Kako birati kombinacije bez eksplozije? Odredi pravilo (npr. jedan faktor odjednom plus najopasnije interakcije stanja) i kako se prepoznaje opasna interakcija. Tek **poslije samostalno sačuvanog papirnog prolaza** iz tačke 8 možeš otvoriti primjere u `qa-spec.md` radi retrospektivne provjere; ne prepisuj ih u početnu analizu.
4. Šta lokalni kontekst BiH često otvara u briefu (dijakritici, latinica/ćirilica, formati telefona i adresa, valuta, više jezika, radno vrijeme i praznici, naplata)? Samo kao **pitanja koja brief mora razjasniti**. Pravne i fiskalne obaveze označi kao pitanja za stručnu potvrdu, ne istražuj ih ovdje.

### 4. Analiza uzroka (RCA) — FOCUSED [MUST]
1. Koji postupci (5 Whys, Ishikawa, fault tree, barrier analysis) su opravdani za pojedinačnu web grešku? Poznata slabost svakog? Najmanji postupak koji ne postaje formalnost?
2. **Prospektivna upotreba:** mogu li uzročne klase iz standardnih klasifikacija defekata (npr. IEEE 1044, ODC) organizovati rizike po **uzroku**, a ne po simptomu? Predloži kratku taksonomiju uzroka za web sajtove ili obrazloži zašto je ne treba.
3. **Povratna petlja i generalizacija:** kako se zapisuje nova greška (uzrok, ne samo simptom), je li bila predviđena, a ako nije, koji korak ili leća procedure ju je propustio; kako izdvojiti **prenosivo pravilo iz potvrđenog uzroka** umjesto zakrpe samo za jedan sajt. Razdvoji projektni bug, univerzalni rizik, estetsku preferenciju i promjenu standarda. Predloži **najmanji zapis i okidač** za naknadno ažuriranje skilla uz korisnikovu dozvolu, bez obaveznog token-troška pri svakoj upotrebi. Pravi uzrok i provjeru ne pretpostavljaj bez dokaza.
4. Kako spriječiti da popravak simptoma (npr. skrivanje preliva) zamijeni popravak uzroka?

### 5. Adversarial review plana [MUST]
1. Šta izvori kažu o strukturiranoj kritici plana (red team, devil's advocate, assumption surfacing)? Šta je empirijski podržano, a šta običaj?
2. Šta je poznato o ograničenjima samokritike jezičkih modela (slijepe tačke, potvrđivanje vlastitog plana)? Koje mjere stvarno pomažu: odvojen prolaz sa zadatkom pobijanja, obavezan konkretan scenarij uz svaki prigovor, unaprijed fiksirani pravci napada, vanjski dokaz umjesto uvjerenja?
3. Koji pravci prigovora su relevantni za skill, i u kojem režimu? Obavezno uključi i pravac **jednostavnosti** (šta se može ukloniti; suvišna složenost je rizik), uz sigurnost, pristupačnost, održavanje i promjenu sadržaja, autentičnost sadržaja i stvarna ograničenja klijenta (hosting, budžet, ko uređuje).
4. Pravila ishoda: kada se plan mijenja, kada se prigovor odbacuje uz obrazloženje, kada se pita klijent ili specijalist umjesto nagađanja. Kriterij zaustavljanja da pregled ne postane beskonačan ni skup u tokenima.

*Napomena:* ovo je pregled plana klijentskog projekta u skillu, ne adversarial revizija samog skilla (P8).

### 6. Sprječavanje regresija — FOCUSED [MUST]
1. Koji koncepti su primjenjivi (change impact analysis, odabir regresijskih provjera prema riziku, invarijante, pravilo „greška → provjera koja je hvata“)? Šta izvori kažu o regresijama koje uzrokuju sami popravci?
2. Šta se mora zabilježiti već pri predviđanju da bi izmjena kasnije znala šta ponovo provjeriti: invarijante („šta mora ostati istinito“), zavisnosti i okidač ponovne provjere (npr. izmjena navigacije okida meni, fokus, preliv)? Predloži najmanji format spojiv sa zapisom rizika iz oblasti 7.
3. Šta je najmanji postupak za LIGHT izmjenu („šta ovo dira?“) bez punog pre-mortema?
4. Izmjena sadržaja kao izvor regresije: šta u strukturi smanjuje rizik da klijent kasnije unese dug tekst, više stavki, drugu sliku ili drugi kontakt?

*Granica prema P1E/P4:* ne biraj alate i pragove.

### 7. Od briefa do rizika, tek onda katalog [MUST — jezgro faze]
1. Koji postupci dekompozicije izvlače rizike iz opisa projekta? Pregledaj srodne tehnike (vodeće riječi, dekompozicija na aktere/podatke/tokove/promjene, izlaganje pretpostavki, STPA) i izaberi **najmanji skup leća** koji bez kataloga pokriva P0/P1 klase.
2. Napiši proceduru korak po koraku: za svaki korak ulaz, izlaz i najveći obim po režimu. Mora raditi i na kratkom briefu s rupama: nepoznanica postaje ili jedno od najviše pet pitanja klijentu (objasni kako se bira pitanje koje materijalno mijenja odluku), ili zapisana pretpostavka.
3. **Test specifičnosti i vrijednosti:** kako se razlikuje rizik izveden iz briefa od generičke stavke, i mijenja li taj rizik arhitektonsku, implementacijsku ili testnu odluku? Predloženi uvjet: rizik prolazi samo ako navodi element briefa koji ga okida, mehanizam uzroka, posljedicu za klijenta, prevenciju i provjeru, te razlog zašto je vrijedan preventivne mjere. P0 se nikad ne odbacuje samo radi ekonomije. Rizik koji bi stajao u svakom briefu je stavka kataloga, ne samostalna analiza.
4. **Pravilo porijekla:** samostalna analiza se zapisuje **prije** konsultovanja kataloga (dokazuje se redoslijedom u dokumentu, bez kriptografskog hasha). Za oznake samostalna analiza / katalog / otkriven kasnije definiši slučajeve: rizik nađen i samostalno i u katalogu; rizik koji katalog samo potvrdi; rizik nađen tek u implementaciji ili testu (nije predviđen); rizik koji je preformulisan nakon pregleda kataloga. Zapis mora biti strukturiran tako da se predviđanje može kasnije zamrznuti odvojeno (mehanizam zamrzavanja ne osmišljavaš ovdje).
5. **Katalog kao kontrola:** koja polja stavka kataloga mora imati da bi služila kao kontrola, a ne kao slijepa lista (okidač vezan za element briefa, uzročna klasa, prevencija, provjera, prioritet, režim, status dokaza)? Predloži polja za P2; sadržaj kataloga ne pišeš.
6. **Potpunost bez kataloga:** kako znati da je analiza dovoljno široka (npr. pokrivenost uzročnih klasa i leća, pravilo zaustavljanja)? Iskreno navedi šta se ne može dokazati.
7. **Skaliranje:** koji dijelovi procedure ulaze u LIGHT, STANDARD i FULL, nikad ispod kritičnog minimuma iz specifikacije. Ovo je prijedlog; konačno odlučuje P1G.
8. **Trošak:** orijentacioni obim procedure u `SKILL.md` i šta ide u `references/` zbog progresivnog učitavanja.

## Obavezno pokriti
1. Za svaku metodu **uvjete neuspjeha** (kada vara ili troši resurse uzalud), ne samo kako se primjenjuje.
2. Prilagodbu na SMB sajtove i na ograničenja jednog izvršioca (model, bez tima, bez radionice).
3. Eksplicitnu odluku po oblasti: **uvesti / uvesti prilagođeno / ne uvoditi**. „Ne uvoditi“ je ravnopravan ishod ako je metoda preskupa ili nepotrebno složena.
4. Za svaku glavnu preporuku jednu aktivnu pretragu kritike ili protivdokaza i zapis šta bi preporuku opovrglo.
5. Izvore koji se razilaze: kontekst razlike i obrazložen izbor.
6. Granice prema P1B–P1F i P2: ne ulazi u njihov sadržaj; zabilježi otkrivena preklapanja i pitanja za P1G.
7. Svaki P0/P1 nalaz, bez obzira na dužinu izlaza.
8. **Papirni prolaz i retro-provjeru bez kontaminacije.** (a) Prije otvaranja `qa-spec.md` napiši i sačuvaj proceduru te dva kratka fiktivna briefa (jedan jednostavan, jedan s formom i vanjskom integracijom), i izvedi rizike potpuno samostalno. Zadrži izvorni zapis neizmijenjen. To je ilustracija, **ne test niti dokaz** (INFERRED). Ove **iste** dvije ilustrativne briefove, uz njihove oznake/izvor, smiju ponovo koristiti **P1B i P1C**, ali ne smiju predstavljati nove nezavisne testove. **Nijedan brief niti primjer iz P1A–P1C ne koristi se u P6/P7**. (b) **Tek potom** otvori *Praktične slučajeve* u `qa-spec.md`, uporedi pokrivene klase bez retroaktivnog dopisivanja u početni zapis, identificiraj praznine i stavi predložene izmjene procedure u zaseban blok. Prava nezavisna evaluacija ostaje u Etapi B.
9. Nacrt procedure na engleskom (do oko 40 linija), označen kao **nacrt za P3**, ne kao gotova referenca.

## Izlaz
1. `research/notes-1A.md` na bosanskom, orijentaciono 150–250 sažetih linija, a više samo za značajne P0/P1 nalaze (ne žrtvuj P0/P1 nalaz zbog dužine):
   - Sažetak odluka (do 15 linija): šta uvodimo, šta odbacujemo, najveće neizvjesnosti.
   - Registar izvora: naziv | URL | datum pristupa | primarni da/ne | za koju tvrdnju.
   - Po oblastima 1–7: odluka, razlog, uvjeti neuspjeha, prilagodba za SMB, primjena po režimu, status dokaza, šta bi je opovrglo.
   - Matrica izbora metoda: situacija → metoda → trošak → šta hvata → šta propušta.
   - Procedura brief → samostalni rizici → katalog (koraci, ulazi, izlazi, test specifičnosti, pravilo porijekla).
   - Predloženi format zapisa rizika i polja za katalog (za P2/P3).
   - Prijedlog skaliranja LIGHT/STANDARD/FULL (za P1G).
   - Nacrt procedure na engleskom (nacrt za P3).
   - Rezultat papirnog prolaza i retro-provjere.
   - Kontradikcije i prijedlozi izmjena specifikacija (samo prijedlozi).
   - Otvorena pitanja za P1B–P1G, P2, P3 i lista **NOT TESTED** s razlogom.
2. `PROJECT_STATUS.md` (cilj do 40 linija): `P1A DONE`, `DONE WITH GAPS` ili `BLOCKED`; lokacija izlaza; otvoreni P0/P1 problemi; neprovjereno; sljedeća faza P1B.

## Gotovo kada
- Svaka od sedam oblasti ima odluku s razlogom, uvjetima neuspjeha i statusom dokaza. DEEP oblasti zadovoljavaju pravilo izvora iz MASTER-a, ili je nedostatak izvora izričito naveden.
- Procedura iz oblasti 7 je izvodljiva: neko ko nije pisao ovaj izlaz može je primijeniti na kratak brief bez dodatnih objašnjenja i dobiti rizike koji prolaze test specifičnosti. Papirni prolaz to pokazuje, uz poštene bilješke o koracima koji nisu radili.
- Pravilo porijekla je nedvosmisleno za sva četiri slučaja iz tačke 7.4, a zapis predviđanja može se zamrznuti odvojeno od kasnijih nalaza.
- Retro-provjera navodi koje klase iz `qa-spec.md` procedura izvodi, a koje ne, i šta je urađeno povodom praznina.
- Svaka preporuka iznad nivoa ASSUMPTION ima otvoren izvor; sve ASSUMPTION stavke su izdvojene; kontradikcije među izvorima i prema specifikacijama su zabilježene.
- Predloženi režimi ne idu ispod kritičnog minimuma; P0 rizici ne mogu biti preskočeni ni u jednom režimu.
- Izlazni fajlovi su stvarno sačuvani. Ako nema pristupa projektnim fajlovima, faza nije potpuno završena.

## Ne radi
- Ne izvršavaj zadatke P0 niti P1B **unutar P1A**; nakon dovršetka P1A naredba `POKRENI ETAPU A` dopušta automatski prijelaz na P1B (MASTER §2–3).
- Ne piši katalog grešaka, `SKILL.md`, reference ni QA skripte; ne mijenjaj `MASTER.md`, specifikacije ni P0.
- Ne istražuj sadržaj sigurnosnih kontrola, layouta, dizajna, performansi, hostinga ni QA alata (P1B–P1F).
- Ne pokreći testove, demo projekte, Lighthouse ni A/B poređenja. Ne pravi niti traži skrivene evaluacijske scenarije.
- Ne prepisuj izvore. Ne izmišljaj izvore, autore, brojeve standarda, verzije ni rezultate. Naslov iz memorije je ASSUMPTION dok ga ne otvoriš.
- Ne proglašavaj metodu dokazanom zato što je popularna. Ne obećavaj otkrivanje svih grešaka niti potpunost analize.

## Na kraju
Sačuvaj obavezne rezultate i ažuriraj `PROJECT_STATUS.md`. Ako je aktivna `POKRENI ETAPU A`, **automatski nastavi na P1B** bez međustopa, dodatne korisničke poruke ili posebnog faznog izvještaja. Ako je korisnik tražio samo ovu imenovanu fazu, ovdje stani. Pri stvarnom blokatoru evidentiraj razlog i ne proglašavaj fazu završenom.
