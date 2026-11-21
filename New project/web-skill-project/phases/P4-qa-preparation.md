# P4 · Priprema QA i zatvaranje Etape A

Ulazi i putanje S/Q su u [MASTER-u](../MASTER.md). Pročitaj [QA specifikaciju](../specs/qa-spec.md), `ACCEPTED` odluke P1G, P0 stanje alata, `S/SKILL.md`, `S/references/quality-gates.md` i `S/references/testing.md`. Ako se kriterij isporuke razlikuje između izlaza P3 i specifikacije, razriješi razliku prema prihvaćenim odlukama prije pisanja runnera.

## Šta pripremiti

| Fajl ili skup | Sadržaj i kriterij predaje |
|---|---|
| `Q/scripts/check.mjs` | Jedna komanda za cilj i konfiguraciju. Zadrži nezavisne rezultate kada preglednik ili mreža nedostaju. Implementiraj status i agregaciju tačno prema QA specifikaciji. |
| `Q/tests/` | Stvarni moduli provjera za odabrane površine, s preduslovom, očekivanim opažanjem i granicom dokaza. Za ručnu provjeru vrati neizvršeno dok neko zaista ne dostavi opažanje. |
| `Q/check.config.json` | Konfiguracija ruta, obaveznog sadržaja, stanja, relevantnih širina, testnih integracija, dopuštenog cilja za slanje i obaveznih kriterija. Primjer konfiguracije ne smije inicirati stvarnu dostavu na nepoznat endpoint. |
| `Q/package.json` | Jedna skripta za ulaz i najmanje opravdane zavisnosti. Nazive, API-je i kompatibilnost provjeri u službenoj dokumentaciji. Lockfile priloži samo ako je stvarno nastao podržanim postupkom. U suprotnom P5 rješava i bilježi zaključavanje verzija. |
| `Q/TESTING_HANDOFF.md` | Jedina uputa za instalaciju i upotrebu pratećeg QA paketa. Zabilježi stvarne preduslove, primjer konfiguracije i naredbe, očekivani JSON i čitljiv sažetak, tumačenje izlaznog koda, stvarne granice i precizan plan kontrola za P5. Očekivano jasno označi kao plan. |

Iz QA specifikacije izvedi mehanizme za responsive/stanja, konzolu i resurse, interne linkove i SEO, interakcije i fokus, forme i stanje na serveru, pristupačnost, sadržaj, performanse, sigurnost i regresije. Za svaku primjenjivu oblast mora postojati implementirana provjera ili upotrebljiva ručna procedura s kriterijem i načinom bilježenja. Statički pregled, simulirani odgovor i stvarna produkcijska potvrda imaju različite domete. Ne obećavaj provjeru samo zato što je paket naveden kao zavisnost.

Kontrolne slučajeve za P5 opiši u handoffu s očekivanim opažanjima i kodovima procesa. Izrada testnih stranica i aktivno izvršavanje dolaze u B. U ovoj fazi provjeri datoteke, parsiranje konfiguracije i sintaksu (npr. `node --check` kad je dostupan). Nemoj izvesti QA runner, form submit, mjerenje, demo ili nezavisnu evaluaciju.

## Zatvaranje

Otvori stvarne izlaze svih faza iz MASTER-a. Provjeri sadržaj, prijenos prihvaćenih delti u odgovarajuće izlaze i cjelovitost S i Q. Isporuči S i Q u projektu, uz status i popis svega što još čeka izvođenje. Prepiši odgovarajući završni status iz MASTER-a tek nakon te provjere. **Nakon P4 stani.**
