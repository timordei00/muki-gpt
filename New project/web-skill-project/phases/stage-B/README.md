# Etapa B · Plan za zasebnu naredbu

Ulazna dozvola je nova korisnička naredba `POKRENI ETAPU B` ili jednako izričit zahtjev za odgođeno testiranje. Provjeri prethodne rezultate, `PROJECT_STATUS.md`, oba direktorija S/Q iz [MASTER-a](../../MASTER.md), `Q/TESTING_HANDOFF.md` i [QA specifikaciju](../../specs/qa-spec.md). Materijal ove revizije i radni primjeri iz A smatraju se viđenim. Čuvaj rezultate u radnom projektu odvojeno od prenosivog skilla.

## P5 · Može li se vjerovati testeru?

U odobrenom okruženju postavi deklarisane zavisnosti i stvarni lockfile ako je potreban. Materijaliziraj odvojene pozitivne, negativne i nepotpune kontrole iz handoffa. Provjeri za svaki ciljani kriterij očekivani i opaženi rezultat, procesni kod i pojedinačni dokaz. Uključi namjerno ispravan izuzetak i ponašanje pri nestanku preduslova. Ako instrument ne razlikuje poznat kvar od ispravnog slučaja, popravi instrument i ponovi kontrolu prije oslanjanja na njega.

## P6 · Demonstracija i trag prije koda

Pripremi najmanje dva nova briefa s različitim posljedicama. Isključi V3 misaone scenarije, P1 ilustracije, fixture i njihove prepoznatljive varijante. Izvršilac vidi brief i dozvoljeni materijal. Evaluator unaprijed drži skrivene uslove i mjerilo izvan njegovog pristupa. U svježoj sesiji zasebno sačuvaj i označi verziju ili vrijeme **prvog projektnog predviđanja prije kataloga**, zatim dopune iz kataloga i konačan plan **prije koda**. Sačuvaj i stanje implementacije prije otkrivanja skrivenih uslova. Ranije izloženi slučaj označi kontaminiranim. Potom izradi demo, izvrši dostupne provjere i zapiši stvarne rezultate i okruženje.

## P7 · Nezavisna procjena

Koristi zamrznute zapise. Tek sada nezavisni evaluator poredi mehanizam, uslov i posljedicu svake prognoze s unaprijed pripremljenim relevantnim slučajem. Podudaranje po nazivu teme nije dovoljno. Odvojeno ocijeni (1) predviđeno prije kataloga, (2) dopunjeno iz kataloga, (3) propušteno ili otkriveno kasnije, (4) neopravdanu prognozu koja je promijenila plan. Kada prevencija ukloni uzrok, evaluator može provjeriti invarijantu ili obrazložiti da je mehanizam uklonjen. Samo odsustvo kvara ne dokazuje da bi se on inače dogodio.

- Navedi broj pogođenih i ukupnih ocjenjivih slučajeva, propuštene R0/R1 i nepotrebne odluke. Dedupliciraj isti mehanizam i odvoji slučajeve za koje nema pouzdanog odgovora. Za novost uporedi uzrok s verzijom kataloga dostupnom u tom pokretanju. Ne izvodi procenat kad nema imenilaca. Bez nezavisnog evaluatora/skupa ovaj dio dobija `NOT TESTED`, uz razlog.
- Provjeri izvršenje važnih tokova, vizuelni pravac vezan za brend i stvarni sadržaj, pristupačnost i održavanje. Pokušaj aktivaciju za konkretne EN/BS zahtjeve i za pojmovno pitanje izvan opsega. Evidentiraj platformu, verziju i da li je poziv bio ručan ili automatski.
- Za LIGHT, STANDARD i FULL odvojeno zabilježi koje je reference izvršilac zaista otvorio, kada, ponovljena učitavanja, pozive alatima i vrijednosti tokena koje platforma stvarno izlaže. Razlikuj ulaz, izlaz i keširane tokene kada je moguće. Veličina fajla je samo zamjenska mjera. Uporedi s P3 procjenom i imenuj konkretan nepotreban trošak ili propušten važan ulaz.
- Poređenje sa/bez skilla je opcionalno i traži izričit zahtjev. Isti brief, model/verzija, alati, budžet i odvojene čiste sesije. Zabilježi razlike u uslovima i ograničenja malog uzorka. Bez takvog poređenja ne pripisuj poboljšanje samo skillu.

## P8 · Ispravke na osnovu nalaza

Poveži stvarni propust s uzrokom i dijelom upute ili alata koji ga je propustio. Predloži najmanju korekciju i pravilo povratka. Za trajne promjene skilla primijeni odobrenje iz [specifikacije](../../specs/skill-spec.md). Predloženu verziju procijeni na ranijoj regresiji i drugačijem, do tada neviđenom slučaju, uz kontraprimjer gdje bi novo pravilo bilo suvišno. Zabilježi razliku u kvalitetu, aktivaciji i trošku, kada se mogu mjeriti. Odvojeno isporuči opaženo, zaključeno, otvoreno i status promocije.
