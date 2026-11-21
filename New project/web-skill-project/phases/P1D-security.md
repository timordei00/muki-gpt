# P1D · Backend, podaci, forme i sigurnost

Razradi odgovornost za svaku radnju koja prelazi granicu povjerenja ili mijenja stanje. Koristi P1A metodu i [specifikaciju skilla](../specs/skill-spec.md). Sačuvaj `research/notes-1D.md` prema [MASTER-u](../MASTER.md).

| Površina | Istraživačka odluka |
|---|---|
| Statička prezentacija | Odakle dolaze sadržaj, skripte i javna konfiguracija? Ko upravlja hostingom i objavom? Ograniči kontrole na stvarno korišteni DOM, zavisnosti, tajne, TLS i treće strane. |
| Forma i vanjski servis | Ko prima koje podatke, gdje vrijedi serverska validacija, šta označava prihvat, ko potvrđuje krajnju dostavu? Uključi ograničenje zloupotrebe uz pristupačan legitimni put. |
| CMS, administracija i upload | Ko smije čitati ili mijenjati koji zapis i koji izvedeni prikaz? Ispitaj ovlaštenja po ulozi i resursu, valjanost sesije, dozvoljene vrste i čuvanje fajlova, ažuriranje dodataka, kopije i mogućnost oporavka. |
| Vlastiti backend, rezervacija, narudžba i povezani događaji | Ko je izvor istine? Opiši dozvoljene prelaze, uslov uspjeha, sukob dva korisnika, ponovljeni ili zakasnjeli zahtjev i djelimično izvršenje. Odredi šta sistem može obećati po ugovoru pružaoca usluge. |
| Računi, plaćanja, posebno osjetljivi podaci | Razgraniči šta rješava provjerena platforma, šta ostaje u našoj integraciji i ko potvrđuje stručni dio. Navedi gdje nema osnove za vlastitu implementaciju ili produkcijsku tvrdnju. |

Istraži integritet neovisno o sigurnosti pristupa. Onemogućeno dugme može olakšati UX, dok drugi klijent ili zakasnjeli događaj i dalje mijenja isti zapis. Na relevantnom toku uporedi ograničenje jedinstvenosti, atomsku izmjenu, verziju zapisa ili idempotentni ugovor sa jednostavnijim dizajnom. Utvrdi kako poslije izgubljenog odgovora provjeriti postojeći ishod, šta smije biti ponovljeno i kako razriješiti sukob. Kada nema trajnog zapisa ili dvostruke posljedice, obrazloži zašto je složenija kontrola suvišna.

Za stvarnu površinu istraži kontekstualno kodiranje izlaza, sigurne parametrizovane upite gdje postoji baza, CSRF zaštitu kad je relevantna, server-side autorizaciju, granice CORS-a, tajne, HTTPS, sigurnosne headere i njihove neželjene efekte. Za lične podatke poveži svrhu, pristup, čuvanje, brisanje i logovanje s operaterom. Odvoji provjerljivo ponašanje od pravne procjene. Pokrij neuspjeh servisa i korištenje forme kada je neka zaštita nedostupna. Koristi dokumentaciju servisa, OWASP smjernice i relevantne standarde za sporne tvrdnje.

Predaj P1E očekivani kriterij za UI, endpoint i stvarno stanje, a P1F zahtjeve za hosting, dostavu, nadzor i oporavak. Bilješka mora sadržati bar jedan izvediv prijelaz s nepoznatim ishodom i kriterij za razrješenje te uslove gdje je eskalacija opravdana. Sve ostaje istraživanje i defanzivni pregled dizajna.
