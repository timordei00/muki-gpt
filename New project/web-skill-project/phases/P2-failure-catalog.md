# P2 · Poznati uzroci kao naknadna provjera

**Ulaz:** `research/notes.md`, uključujući odjeljak `Usvojene delte za specs` i njegove `ACCEPTED` odluke. Za pojedinost slijedi trag do izvorne bilješke. P2 uređuje poznate obrasce. P1G je vlasnik prediktivne metode, P3 piše njenu konačnu uputu. Radne putanje definira [MASTER](../MASTER.md).

## Odabir obrasca

Zadrži obrazac ako mijenja odluku na određenom toku i postoji provjera koja ga može razlikovati od ispravnog ponašanja. Kod ponavljanja simptoma odvoji različite uzroke i njihove različite prevencije. Spoji ista pravila koja se pojavljuju u više djelatnosti. Ne pretvaraj jednu raniju grešku, ukras ili tehnološki izbor u univerzalni zahtjev. Broj zapisa proizlazi iz različitih važnih mehanizama.

Svaki zapis na engleskom ima stabilan ID, konkretan okidač, prekršeni uslov i uzrok, posljedicu/težinu prema kontekstu, najmanju prevenciju, izuzetak i opažljivu provjeru. Sačuvaj trag dokaza iz P1G, uključujući ograničenja. Pravilo koje traži skupu konfiguraciju objasni kroz slučaj u kojem se taj trošak opravdava.

## Dva staging izlaza

- `staging/failure-patterns.md` s obrascima grupisanim po funkciji ili zajedničkom mehanizmu. Obradi značajne R0/R1 iz sinteze. Primjeri područja za provjeru pokrivenosti su geometrija/zoom, interakcije, mediji, forme, podaci i odgovornosti, upravljanje sadržajem, vanjske zavisnosti i oporavak. Uputi na vlasnika detaljne smjernice kada bi je katalog inače ponavljao.
- `staging/context-index.md` s kratkim usmjerenjima „ako brief sadrži ovaj tok ili ograničenje → pročitaj ove ID-eve/odjeljke“. Indeks služi i kao mapa primjenjivosti za nove tipove sajtova. Djelatnosti služe kao primjeri samo kad mijenjaju uslov. Uz svaki otvoreni ozbiljni jaz navedi ko ga preuzima. Indeks i katalog nose oznaku da se koriste poslije samostalnog prolaza.

P3 dobija oba izlaza. Indeks smije spojiti s katalogom kad direktno pronalaženje ostaje moguće. Na predaji provjeri da svaki upućeni ID postoji, da se značajni izuzeci nisu izgubili i da nema druge kopije algoritma iz P1G.
