# SPECIFIKACIJA GOTOVOG SKILLA — web-professional-standards

> **STATUS: NORMATIVNI NACRT V2.3 — NIJE IMPLEMENTIRANO NI TESTIRANO.** Objedinjen iz ranijih nacrta i revizija; P1G može u `research/notes.md` evidentirati usvojene implementacijske delte prema MASTER §2. Oznake **[P1G]** i **[P3]** označavaju buduće odluke izvršioca, a ne gotove rezultate.

## 1. Svrha
Skill je **samostalan orkestrator procesa kvaliteta** za poslovne web-stranice. Njegove reference pokrivaju potrebne principe boja, layouta, animacija i predviđanja grešaka bez zahtijevanja korisnikovih drugih web skillova. Za svaku stvarnu izradu: razumjeti brief → izabrati režim → odabrati tehnologiju i vizuelni pravac → **predvidjeti rizike iz projekta (prije kataloga)** → implementirati → provjeriti → pošteno izvijestiti.

## 2. Aktivacija i obim
- `SKILL.md` je na engleskom, cilj oko 100–200 linija (orijentaciono; prati stvarna ograničenja platforme iz P0). Glavni fajl opisuje samo proceduru; detalji idu u `references/` (progresivno učitavanje).
- `name`/`description` moraju zadovoljiti **dokumentovana** ograničenja platforme (P0). Kandidati za EN/BS okidače: `website`, `landing page`, `business website`, `HTML`, `CSS`, `frontend`, `React`, `stranica`, `sajt`, `web stranica`, `izrada web stranice`, `web stranica za firmu`.
- **Kada NE koristiti puni proces:** samo objašnjenje web pojma, mali nepovezan kodni isječak, tuđi kod bez zahtjeva za izmjenom sajta. Izbjegni preširoku aktivaciju na samu riječ „CSS“ ili „HTML“ bez konteksta web-projekta ako platforma to dozvoljava.
- Ne obećavaj automatsku aktivaciju dok nije `VERIFIED` u Etapi B. `SKILL.md` mora sadržavati i **ručni poziv** po imenu.
- Prvi korak svake aktivacije je **izbor režima** (odjeljak 3), izrečen u jednoj liniji uz razlog.

## 3. Režimi rada
Režim se bira po **najvećem stvarnom riziku zahvata**, ne po veličini koda ili ključnim riječima.

| | **LIGHT** | **STANDARD** | **FULL** |
|---|---|---|---|
| Kada | Lokalna izmjena/bug bez diranja kritičnih tokova | Nova sekcija/mali statički sajt, obična forma sa sigurnim servisom, upravljani CMS bez vlastitog backend koda | Kompleksan klijentski sajt, vlastiti backend/autentifikacija/plaćanja, obrada osjetljivih podataka, značajna migracija ili regulisani kritični tokovi |
| Brief | Šta se mijenja i šta to dira | Brief-lite (cilj, publika, sadržaj, forma/integracije, ko uređuje) | Puni brief (odjeljak 8, korak 1) |
| Analiza rizika | „Šta ovo dira?“; samo rizici koje zahvat stvarno dira (ne forsiraj broj) | Samostalni rizici iz briefa prije kataloga, kratko; samo oni koji mijenjaju odluku | Po komponentama/tokovima/scenarijima; detaljan pre-mortem; adversarial prolaz |
| Dizajn | Poštuj postojeći sistem | Kratka dizajnerska odluka (token + jedan karakterističan element) | Puni dizajnerski pravac prije koda (odjeljak 6) |
| Provjere | Ciljane provjere + critical floor za dodirnuto | Relevantne automatske i ručne provjere + floor | QA + vizuelni/ručni pregled + regresije + isporuka |
| Izvještaj | Kratki (odjeljak 12) | Standardni | Puni |
| Reference | Samo potrebne | Sigurnosna ako su forme/podaci; ostalo po potrebi | Sve relevantne, po koracima |

- **Critical floor (odjeljak 5) i P0 rizici važe u sva tri režima.** Prilagođava se broj rizika i dubina analize, ne zaštita od P0 klasa.
- **Eskalacija usred posla:** ako se u toku rada otkrije element koji spada u višu klasu (npr. „mali bug“ je u handleru forme), eskaliraj za dodirnuti dio; zapiši razlog. **Ne spuštaj režim bez razloga** (npr. korisnik sužava obim) i ne spuštaj nikad ispod floor-a.

### 3.1 Automatska eskalacija
| Okidač (element briefa ili zahvata) | Minimum | Obavezno učitati |
|---|---|---|
| Forma koja šalje podatke, newsletter, rezervacija, upload | STANDARD | sigurnosna referenca, referenca za forme |
| Upravljani CMS, admin pristup ili više urednika (bez vlastitog backend koda) | STANDARD; FULL kad je vlastita autentifikacija, privilegije ili složena integracija | sigurnosna, održavanje |
| Novi/dodirnuti kontaktni tok, kolačići/analitika ili nova/promijenjena third-party integracija | STANDARD; **već prisutna i nedodirnuta integracija sama ne eskalira LIGHT izmjenu**, osim ako izmjena može uticati na njen tok ili kritični minimum | sigurnosna, privatnost (pitanje za stručnu potvrdu) |
| Osjetljivi podaci koje sajt sam obrađuje ili čuva | FULL + granica specijaliste/platforme | threat model, sigurnosna, privatnost i stručna potvrda |
| Regulisane tvrdnje ili kritični procesi (zdravlje, pravo, finansije i sl.) | FULL za materijalne tvrdnje/obradu; STANDARD za samo opće informativno predstavljanje uz stručnu potvrdu sadržaja | autentičnost/sadržaj, pregled stručnjaka |
| Plaćanja, e-trgovina, korisnički računi | FULL + procjena granice; STANDARD samo za ograničenu integraciju koja u cijelosti delegira osjetljiv tok provjerenoj hostovanoj platformi, uz dokumentovanu odgovornost | sigurnosna; platforma/specijalista i obavezan pregled integracije |
| Migracija postojećeg sajta (URL-ovi, SEO, sadržaj) | STANDARD; FULL ako je velika | SEO/preusmjeravanja, regresije |
| Više jezika ili pisama | STANDARD | sadržaj, dijakritici |

FULL se određuje prema **stvarnoj** kompleksnosti i riziku (broj komponenti i tokova, posljedica greške, nepoznanice), ne samo prema ključnim riječima. U dvosmislenom slučaju izaberi viši režim i reci zašto, ili postavi jedno pitanje koje razrješava dilemu.

**Granica jednostavnog pristupa [P1G finalizira signale; P1A predlaže]:** računi, plaćanja ili osjetljivi podaci; potreba za autentifikacijom i autorizacijom; zakonski regulisana obrada; zahtjevi za visokom dostupnošću; kompleksna integracija s vanjskim sistemima. Kada se prepozna, navedi to i preporuči odgovarajuću platformu ili iskusnog specijalistu umjesto improvizacije.

## 4. Redoslijed odlučivanja pri sukobu
Sigurnost, funkcionalnost i pristupačnost prvo se pokušavaju zadovoljiti **zajedno**. Ako nije moguće, transparentno opiši kompromis i posljedicu; ne ignoriši kritični zahtjev. Estetske preferencije, pravila specijalizovanog skilla i želje za animacijom ne nadjačavaju te zahtjeve.

## 5. Kritični minimum (critical floor) — kontekstualno
Primjenjuje se **prema onome što projekat i komponenta stvarno sadrže**. Grupisane neprimjenjive stavke zabilježi u **jednoj kratkoj napomeni** s razlogom; ne zahtijevaj zaseban `N/A` red po oblasti u LIGHT režimu. Pragovi i kriteriji: **[P1G]**.

| Oblast | Primjenjuje se kad | Minimum |
|---|---|---|
| Responzivnost | Uvijek za vizuelne izmjene | Bez neprihvatljivog horizontalnog overflowa na standardnim i neuobičajenim širinama (uključujući 320 px); bez gubitka sadržaja/funkcije pri reflowu, zoomu, povećanom tekstu i razmaku teksta; provjeri stanja: otvoren meni, greška forme, dug tekst, nedostajuća slika. Overflow se testira na **stvarnim stranicama sa sadržajem**, ne praznom DOM-u |
| Forme | Postoji forma | Jasno označena polja, tastaturna upotreba, razumljive greške, odbrana od višestrukog slanja i lažnog uspjeha; klijentska validacija nije zamjena za server-side |
| Sigurnost | Uvijek; dubina prema funkcijama | Bez tajni u browser bundleu; HTTPS na produkciji; bez nesigurnog mixed contenta; konfiguracija odgovara korištenim funkcijama |
| Pristupačnost | **Svaki sajt**; specifične interaktivne provjere samo kad kontrole postoje | Semantička struktura, čitljivost i kontrast za sav sadržaj; za kontrole tastaturna navigacija, vidljiv fokus, odgovarajući upravljački obrasci; blokirane osnovne funkcije su P0 |
| Sadržaj | Uvijek | Bez izmišljenih recenzija, certifikata, adresa, telefona ili stručnih tvrdnji; ispravan `lang`; podrška za `č ć đ š ž`; radni `tel:`/`mailto:` gdje su prisutni |
| Vjerodostojnost | Koristi se medij/font/ikona/mapa/obrada podataka | Prava korištenja provjerena i zabilježena; privatnost i obrada prema kontekstu uz pravnu potvrdu |

- **LIGHT:** floor se primjenjuje na dodirnuto i na invarijante koje zahvat može narušiti. P0 problem uočen u blizini ne ignoriši: prijavi ga (nije nužno da ga popraviš ako je izvan obima).
- Sumnja da je nešto P0 rješava se u korist višeg prioriteta, uz obrazloženje.

## 6. Identitet brenda i dizajnerski pravac — prije koda
(FULL puno; STANDARD sažeto; LIGHT: poštuj postojeći sistem.)
1. **Ulazi:** postojeći brend (logo, boje, fontovi, ton, fotografije), djelatnost, publika, lokacija, konkurencija koju klijent navede. Nepoznato: pitaj (uklopi u do pet relevantnih pitanja iz koraka 1) ili zapiši pretpostavku; ne blokiraj jednostavne zadatke zbog trivijalnih pitanja.
2. **Jedna pozitivna kreativna ideja** izvedena iz djelatnosti, publike, lokacije i stvarnog brenda. Paleta iz postojećeg brenda ili jasno označen, obrazložen prijedlog (`PREDLOŽENO`). Ako je brend slab ili krši kontrast/pristupačnost, predloži prilagođenu varijantu uz objašnjenje; ne mijenjaj brend tiho.
3. Tipografija s podrškom za bosanske dijakritike (provjeri probnim stringom `č ć đ š ž`); grid i vizuelni ritam; dizajn tokeni; **jedan karakterističan element** koji sajt čini prepoznatljivim.
4. Fotografije/ilustracije opravdane sadržajem i pravima; **ne izmišljaj** logo, ljude, rezultate ni recenzije. Kada nema materijala, koristi vidljive rezervisane oznake.
5. **Razlikovanje od ranijih sajtova:** ako su u istom projektu ili dostupnoj sesiji raniji sajtovi, provjeri da novi razlikuje kompoziciju i hero pristup, ne samo boje. Ne pretražuj privatne ili nepovezane projekte radi poređenja.
6. Pozitivna pravila imaju prednost nad slijepim zabranama. Brojevi `01/02/03`, gradijenti, dekorativne trake i kartice nisu podrazumijevani, ali nisu zabranjeni kada imaju svrhu. Animacije: smislene, diskretne, pristupačne, nikad preduslov funkcionalnosti (poštuj preferencu smanjenog kretanja).
7. **Zapis pravca** (oko 10–15 linija, prije koda): ideja, paleta+izvor, tipografija, tokeni, karakterističan element, pitanja za klijenta.

## 7. Vlastiti rizici PRIJE kataloga
Najvažniji dio skilla: bolje odluke prije koda.

### 7.1 Postupak (leće: **[P1A predlaže, P3 ugrađuje]**)
1. Izvedi rizike iz briefa kroz mali skup leća (privremeno): akteri/podaci/tokovi i granice povjerenja; promjena sadržaja i ljudi koji ga mijenjaju; pad ili promjena vanjskih zavisnosti; rubna stanja (prazno, predugo, greška, sporo, različiti uređaji i asistivna tehnologija); izložene pretpostavke i nepoznanice.
2. Nepoznanica postaje **ili** jedno od najviše pet pitanja klijentu (samo ono koje materijalno mijenja odluku), **ili** zapisana pretpostavka.
3. Svaki rizik se zapisuje strukturirano (7.2). **Tek tada** se otvara katalog (odjeljak 8, korak 4).
4. Selektivnost: rizik ostaje samo ako mijenja važnu odluku (arhitektonsku, implementacijsku ili testnu) i ne može se spriječiti jednostavnije. **P0 rizici ne otpadaju zbog uštede.**
5. Obim (orijentaciono): LIGHT 0–3 dodirnuta rizika; STANDARD nekoliko najvažnijih; FULL po komponentama i scenarijima koliko treba. Nikad kvota.

### 7.2 Zapis rizika (puna polja od STANDARD naviše)
`ID | Porijeklo | Okidač u briefu | Mehanizam (uzrok) | Posljedica za klijenta | Prioritet P0/P1/P2 | Prevencija | Provjera | Invarijanta / okidač ponovne provjere | Status dokaza`

**LIGHT:** najviše jedna **kratka linija po relevantnom riziku**: `okidač | prevencija | provjera` (ako je P0, navedi i posljedicu/prioritet). Bez prisilne tabele od deset polja. **STANDARD/FULL:** puni zapis samo za stvarno relevantne rizike; ne popunjavaj polja generičkim tekstom.

**Test specifičnosti:** rizik prolazi kao samostalna analiza samo ako navodi element briefa koji ga okida, mehanizam, posljedicu, prevenciju i provjeru. Rizik koji bi stajao u svakom briefu je **stavka kataloga**, ne samostalna analiza. Zapis `Okidač u briefu` mora upućivati na stvarnu rečenicu ili odluku iz briefa/pretpostavke.

### 7.3 Porijeklo — pravilo i slučajevi
Samostalna analiza se zapisuje **prije** konsultovanja kataloga; dokazuje se redoslijedom u dokumentu (bez kriptografskog hasha). Blok „A: samostalni rizici“ se poslije pregleda kataloga **ne uređuje**; ispravke idu kao datirana napomena. Katalog i kasnija otkrića idu u odvojene blokove (B, C) tako da se A može zamrznuti odvojeno.

| Slučaj | Oznaka |
|---|---|
| Rizik zapisan u A, a katalog ima istu stavku | `SAMOSTALNO` (uz napomenu „potvrđeno katalogom“) |
| Katalog potvrdi nešto što nije bilo zapisano prije pregleda | `KATALOG` (sjećanje „da sam i ja to mislio“ ne računa se) |
| Rizik preformulisan nakon kataloga | Izvorni tekst u A ostaje `SAMOSTALNO`; ako je katalog donio **novi** mehanizam ili posljedicu, taj dio je novi zapis `KATALOG` |
| Rizik nađen u implementaciji, testu ili kasnije | `OTKRIVENO KASNIJE` — nije bilo predviđeno; uz zapis: koja leća ili korak procedure ga je propustio |

Pravilo može dorađivati P1A/P3 bez promjene značenja: samo što je zapisano prije kataloga je predviđeno.

## 8. Proces za novu stranicu (FULL; LIGHT/STANDARD kraće)
| # | Korak | LIGHT | STANDARD | FULL |
|---|---|---|---|---|
| 0 | **Režim** i okidači eskalacije | 1 linija | 1 linija | 1 linija + razlog |
| 1 | **Brief:** stvarni poslovni cilj, publika, sadržaj, brend, funkcionalnosti, hosting, ko uređuje, lokalni kontekst (dijakritici, pisma, formati, radno vrijeme, naplata). Najviše pet prioritetnih pitanja; ostalo je zapisana pretpostavka | šta mijenjamo | brief-lite | puni |
| 2 | **Arhitektura i dizajn:** tehnologija (najjednostavnija pouzdana), struktura sadržaja i komponenti, održavanje, dizajnerski pravac (odjeljak 6) | postojeće | kratko | puno |
| 3 | **Samostalni rizici prije kataloga** (odjeljak 7) | „šta ovo dira?“ | nekoliko | po komponentama/tokovima |
| 4 | **Katalog kao kontrola** (vlastiti katalog kao dopunska provjera): za svaku stavku okidač → relevantno? → zapis s porijeklom | samo relevantno | relevantno | cijeli relevantni dio |
| 5 | **Adversarial review plana** — odvojen prolaz sa zadatkom pobijanja; unaprijed fiksirani pravci: **jednostavnost** (šta se može ukloniti), sigurnost, pristupačnost, održavanje i promjena sadržaja, autentičnost, stvarna ograničenja klijenta (hosting, budžet, ko uređuje). Svaki prigovor mora imati konkretan scenarij. Ishod: plan se mijenja / prigovor se odbacuje uz razlog / pita se klijent ili specijalist. Stani kad nema novog P0/P1 prigovora ili kad je ponovljen isti pravac | preskoči ili jedna rečenica | kratko (2–3 pravca) | puno |
| 6 | **Implementacija:** semantički, fluidan, održiv kod bez nepotrebnih biblioteka; sadržaj odvojen od prezentacije gdje je izvodivo | da | da | da |
| 7 | **Automatizovane provjere** relevantne projektu; zabilježi stvarne rezultate i ograničenja | ciljane | relevantne | cijeli skup |
| 8 | **Ručni/vizuelni pregled stvarno renderovanog sajta**: izgled prema pozitivnom dizajnerskom pravcu, čitljivost, responzivnost i stanja; bez dostupnog browsera/slike označi `NOT TESTED`, nikad izmišljeni pregled | dodirnuto | ključni tokovi | svi tokovi + stanja |
| 9 | **Regresija** nakon izmjena (invarijante i okidači iz zapisa rizika) | dodirnuto | okidači | puna |
| 10 | **Isporuka i izvještaj** (odjeljak 12) | kratki | standardni | puni |

- **Kapije prije isporuke (svi režimi prema dodirnutom obimu):** nijedan neriješen P0 u obuhvaćenom glavnom toku; svaki otvoreni P1 je poznat i dokumentovan s rizikom, odgovornom osobom i planom ili eksplicitnim odobrenjem. Neizvršena obavezna provjera ne može se tretirati kao PASS ili potpuno gotova produkcijska isporuka.
- **Popravak uzroka, ne simptoma:** greška se zapisuje kao uzrok + je li bila predviđena (porijeklo `OTKRIVENO KASNIJE`) + koja provjera je sada hvata. Skrivanje simptoma (npr. `overflow: hidden` preko preliva) nije popravak.
- **Prediction freeze** (formalno zamrzavanje predviđanja prije implementacije, odvojeno sačuvano) obavezan je **samo** u demonstracijskoj/nezavisnoj evaluaciji skilla (Etapa B), ne pri svakoj klijentskoj izmjeni.

## 9. Samostalne reference i progresivno učitavanje
- P0 provjerava format **novog** skilla i mogućnost spremanja, ali **ne inventariše niti čita korisnikove postojeće web skillove**.
- `SKILL.md` sadrži tabelu `korak → vlastita relevantna referenca → uslov učitavanja`; učitaj samo sadržaj potreban za konkretni brief/režim.
- **Tačna mapa vlasništva tema u finalnom skillu** (P3 smije objediniti fajlove, ali tada mora ažurirati stvarnu mapu u `SKILL.md`): forma/endpoint/validacija servera → `security.md`, UI/QA forme → `quality-gates.md` i `testing.md`; threat modeling → `predictive-engineering.md` + `security.md`; privatnost/third-party → `security.md` + `technology-selection.md`; održavanje/handover → `technology-selection.md` + `quality-gates.md`; autentičnost sadržaja i licence vizuala → `design-process.md`; nakonprojektne pouke → `improvement-loop.md`. Ne pozivaj se na nepostojeće `forms.md`, `privacy.md` ili `maintenance.md` osim ako su stvarno napravljeni i upisani u mapu.
- `quality-gates.md` i `testing.md` zadrži kao **stabilne postojeće putanje** jer ih P4 obavezno čita; druge neobavezne reference smiju se spojiti ako mapa upućuje na stvarni fajl.
- Ovaj skill sam vodi **proces, redoslijed, dizajn, layout, animacije, projektno specifičnu analizu rizika, katalog kao backstop i QA kapije**. Detalji su u njegovim kratkim referencama.
- U konfliktu između vlastitih preporuka primijeni sigurnost, funkcionalnost, pristupačnost i kontekst (MASTER §7); ne kreiraj duple autoritete.
- Ne traži niti kopiraj sadržaj drugih korisnikovih skillova.

## 10. Stvarna funkcionalnost
- Svaka forma, dugme, CTA, link i integracija **radi** ili je **vidljivo označena** (`DEMO — nije povezano`). Nema inertnih/mrtvih CTA linkova (npr. `href="#"` koji ne otvara sadržaj), nema lažne potvrde slanja forme. Namjerno `#id` sidro je legitimno ako odredište postoji i nije prekriveno.
- **Šta je potvrda:** uspjeh se prikazuje tek nakon pozitivnog odgovora stvarnog endpointa/servisa (definiši za svaki servis u zapisu: koji odgovor znači prihvaćeno). Greška, timeout i nedostupnost imaju vidljiv, razumljiv tok i ne gube unos korisnika. „Zahtjev prihvaćen“ nije isto što i „e-pošta isporučena“; piši tačno šta je potvrđeno.
- Provjeri na stvarnom ili sandbox endpointu; ako to nije moguće, `NOT TESTED` u izvještaju.
- Kontakt-podaci (`tel:`, `mailto:`, adresa, mapa, društvene mreže) ukazuju na stvarne, od klijenta potvrđene vrijednosti, jedan izvor istine u kodu.

## 11. Autentičnost, prava, održavanje
**Autentičnost i prava**
- Ne izmišljaj poslovne podatke, kvalifikacije, licence, certifikate, recenzije, reference, cifre ni fotografije. Nepoznato u *radnoj verziji*: jasno označen placeholder (npr. `[POTVRDITI: telefon]`), a ne izmišljeni podatak. **Prije produkcijske isporuke** ne smije ostati lažni ili nedovršeni placeholder; nedostajuća bitna činjenica je blokator objave ili se element mora ukloniti uz korisnikovu potvrdu.
- **Lista za potvrdu klijenta** u izvještaju: sve činjenice na sajtu koje nisu iz briefa.
- Evidencija prava: fotografije, fontovi, ikone, mape/tile (izvor, licenca/uvjeti, ko je odgovoran). Pravne obaveze (privatnost, kolačići, podaci o firmi, regulisane tvrdnje, autorska prava) navedi kao **pitanja za stručnu potvrdu**, ne kao pravni savjet.

**Održavanje i izmjene sadržaja**
- Struktura koja podnosi promjene: sadržaj odvojen od layouta, predviđeni dugi naslovi/tekstovi, različit broj stavki i druge proporcije slike, jedinstven izvor kontakt-podataka.
- Ko uređuje sadržaj i kako (uputa od nekoliko linija u isporuci); šta se mora ponovo provjeriti poslije tipičnih izmjena (iz invarijanti u zapisu rizika; npr. izmjena navigacije → meni, fokus, preliv).
- Zavisnosti minimalne, verzije zabilježene; ko ažurira i šta pada ako se ne ažurira. Poznato o hostingu i domeni navedi samo ako je potvrđeno.

## 12. Izvještaji
Jezik izvještaja: jezik korisnika (bosanski kada korisnik tako piše). **LIGHT:** 3–6 linija (šta je promijenjeno, šta je provjereno, šta nije). **STANDARD/FULL:**
1. Režim i razlog (i eskalacije).
2. Šta je izrađeno i ključne odluke (tehnologija, dizajnerski pravac).
3. Rizici: samostalno predviđeni / katalog / otkriveno kasnije (kratko, bez statističkog ukrašavanja).
4. **Provjere:** tabela stavka | postupak | `PASS/FAIL/WARNING/NOT TESTED` | status dokaza.
5. Funkcionalnost: element | radi (provjereno) / DEMO / NOT TESTED.
6. Čega nema u dokazima: neprovjereno i preostali rizici; sadržaj koji klijent mora potvrditi; prava i pitanja za stručnu potvrdu.
7. Kako mijenjati tekstove i slike; šta ponovo provjeriti.
8. Sljedeći koraci.

Izvještaj ne tvrdi više nego što dokaz podržava.

## 12.1 Naknadno učenje iz grešaka — samo po okidaču
- **Okidači:** nova potvrđena greška, relevantna žalba korisnika na rezultat (uključujući UX/dizajn), neuspjela regresija ili izričit zahtjev `unaprijedi skill`. Ne otvaraj protokol pri običnoj uspješnoj promjeni CSS-a i ne pitaj za feedback pri svakom zadatku.
- **Razlikuj:** projektni bug; opću grešku metode koja se može ponoviti; subjektivnu preferenciju klijenta; promjenu tehnologije/standarda. Ne pretvaraj jednu estetsku preferenciju u univerzalnu zabranu dizajna.
- **Najmanji zapis kandidata:** `okidač/kontekst bez privatnih podataka | potvrđen uzrok ili NEPOTVRĐENO | što je metoda propustila | generalizovana prevencija | ciljna referenca | provjera/regresija | izvor/dokaz | status`. Bez tajni, PII, poslovnih podataka ili čitavog koda iz klijentskog projekta.
- **Vanjski zapis za više sajtova:** spremi sanitizovanog kandidata u `SKILL_IMPROVEMENT_CANDIDATES.md` u **trajnom, korisnikom odobrenom prostoru za održavanje skilla** (ne u pojedinačnom klijentskom projektu i ne u instaliranom/distribuiranom skillu), samo ako je lokacija dostupna i upisiva. Ako takav zajednički prostor ne postoji, ponudi kratku kopirljivu lekciju i ne tvrdi da je sačuvana. Nema automatskog čitanja svih ranijih projekata.
- **Promocija:** samo kada je uzrok dovoljno potkrijepljen, pravilo prenosivo i korisnik odobri izmjenu skilla. **Za potpuno novu propuštenu klasu grešaka prvo poboljšaj uzročnu leću u `predictive-engineering.md`; u `failure-patterns.md` upiši samo kratak kontekstualni backstop ako je opravdan**, da model ne postane puki prepisivač kataloga. Napravi minimalnu verzionisanu izmjenu odgovarajuće reference (ne automatski novo pravilo u `SKILL.md`), napiši ili prilagodi ciljanu regresijsku provjeru, provjeri konflikte i moguća pogoršanja; ako test nije dostupan, označi `NOT TESTED`, a ne `VERIFIED`. Za rizične promjene zadrži prethodnu verziju radi povratka. Kandidat bez potvrde ostaje kandidat, ne službeno pravilo.
- Ovaj postupak ne mijenja model, ne garantuje automatsku aktivaciju i ne pokreće Etapu B dok ona nije izričito tražena. Detaljna procedura u `references/improvement-loop.md` **učitava se samo na okidač**.

## 13. Granice i status
Skill ne garantuje savršenu sigurnost, pristupačnost ni SEO rezultate; automatski testovi ne dokazuju potpunost. Etapa A može isporučiti **napisan ali netestiran** skill (`IMPLEMENTED — VALIDATION PENDING`); aktivacija je dokumentovana, ne `VERIFIED`, do Etape B.

## 14. Otvoreno za naredne faze
| Stavka | Vlasnik |
|---|---|
| Najmanji skup leća, polja zapisa rizika, skaliranje LIGHT/STANDARD/FULL, pravilo porijekla | P1A (prijedlog) |
| Pragovi critical floor-a, signali granice pristupa, konačna eskalacija | P1G |
| Polja stavke kataloga (okidač, uzrok, prevencija, provjera, prioritet, režim, status dokaza) | P2 |
| `description`/metapodaci, tabela korak→referenca, matrica odgovornosti | P3 (uz P0) |
| Struktura i skripte QA | P4 |
| Kratak on-demand feedback protokol, generalizacija novih grešaka i pravila odobrenog updatea | P1A predlaže; P1G bira; P3 piše referencu; P5–P8 provjeravaju kasnije |

## 15. Kriterij stvarne spremnosti
- Razlikuj **preview/demo**, **implementirano ali neprovjereno**, **provjereno u razvojnom okruženju** i **provjereno na produkcionom domenu**. To nisu sinonimi.
- Za izdanja sa formom/podacima provjeri tok podataka i endpoint u stvarno dozvoljenom testnom okruženju prije produkcionog statusa; ne slati stvarne lične podatke u testne servise.
- Izvještaj mora odvojiti potvrdu endpoint prihvata od stvarne isporuke e-pošte i poslovnih rezultata.
