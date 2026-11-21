# P1G — SINTEZA ISTRAŽIVANJA I ODLUKE


**Cilj:** Od zasebnih istraživanja napraviti **kratak operativan skup pravila** na kojem se mogu zasnovati katalog grešaka, SKILL.md i QA sistem. Razriješiti kontradikcije, ukloniti duplikate i jasno označiti preostale nepoznanice.

**Ulaz:** `MASTER.md`, `PROJECT_STATUS.md`, **svi stvarno postojeći** `research/notes-1A.md` … `notes-1F.md`, `specs/skill-spec.md`, `specs/qa-spec.md`. Ovo je jedina faza koja treba objedinjeno čitati sve istraživačke sažetke; ne otvaraj nasumično nove izvore.

**Dubina:** sinteza/odlučivanje, bez novog sveobuhvatnog istraživanja. Dodatni primarni izvor otvori samo ako je potreban da se razriješi P0/P1 kontradikcija ili zastarjela tvrdnja.

## Obavezni koraci [MUST]
1. **Provjera ulaza:** svaka prethodna faza ima stvarno sačuvan, neprazan izlaz ili status `DONE WITH GAPS` sa precizno navedenom prazninom. Ako nedostaje kritičan ulaz, označi BLOCKED ili vrati pitanje odgovarajućoj fazi; ne izmišljaj rezultate.
2. **Izvuci najvažnije odluke** iz 1A–1F s izvornim URL-om/datumom i statusom dokaza; za preuzete tvrdnje očuvaj dokazni status, ne unapređuj ga samim ponavljanjem.
3. **Kontradikcije:** pravilo A vs B, kontekst različitosti, preporučeni kompromis, izvor i vlasnik. Posebno provjeri CSP vs third-party, animacije vs reduced motion, performance vs fontovi, SEO vs privacy, CMS vs static hosting, minimalizam vs buduće proširenje.
4. **Redoslijed procesa:** potvrdi najmanji algoritam `brief → samostalna analiza rizika → katalog → implementacijska odluka → provjera`. Samostalni rizici moraju biti zapisani prije kataloga; ne smije se zaključivati da jedan model ima nezavisnu objektivnost.
5. **Critical floor:** definiši minimum po tipu sajta i zahvata (responzivnost/reflow, tastatura i fokus, forma i potvrda, secrets/TLS, autentičnost, dijakritici/lang, linkovi). Kao izuzetke označi **N/A uz razlog**, ne tihi skip.
6. **Režimi:** preciziraj LIGHT/STANDARD/FULL i okidače eskalacije. P0 je obavezan uvijek; broj rizika je orijentir, ne kvota. Ne tjeraj LIGHT u 10 koraka.
7. **Minimalni QA:** preporučeni alati i koje tvrdnje mogu provjeriti; jasna granica automatizacije i ručnog pregleda; prethodno neizvršene testove evidentiraj kao NOT TESTED.
8. **Unutrašnje vlasništvo pravila:** za svaku temu odluči ide li u novu kratku `references/` ili u operativnu proceduru `SKILL.md`. Svaka važna tema mora imati jedno autoritativno mjesto i minimalne cross-linkove; **bez oslanjanja na druge korisnikove web skillove**.
9. **Dugoročno održavanje:** ko uređuje sadržaj, šta se ponovo provjerava nakon tipičnih izmjena, pravne/licencne potvrde i granice složenog backend razvoja.
10. **Prioritet za P2/P3/P4:** lista konkretnih implementabilnih pravila i lista odbačenih „best practice“ tvrdnji koje nisu univerzalne.
11. **Optimizacija bez sputavanja:** odvoji *nepregovaračke rezultate* (ispravna funkcija, zaštita, dokaz) od preporučenih tehnika. Ako dubinsko istraživanje otkrije bolji, jednostavniji postupak od početne ideje, dokumentuj njegovu prednost i usvoji ga kroz kontrolisane delte; bez novih obaveznih tabela i kvota samo radi opširnosti. Za budući skill posebno odredi koje 2–3 odluke korisnik mora vidjeti, a koje detalje agent interno rješava.
12. **Kontinuirano poboljšavanje:** usvoji **najmanju moguću** proceduru iz P1A/P1C: kada se učitava `improvement-loop.md`, šta je kandidat, gdje se uz korisnikovu dozvolu čuva u **zajedničkom održavačkom prostoru za više projekata**, izvan skilla i klijentskog repozitorija i kada se uz dozvolu pretvara u ažuriranu referencu i ciljanu provjeru. Slučajna korisnička preferencija nije univerzalna lekcija.

## Format odluke
`ID | kratko pravilo | za koji tip/režim | izuzetak/kada ne važi | zašto | provjera | izvor + datum | oznaka dokaza | vlasnik reference`.

**Research reuse:** P1G ne pretvara svaki nalaz u novu referencu; zadrži najmanji broj pravila koji mijenja odluku. Ako 6 istraživačkih faza daju 120 sličnih pravila, objedini ih bez gubitka P0/P1 izuzetaka i izvora.

## Izlaz
- `research/notes.md`: izvršni sažetak (kratak), matrica odluka, kritični minimum, režimi i eskalacija, izabrani algoritam, kontradikcije, rejected/conditional rules, mapa vlasništva, pitanja za P2/P3/P4 i ručni QA.
- `research/decision-log.md` samo ako je potrebno radi praćenja značajnih kompromisa (ne mora nastati ako nema sadržaja).
- **Unutar `research/notes.md`** obavezan odjeljak `Usvojene delte za specs`: svaki red `ID | ciljani spec/odjeljak | staro → novo | razlog/otvoreni izvor | P0/P1 učinak | ACCEPTED/PROPOSED`. Usvoji samo dokazima opravdane implementacijske precizacije u granicama MASTER §2; ostalo je `PROPOSED` ili `BLOCKED` (ne nadjačava spec). **P3 i P4 moraju pročitati ovaj odjeljak** i primijeniti samo ACCEPTED delte. Ne mijenjaj tiho spec fajlove.
- Ažuriran `PROJECT_STATUS.md`, uključujući **planiranu stvarnu lokaciju finalnog skilla** prema P0 (sibling folder ili `output/`); P3 potvrđuje lokaciju prije prvog pisanja. Ako se ona još ne može odrediti, označi otvorenu zavisnost, ne inventiraj putanju.

## Gotovo kada
Nijedan ključni P0/P1 nalaz nije izgubljen, svi odabrani principi imaju kontekst i provjeru, **odjeljak usvojenih delti za specs postoji (može pisati „nema usvojenih delti“),** kontradikcije su razriješene ili eskalirane, postoji jedna dosljedna metoda za P2/P3 i nema duplog enciklopedijskog teksta.

## Ne radi
Ne piši katalog ili SKILL.md (P2/P3), ne implementiraj QA (P4), ne proglašavaj neprovjereno VERIFIED; ne započinji Etapu B.

## Na kraju
Sačuvaj obavezne rezultate i ažuriraj `PROJECT_STATUS.md`. Ako je aktivna `POKRENI ETAPU A`, **automatski nastavi na P2** bez međustopa, dodatne korisničke poruke ili posebnog faznog izvještaja. Ako je korisnik tražio samo ovu imenovanu fazu, ovdje stani. Pri stvarnom blokatoru evidentiraj razlog i ne proglašavaj fazu završenom.
