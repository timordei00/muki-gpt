# P3 · Pisanje prenosivog skilla

Sastavi stvarni engleski skill tek kada ova faza bude pokrenuta. Uzmi ulaze i značenje `S/` iz [MASTER-a](../MASTER.md). Primijeni [ugovor ponašanja](../specs/skill-spec.md), relevantne `ACCEPTED` delte iz `research/notes.md` i dokumentovan format iz P0. Prati primarne bilješke samo za odluku čiji trag treba razjasniti.

## Jezgro i hladni početak

U `S/SKILL.md` napiši ispravan frontmatter s nazivom `web-professional-standards` i opisom koji razlikuje izradu/izmjenu konkretnog sajta od pojmovnog pitanja. Smisleni EN/BS primjeri okidača mogu stati u kratak opis. Poštuj platformu iz P0. Način ručnog poziva prenesi u status ako je dokumentovan. Aktivacija u stvarnoj sesiji čeka B.

Tijelo mora biti dovoljno za lokalnu promjenu bez čitanja dodatnih fajlova. U njemu ostaju samo odluke koje moraju biti prisutne pri svakoj primjenjivoj aktivaciji ili koje sprečavaju propuštanje kritičnog uslova. Ugradi postupak iz P1G i direktnu mapu „okidač → lokalna putanja ili odjeljak“. Nazivi u mapi neka opisuju temu i trenutak učitavanja. Konkretni primjeri iz kataloga smiju se vidjeti tek poslije prvog projektnog predviđanja. Ako je katalog već bio u kontekstu iste sesije, zadrži podatak o izloženosti.

## Vlasnici sadržaja

| Ulazna odluka | Odredište u S i pravilo |
|---|---|
| P1A i sinteza | Kratka samostalna metoda u jezgru. Odvojena neutralna metodska referenca samo kad je potrebna za složen tok. Bez primjera poznatih kvarova koji bi otkrili odgovore prije samostalne analize. |
| P2 katalog i indeks | Selektivno dostupni obrasci, s okidačima i stvarnim ID-evima. Indeks može biti dio istog fajla ili pretraživ skup manjih tematskih referenci. Opravdaj izbor s obzirom na mogućnosti čitanja ciljane platforme. |
| P1B i P1C | Fluidni frontend i pozitivan proces dizajna imaju jasne vlasnike. Sačuvaj sadržajne, vizuelne i interakcijske odluke, uključujući smislen pokret i rad bez njega. |
| P1D i P1F | Sigurnosne i serverske odluke, integritet zapisa i forma imaju vlasnika po toku. Izbor tehnologije, hosting, BiH kontekst, praćenje i predaja dobijaju direktnu putanju kad su relevantni. |
| P1E uz doprinose ostalih | Teme performansi, pristupačnosti i SEO-a imaju direktan ulaz po potrebi. `S/references/quality-gates.md` sadrži odluku o isporuci i kritične kriterije. `S/references/testing.md` sadrži izbor ciljanog dokaza, ručni put i granice automatizacije. To su stabilni ulazi za P4. |
| P1A/P1C i P1G o učenju | `S/references/improvement-loop.md` sadrži odobrenje, kandidata, zaštitu podataka, verzionisanje, provjeru i povratak. Jedan uslovni link iz jezgra. Kandidati, historija i podaci klijenata ostaju izvan skilla. |

Ostalim referencama daj imena prema stvarnom sadržaju. Jedno pravilo ima jedno detaljno odredište. Izostavi prazne foldere i ne kopiraj istraživanje, revizijski izvještaj ni QA instalaciju u S. Vanjska usluga, drugi korisnikov skill ili prisutnost Q ne smije biti uslov za osnovni rad.

## Statička provjera P3

- Provjeri frontmatter, naziv direktorija, stvarne putanje i naslove referenci, nedostupne ciljeve i cikluse obaveznog učitavanja. Poredi regulatorne i tehničke tvrdnje sa zapisanim osnovama. P0/P3 ne potvrđuju automatsku aktivaciju.
- Iz stvarno napisanih fajlova izvedi tri putanje čitanja: lokalna izmjena, obični novi sajt, ozbiljna integracija. Navedi prve ulaze, trenutak prvog otvaranja kataloga i koji čitani dokument mijenja koju odluku. LIGHT mora imati valjanu putanju samo kroz jezgro. Prođi i izolovani okidač za feedback. Zapiši veličinu metapodataka, tijela i stvarno potrebnih fajlova ili odjeljaka u UTF-8 bajtovima za svaku zamišljenu putanju. Ako alat podržava samo cijele fajlove, računaj cijele fajlove. To su statičke procjene opsega, dok stvarni tokeni, keširanje, ponavljanja i ponašanje ostaju za P7.
- U status zapiši putanju S, sažetak opsega i `NOT TESTED`. Potvrdi da P4 može otvoriti oba QA ulaza i da je referenca za učenje dostupna samo uz okidač. P4 zatim preuzima pripremu pratećeg alata.
