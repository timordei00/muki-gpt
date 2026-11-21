# Specifikacija budućeg skilla · V3

**Predmet:** ponašanje skilla `web-professional-standards` pri izradi i izmjeni profesionalnih web-stranica. [MASTER](../MASTER.md) uređuje razvoj tog skilla. Ovdje su proizvodi rada opisani unaprijed. Učinkovitost će se moći ocjenjivati u Etapi B.

## 1. Ugovor s korisnikom

Kreni od zadatka, postojećeg sajta i stvarnog sadržaja. Odredi ko koristi ili uređuje sajt, koju radnju mora moći završiti i po čemu će se znati da je završena. Prikupi samo podatke koji mijenjaju odluku. Grupiraj najvažnija otvorena pitanja, u pravilu do pet u jednom krugu. Za reverzibilne izbore navedi razumnu pretpostavku i nastavi. Ako nepoznanica odlučuje o obradi osjetljivih podataka, pravima ili nepovratnoj radnji, prvo razriješi taj dio. Poštuj korisnikov stack, identitet, opseg i postojeće konvencije kad zadovoljavaju zahtjeve.

## 2. Dubina prema posljedici promjene

| Režim | Odabir | Rad i vidljivi rezultat |
|---|---|---|
| LIGHT | Lokalna, dobro razumljiva promjena s malim dosegom. | Prati šta promjena zaista dotiče. Zabilježi relevantan par rizik/provjera u jednoj rečenici ako mijenja odluku. Bez obaveznog priloga, globalnog audita ili učitavanja referenci. |
| STANDARD | Nova stranica, složenija sekcija, obrazac s upravljanim servisom, promjena jezika ili ograničena migracija. | Kratak brief, glavni korisnički tok, obrazloženi dizajn i arhitektura. Sačuvaj odluke o bitnim rizicima i ciljane automatske i ručne provjere. |
| FULL | Ozbiljna posljedica, više međuzavisnih stanja ili nejasna odgovornost. Primjeri su vlastite privilegije, novac, osjetljivi zapisi ili migracija s mogućim gubitkom podataka. | Model toka, granice odgovornosti, provjera pretpostavki, oporavak te regresije za kritične prelaze. Dubinu možeš povećati samo za tok koji to traži. |

Ocijeni doseg promjene, mogućnost povratka i učinak na ljude. Postojanje prodavnice ili CMS-a u istom repozitoriju samo po sebi ne proširuje lokalnu izmjenu. Vanjski pružalac usluge može suziti opseg ako domen zaista delegira osjetljivi dio. Vlastita provjera uloge, povratnog događaja ili knjiženja i dalje ima vlastiti rizik. Kad je kapacitet tima ili platforme nedovoljan, utvrdi odgovornu stranu i ograniči isporuku na dokazivo izvediv dio.

## 3. Predviđanje prije kataloga i koda

P1A istražuje tehniku, P1G smije prihvatiti jednostavniju ili bolju. Sljedeći ugovor određuje šta tehnika mora proizvesti.

1. Iz briefa ili postojećeg ponašanja izdvoji korisničko obećanje i **šta mora ostati istinito** poslije promjene. Kod izmjene utvrdi gdje se komponenta koristi te provjeri zajedničke stilove, izvor sadržaja i stanje na kojem se odluka zasniva. Nepročitani kod ostaje nepoznanica.
2. Prati taj uslov od aktera do vidljivog ishoda. Na prijelazu između komponenti, ljudi ili servisa pitaj na šta se jedan dio oslanja i ko može potvrditi rezultat. Razmotri uvjerljivu promjenu sadržaja, redoslijeda, raspoloživog prostora ili povratne informacije. Kombinuj uslove kada dijele podatak, resurs ili trenutak odluke.
3. Ako jedna takva promjena narušava uslov, veži konkretan okidač za uzrok, posljedicu, odluku o prevenciji i opažanje koje bi razlikovalo ispravan od pogrešnog ishoda. Promijeni dizajn ili arhitekturu ako oslonac na pogrešnu pretpostavku dolazi iz plana. Kada jedan mali izbor ukloni cijeli uzrok, zaustavi dalju razradu tog uzroka.
4. Zapiši bitne zaključke prije učitavanja kataloga, njegovog tematskog indeksa ili primjera grešaka. U LIGHT-u dovoljna je kratka radna bilješka u postojećem toku rada. Sačuvaj početno porijeklo i naknadne dopune za veće odluke. U FULL-u pokušaj oboriti najvažniju pretpostavku konkretnim suprotnim scenarijem. Završi kad su bitni tokovi pokriveni odlukom, opažanjem ili eksplicitnom prazninom, a novi prolaz samo ponavlja postojeće odluke.
5. Tek potom po potrebi otvori relevantan dio kataloga. Ako nema primjenjivog okidača ili katalog ne može promijeniti odluku, preskoči ga. Prije pisanja koda zaključi šta se prevenira, šta treba provjeriti i gdje ostaje rizik. Naknadna otkrića smiju popraviti rješenje i ne mijenjaju vrijeme ranije prognoze.

**Porijeklo je odvojeno od valjanosti.** `PROJECT` je zapis izveden iz konkretnog projekta prije kataloga. `CATALOG` je mehanizam ili posljedica prvi put dodana iz kataloga. `LATER` je otkriće tokom implementacije, provjere ili kasnijeg korištenja. Podudaranje s katalogom čuva raniju oznaku. Nova pojedinost dobija novu oznaku, uz vezu na prethodni zapis. Ako su primjeri već bili u kontekstu ili nema traga redoslijeda, označi `PRIOR EXPOSURE` ili `ORDER UNKNOWN` i izostavi tvrdnju o nezavisnom predviđanju. Česta greška i dalje može biti samostalno izvedena iz briefa. Novost u evaluaciji znači da mehanizam nije ponuđen u dostupnom katalogu ili viđenom primjeru, u granicama onoga što evaluator može provjeriti. Formalni odvojeni snimak predviđanja treba tek u B.

## 4. Dizajn, arhitektura i implementacija

Za novi sajt prevedi stvarni cilj, publiku, jezik, materijale i način uređivanja u konkretan vizuelni pravac. Poveži odluku o kompoziciji, tipografiji, paleti, razmaku, fotografiji ili pokretu s onim što posjetilac treba prepoznati ili učiniti. U sažetku navedi bar jednu vezu između obilježja konkretnog brenda i vidljive odluke. Omjeri boja, broj sekcija, hero obrazac i animacije su mogući izbori. Originalnost može nastati iz stvarnog sadržaja, uredničkog ritma ili načina navigacije. Za sitnu doradu sačuvaj prepoznatljivost postojećeg sistema.

Strukturu sadržaja i navigaciju izvedi iz glavnih zadataka. Utvrdi primarnu akciju, razumljive oznake i ishod, uključujući prazno, djelimično, grešku i povratak nakon prekida kad postoje. Preferiraj semantičke elemente i najjednostavniju implementaciju koja ispunjava zahtjeve i radi u podržanim uslovima. Zajednički podatak ima jednog vlasnika. Apstrakciju opravdava stvarna zajednička odgovornost. Pri promjeni postojeće implementacije provjeri stare sadržaje, javne URL-ove i pozivaoce. Razdvoji važnu funkciju od opcionog efekta ili zavisnosti od JavaScripta kada brief to traži.

## 5. Kritični minimum na dodirnutoj površini

| Površina | Uslov isporuke ili obavezna odluka |
|---|---|
| Vizuelna izmjena | Sadržaj, fokus i primarna radnja ostaju dostupni pri relevantnom reflowu, zoomu, promjeni dužine i otvorenim stanjima. Objasni uzrok preliva. Namjerno skrolovanje unutar komponente ima jasan doseg i upravljanje. |
| Sav sadržaj i interakcije | Semantika, jezik, kontrast, razumljive oznake, tastatura i povratna informacija prema stvarnom sadržaju. Provjeri pristup glavnoj radnji, po potrebi i alternativu za pokret, medij ili gest. WCAG 2.2 AA je cilj. |
| Forma, integracija ili trajni zapis | Definiraj šta znači primljeno, obrađeno i dostavljeno, ko može svjedočiti svakom stanju i šta korisnik vidi kad ishod nije poznat. Provjeri validaciju na odgovarajućoj granici, očuvanje unosa i ograničenje ponovljenih posljedica. |
| Podaci, pristup i privatnost | Najmanji potrebni podaci i privilegije, zaštita prijenosa, server provjerava dozvoljenu radnju i resurs, tajne izvan klijenta. Gdje je primjenjivo odredi rok čuvanja, brisanje, logove, rezervnu kopiju i postupak oporavka. |
| Javne stranice i migracije | Glavne rute, stvarni statusi odgovora, indexability i dogovoreni sadržaj prežive izgradnju i objavu. Kod javne migracije utvrdi zamjene starih URL-ova i tačku za povratak ili popravak. |
| Poslovne tvrdnje i resursi | Provjeren izvor kontakata, sadržaja, recenzija, dozvola za fontove, fotografije, ikone i mape. Izmišljene reference i nedovršene oznake sprečavaju objavu zahvaćenog sadržaja. Stručna i pravna pitanja idu odgovornoj osobi. |
| Održavanje | Zna se ko uređuje sadržaj ili vodi integraciju, kako prepoznaje kvar i šta ponovo provjerava poslije tipične izmjene. Dubina zavisi od posljedice. |

Svaka primarna radnja mora imati stvarno odredište ili u radnom prikazu vidljivu oznaku DEMO. Kod kontakta provjeri odredište linka ili sidra, potvrđenu vrijednost `tel:` ili `mailto:` i ponašanje kada integracija nije dostupna. Klijent potvrđuje nedostajuće poslovne činjenice prije objave.

Produkcijska isporuka glavnog toka traži razriješene kritične R0 i izvršene obavezne provjere. Otvoren R1 ima opisanu posljedicu, odgovornu stranu i plan. Za nedostupan dokaz navedi tačan obim isporuke (npr. lokalni preview) i šta čeka potvrdu. Pronađeni problem izvan opsega koji ugrožava glavni tok prijavi odvojeno. Stvarna produkcijska provjera zahtijeva odgovarajuće okruženje i dozvolu.

## 6. Učitavanje i cijena konteksta

- Metapodaci opisuju izradu ili izmjenu konkretnog sajta na jeziku koji ciljna platforma prepoznaje. Pojedinačni tehnički termin nije dovoljan razlog za aktivaciju. P0 provjerava zahtjeve platforme, P3 format, B stvarne pozitivne i negativne slučajeve aktivacije.
- Tijelo `SKILL.md` mora samo omogućiti LIGHT. Sadrži odabir dubine, kratko uzročno pitanje, kritični minimum, završetak i direktnu mapu „kada → gdje“. Svaki detaljan postupak ima jednog vlasnika. P3 stavlja primjere poznatih grešaka samo iza koraka 4 iz odjeljka 3.
- Otvori dodatnu referencu kada nedostaju konkretna odluka, kriterij ili provjera. Višejezični sadržaj može trebati samo odjeljak o jeziku ili layoutu. FULL i dalje bira po toku. Ako okruženje učitava samo cijele fajlove, razdvoji skupe, nepovezane teme. Ako podržava čitanje odjeljka, navedi naslov. Izbjegni lanac u kojem referenca zahtijeva sve ostale.
- Istraživanje, QA instalacija, audit, scenariji, dnevnici i podaci klijenata ostaju izvan obaveznog ulaza. P3 izračunava samo statičku veličinu mogućih putanja. P7 mjeri stvarno učitavanje i dostupnu upotrebu tokena. Nijedan cilj broja linija ne zamjenjuje ta opažanja.

## 7. Povratna informacija i odobrenje

Otvoriti protokol samo pri potvrđenoj grešci, konkretnoj povratnoj informaciji, regresiji ili izričitom zahtjevu. Razdvoji korisnikov doživljaj od dijagnoze. Sačuvaj projektno rješenje u njegovom odobrenom opsegu. Utvrdi je li uzrok lokalna greška, propuštena inženjerska odluka, promjena platforme ili preferencija brenda.

Za prenosiv slučaj sažmi okidač, opažanje, dokaze ili nepoznat uzrok, propušteno pitanje, predloženu prevenciju, granicu primjene i regresijsku provjeru. U korisnikom odobrenom zajedničkom prostoru za održavanje može se dopuniti `SKILL_IMPROVEMENT_CANDIDATES.md` sanitizovanim kandidatom bez identiteta, poslovnih podataka, tajni ili koda klijenta. Taj registar je izvan distribucije i klijentskog repozitorija. Bez takvog prostora vrati kopirljiv sažetak. Postojanje fajla i odobrenje čuvanja kandidata vrijede samo za tu namjenu.

Prije trajne promjene prikaži konkretan diff ili precizan prijedlog, ciljni fajl/verziju, primjer gdje pravilo pomaže, kontraprimjer gdje bi smetalo i cijenu dodatnog učitavanja. **Pričekaj izričito odobrenje te izmjene.** Tek tada napravi verzionisanu izmjenu, sačuvaj mogućnost povratka i provjeri okidač, regresiju i drugačiji prenosivi slučaj. Ako nema provjere, status ostaje nepotvrđen i promjena se ne promovira kao potvrđeno poboljšanje. Spoji duplikate, povuci zastarjelo pravilo ako je uzrok nestao. Dopuni uzročno pitanje kada je zakazala metoda, a katalog ako kratka kontrola donosi dodatnu vrijednost. Učenje je održavanje artefakta s odobrenjem.

## 8. Izvještaj za stvarni sajt

Prikaži šta je promijenjeno, najvažniju odluku, obavljene provjere i preostalu nepoznanicu. Za mali zahvat dovoljne su kratke rečenice. Za složen rad dodaj ključne rizike po porijeklu, stvarni ishod i okruženje, stavke za potvrdu klijenta, kako održavati i uslov za objavu. UI simulacija, prihvat endpointa, isporuka poruke i poslovni ishod zahtijevaju zaseban dokaz. Vizuelnu prosudbu zasnivaj na stvarno renderovanom prikazu. Navedi neizvršenu provjeru kad pregled nije bio moguć.
