# P1A · Kako izvesti rizik iz projekta

**Izlaz:** `research/notes-1A.md`. Preuzmi mogućnosti i ograničenja iz P0 te ugovor o ponašanju iz [specifikacije skilla](../specs/skill-spec.md). Pravila istraživanja i statusa su u [MASTER-u](../MASTER.md). Cilj je pronaći najmanji postupak koji mijenja stvarnu odluku prije implementacije. Istraživanje metode ima prednost nad štednjom tokena u ovoj fazi.

## Pitanja za dubinsko istraživanje

| Odluka | Šta uporediti | Šta mora biti razjašnjeno |
|---|---|---|
| Odakle krenuti? | Pre-mortem iz cilja korisnika, analiza načina otkaza (FMEA), analiza gubitka i interakcija (npr. STPA). | Šta otkriva pregled komponenti, a šta ostaje nevidljivo dok se ne prati njihova razmjena? Koji dio izvorne metode je primjeren jednom modelu i malom projektu? |
| Gdje tražiti nepoznat uzrok? | Invarijante, pretpostavke na granici, tok podataka i povratna informacija, promjene stanja i vanjskih zavisnosti. | Kako primijetiti da komponenta radi lokalno ispravno, dok glavni tok može prekršiti obećanje? Razlikuj spornu pretpostavku od dokazanog uzroka. |
| Koje rubove kombinovati? | Granične vrijednosti, particije, prijelazi, redoslijed događaja, vođene riječi ili mali skup kombinacija. | Biraj uvjete koji dijele stanje, odgovornu stranu ili resurs. Kada bi parovi propustili problem? Kada puni model ili numerički prioritet daje privid preciznosti? |
| Koje prijetnje su stvarne? | Aktiva, akteri, ovlaštenja, granice povjerenja, izvediva zloupotreba i gubitak dostupnosti. | Koliko opisa treba statičkoj stranici, formi ili aplikaciji s više uloga? P1D preuzima kontrole. |
| Kako izbjeći slijepu samokritiku? | Pokušaj obaranja jedne bitne pretpostavke, pregled postojećeg koda ili ugovora usluge, odvojeno opažanje. | Koji dokaz bi promijenio plan? Kada ponovni prolaz istog modela samo umnožava tekst? Ispitaj empirijska ograničenja i novije protivprimjere. |
| Kako učiti? | Analiza doprinosećih uzroka, provjera promjene, postmortem i povratna informacija o dizajnu. | Kako razdvojiti projektnu grešku, preferenciju i propust metode? Kada bi nova uputa izazvala više lažnih uzbuna? |

Prouči primarne opise i empirijska ograničenja. Za ključne odluke potraži suprotnu interpretaciju ili uslov neuspjeha. Uporedi trošak primjene na rutinskom i složenom zahvatu. Rad iz druge oblasti može opravdati istraživačko pitanje ili prilagodbu. Tvrdnja o učinku na izradu web-stranica i dalje traži zaseban dokaz. Tragovi za početak su izvorni radovi o pre-mortemu, FMEA/IEC 60812, STPA Handbook, NIST ACTS, Threat Modeling Manifesto, istraživanja o samokorekciji modela i Google SRE o postmortemima. Provjeri konkretni korišteni dio prije pripisivanja tvrdnje.

## Prijenos u postupak

Predloži slijed od obećanja do preventivne odluke i buduće provjere. Za složen slučaj prikaži kratak lanac „ako promijenimo ovaj ulaz ili trenutak → ova zavisnost više ne vrijedi → ovaj korisnik trpi posljedicu → ovdje možemo spriječiti ili opaziti kvar“. Za svaki sačuvani bitni rizik imenuj okidač iz briefa, korisničku posljedicu, prirodu dokaza i kriterij razlikovanja ispravnog ponašanja. Za LIGHT izvedi istu odluku u jednoj rečenici. Navedi kada korisniku postaviti pitanje, kad stati i kako zadržati nepotvrđenu, ali kritičnu pretpostavku.

Sačuvaj dva kratka ilustrativna briefa (jednostavan i integrisani) i njihov prvi prolaz. Potom po potrebi uporedi klase s QA specifikacijom. Zapiši prethodnu izloženost primjerima iz specifikacija ili okruženja. Nova opažanja dodaj odvojeno. Ovo je rad na razumljivosti upute. Nezavisnost i prediktivni učinak ostaju otvoreni. P1B i P1C mogu ponovo koristiti te briefove. Primjeri iz revizije V3 i svi primjeri iz Etape A isključeni su iz nezavisnog skupa u B.

## Predaja

U bilješci objedini odluke „zadržati, prilagoditi ili izostaviti“ s osnovom, uslovima i otvorenim pitanjima. Predaj P1B–F kratku primjenjivu metodu, P1G izbor po režimu i granice usvajanja, a P2 kriterije za sekundarni katalog putem P1G. Uključi postupak porijekla (`PROJECT`, `CATALOG`, `LATER` i nepoznat redoslijed), prijedlog okidača naknadnog učenja i uslov njegove provjere na drugačijem slučaju. Prihvatljiv izlaz omogućava drugom autoru da izvede provjerljivo predviđanje i da objasni gdje metoda može pogriješiti.
