# QA specifikacija · V3

**Vlasništvo:** P1E istražuje metode i granice dokaza. P4 iz ove specifikacije i prihvaćenih delti piše prateći alat i dokumentaciju. P5 tek provjerava radi li alat. Pri radu na stvarnom klijentskom sajtu biraju se provjere razmjerne promjeni prema [specifikaciji skilla](skill-spec.md).

## Predmet i okruženje

Jedan dokumentovan poziv prima konfiguraciju projekta. `baseURL` ili lokalni direktorij, rute, očekivani sadržaj i stanja, komponente, širine, bitne integracije i obavezne provjere određuju šta se može dokazati. Podijeli provjere na statičke, preglednik u kontrolisanom okruženju, ručne i one koje zaista zahtijevaju postavljenu uslugu. Pokretanje alata samo za lokalni CSS ne treba zahtijevati konfiguraciju forme ili pristup mrežnom servisu. Alat treba moći raditi uz postojeći site stack.

Za radnju koja šalje poruku, rezervira termin, mijenja zapis ili pokreće naplatu koristi deklarisani testni cilj i sintetičke podatke u odobrenom opsegu. Bez takvog cilja preskoči stvarno slanje i zapiši `NOT TESTED` za integraciju. UI se može zasebno provjeriti s kontrolisanim odgovorom. U dokazima i logovima izostavi sadržaj formulara, tokene i lične podatke.

## Kriteriji prije izbora alata

| Kada je primjenjivo | Šta treba opaziti | Granica dokaza |
|---|---|---|
| Vizuelni sadržaj i fluidni layout | Na smislenoj ruti postoje očekivani sadržaj i radnja. Provjeriti tijesnu širinu/visinu, između breakpointa, otvoreno stanje, duži sadržaj, tekst pri zoomu i sticky elemente. | `scrollWidth` je signal. Namjerni carousel, skriven ili preklopljen fokus i sadržaj izvan ekrana trebaju kontekst i ponekad ručni pregled. |
| Interakcije, animacija i pristupačnost | Semantika, nazivi, redoslijed i vidljivost fokusa, tastatura/touch, povratak iz menija ili modala, greške, kontrast, uvećani tekst, smanjeno kretanje i alternative za relevantni medij. | Poveži automatizovanu detekciju s ručnim zadatkom. Cilj WCAG 2.2 AA uključuje provjeru primjenjivosti i izuzetaka kriterija. |
| Navigacija i SEO | Interna odredišta, sidra, CTA, jezik, title, osnovna indeksabilnost na javnim rutama, canonical i status greške. Kod lokalizacije ili migracije provjeri odgovarajuće alternative, preusmjeravanja, sitemap i zastavice sa staginga. | Odgovor 200 može prikriti pogrešnu stranicu. Blokada vanjske mreže ostavlja dostupnost otvorenom. Rangiranje se ovim ne dokazuje. |
| Fontovi, slike i performanse | Koji resurs je bitan u stvarnom prikazu, dimenzije, responsive izbor, fallback, količina JS-a i treće strane. Posebno prati LCP, INP i CLS kad podaci odgovaraju metrici. | Razdvoji statički indikator, laboratorijski uzorak i terenske podatke s periodom i uređajima. Nedostajući terenski INP ostaje neizmjeren. |
| Forme, backend i integracije | Greška i oporavak, stanje čekanja, nepoznat ishod, više pokušaja i stvarno stanje zapisa kod izvora istine. Za račun ili ulogu provjeri granicu ovlaštenja u odobrenom okruženju. | Uspješan UI ili prihvat zahtjeva ne dokazuju dostavu, trajno čuvanje, autorizaciju servera ili tačnost stanja. Svakom nivou treba vlastiti očekivani dokaz. |
| Održavanje i sigurnost | Očekivani resursi i konzolne greške, tajne izvan bundlea, podržane zavisnosti, zaštita podataka i odgovarajući headeri. Pri objavi provjeri efektivnu konfiguraciju i postupak oporavka za važne podatke. | Pregled postavki ne potvrđuje produkcijski CDN, uspješan restore ili cjelokupnu sigurnost. Prijavi opseg pristupa i preostalu odgovornost. |
| Dizajn, sadržaj i vjerodostojnost | U renderu provjeri može li korisnik prepoznati ponudu i završiti radnju. Ocijeni odnos brenda, čitljivosti i upotrebe. Za objavu potvrdi poslovne podatke i prava. | `TODO`, `[POTVRDITI]` ili `DEMO` je signal za pregled. Automatika ne presuđuje o autentičnosti ili ukusu. |

Referentni skup širina za širi regresijski prolaz je 320, 347, 375, 390, 503, 768, 823, 1024, 1280 i 1440 CSS px. Biraj prema sadržaju, neposredno ispod i iznad relevantnog prijelaza, uz dokumentovan opseg. Za LIGHT je dovoljan ciljani presjek koji bi pokazao konkretni kvar. Sama promjena viewport širine ne dokazuje korisnički zoom, text spacing ni ponašanje fizičkog uređaja.

## Ishod i procesni kod

Zapiši `test_id`, rutu, očekivano stanje i kriterij, metodu, stvarno opažanje, okruženje/verziju, ishod i razlog ograničenja. Potvrdi da je učitana prava ruta, da su očekivani uzorci neprazni i da je cilj destruktivne radnje zamijenjen odobrenim testnim ciljem. Kada očekivana kontrola zaista nedostaje na potvrđenoj stranici, to je `FAIL` njenog kriterija. Kada oprema ili pogrešna ruta sprečava procjenu, kriterij je `NOT TESTED`. `N/A` traži dokaz neprimjenjivosti. `WARNING` označava nalaz za prosudbu. `PASS` zahtijeva stvarno opažen očekivani rezultat.

Za jednu komandu koristi jednoznačne procesne kodove. `1` označava utvrđen pad obaveznog kriterija, `2` nepotpunu obaveznu provjeru ili nevaljanu konfiguraciju, `3` samo upozorenja ili otvorene opcionalne provjere, `0` izvršene i zadovoljene obavezne kriterije u deklarisanom opsegu bez otvorenih upozorenja. Ako postoji više ishoda, prednost ide redom 1, 2, 3, 0. Sačuvaj pojedinačne ishode i kada je procesni kod već određen. Prazan skup obaveznih kriterija za zatraženi cilj je nepotpun. Preskočena neprimjenjiva provjera ne ulazi u broj uspjeha. Nerazriješeni R0 ili obavezni `NOT TESTED` sprečavaju potvrdu produkcijske spremnosti.

## Kontrole i handoff

P4 dokumentuje kako pokrenuti lokalni sajt, konfiguraciju, instalaciju, verzije i rezultat naredbe u `Q/TESTING_HANDOFF.md`. Priprema plan očekivanih ishoda za pozitivnu, negativnu i nepotpunu kontrolu. P5 ih tek materijalizira i izvršava. Uključi očekivani kvar linka, fokusa, neočekivani overflow i oznaku nedovršenog sadržaja, ispravan sadržaj s namjernim horizontalnim skrolovanjem i odsutan preduslov. Za transakcije dodaj provjeru stanja nakon dva pokušaja ako postoji odgovarajući testni backend. Navođenje plana, parsiranje skripte ili prazan DOM ne dokazuju da tester otkriva kvar. Skrivene evaluacijske slučajeve čuva nezavisni evaluator odvojeno prema [planu Etape B](../phases/stage-B/README.md).
