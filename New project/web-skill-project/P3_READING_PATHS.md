# P3 · Statički opseg učitavanja

Mjerenje 20.11.2026. Brojevi su UTF-8 bajtovi stvarnih fajlova na disku. Frontmatter s obje granične linije i završetkom reda ima 319 B. Tijelo ima 3.700 B. U tabeli se jezgro broji jednom. Računamo čitave reference, bez pretpostavke da host može učitati samo odjeljak. Nazivi referenci su unutar direktorija uz [SKILL.md](output/web-professional-standards/SKILL.md).

| Zamišljeni zadatak | Redoslijed, odluka i trenutak otvaranja kataloga | Ukupno |
|---|---|---:|
| LIGHT, pomak razmaka na postojećoj kartici | Jezgro 4.019 B. Provjeri stvarne pozivaoce i dostupnost akcije na uskoj širini. Jedna uzročno povezana provjera završava zadatak. Katalog se ne otvara. | 4.019 B |
| STANDARD, novi sadržajno vođen sajt | Jezgro → projektni zapis → `design.md` 1.818 B bira hijerarhiju iz stvarnog materijala → `fluid-layout.md` 1.757 B odlučuje koji element smije promijeniti veličinu. Pretpostavka ove putanje je da druge teme nemaju otvorenu odluku. | 7.594 B |
| FULL, integracija s važnim trajnim zapisom | Jezgro → `predictive-engineering.md` 2.038 B za granicu odgovornosti → sačuvan prvi zapis → `server-state.md` 2.221 B za vlasništvo nad stanjem → tek sada `patterns-services.md` 2.822 B za naknadni slučaj → `testing.md` 2.272 B za dokaz → `quality-gates.md` 2.003 B za odluku o isporuci. | 15.375 B |
| Samo konkretan feedback | Jezgro → `improvement-loop.md` 1.935 B razdvaja opažanje, sanitizovanog kandidata i odobrenje trajne izmjene. Katalog se ne otvara. | 5.954 B |

Provjereno na disku: naziv direktorija i polje name se podudaraju, opis je neprazan i stane u granicu formata. Svih 13 referenci dostupno je direktno iz jezgra, imaju naslov i nemaju obavezne veze prema drugim fajlovima. Poređenjem s P2 potvrđena su ista 14 ID-a, svaki u pripadajućoj grupi. Dvije grupe omogućavaju čitanje jedne cijele datoteke i na hostu bez djelimičnog učitavanja. Fajl za feedback ima jedan uslovni ulaz. Kriteriji isporuke i metod dokaza dostupni su nezavisno od QA paketa.

Ovo su misaone putanje za provjeru strukture. Stvarna aktivacija, izbor referenci, broj tokena, keširanje, kvalitet predviđanja i prihvatljivost dizajna imaju status `NOT TESTED`. Po instalaciji u podržanom Codex CLI/IDE okruženju dokumentovan primjer poziva je `$web-professional-standards` uz stvarni zahtjev. [Osnova formata i poziva](environment-audit.md)
