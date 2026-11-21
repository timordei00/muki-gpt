# Početna poruka za ChatGPT Work / Astru — V2.3

Prilažem kompletni **V2.3 paket instrukcija** za izradu AI skilla `web-professional-standards`. Ako možeš raditi s ZIP-om, raspakuj `web-skill-project/` u trajni projektni folder bez prepisivanja postojećih korisničkih podataka. Pročitaj `README.md`, `MASTER.md` i `PROJECT_STATUS_TEMPLATE.md`; ako pristup nije moguć, ne tvrdi da si ih pročitao.

**POKRENI ETAPU A.** Izvrši cijelu Etapu A **automatski i redom: P0, P1A–P1G, P2, P3 i P4**. **Nemoj stati niti tražiti moje `nastavi` nakon svake faze.** Prije prelaska u sljedeću fazu sačuvaj stvarne izlazne fajlove i kratko ažuriraj `PROJECT_STATUS.md`. Za duga istraživanja upisuj izvore i zaključke u postojeće fazne bilješke kako rad može biti nastavljen poslije eventualnog prekida, bez dodatnih checkpoint ZIP-ova ili nepotrebnih statusnih procedura. Ako stvarni blokator spriječi napredak, dokumentuj ga i stani; ne izmišljaj da je dovršeno.

**P0 ne treba tražiti, pregledati niti inventarisati moje ranije web skillove.** Novi skill mora biti samostalan i obuhvatiti relevantne oblasti bez zavisnosti od njih.

**Temeljito istraživanje u P1 mi je najvažnije.** Nauči metodu koja samostalno pronalazi nove uzroke, kombinacije uslova i projektno-specifične rizike **prije pisanja koda i prije čitanja kataloga** — ne samo reprodukciju liste poznatih grešaka. Koristi stvarno otvorene pouzdane izvore, suprotne dokaze i jasne izuzetke; ne izmišljaj rezultate.

**Ne ograničavaj se slijepo na predložene metode:** zadrži stroge ciljeve i P0/P1 minimum, ali istraživanjem opravdano poboljšaj početne hipoteze preko P1G. Gotovi skill optimizuj za **mali token-trošak pri svakodnevnom korištenju**, s učitavanjem referenci samo po potrebi. Ugradi **mali protokol napredovanja iz novih grešaka i korisničkog feedbacka**: sanitizovan kandidat izvan skilla, generalizacija uzroka, odobrena verzionisana promjena reference i ciljana regresijska provjera — ne automatsko mijenjanje modela ili skilla i ne dodatan korak pri svakoj uspješnoj izradi.

U Etapi A istraži, izradi skill i pripremi QA kod/upute. **Ne pokreći opsežno testiranje, demo sajtove, Lighthouse mjerenja, nezavisne evaluacije ni A/B.** P4 smije samo dozvoljenu minimalnu sintaksnu/smoke provjeru.

**Stani tek kada završiš cijelu Etapu A (nakon P4), ili ako postoji stvarni blokator.** Na kraju navedi stvarne isporučene fajlove i status `IMPLEMENTED — VALIDATION PENDING` samo ako ključni izlazi stvarno postoje; inače `STAGE A INCOMPLETE (<faza>)` s razlozima. **Nikada ne započinji Etapu B bez moje nove, izričite naredbe `POKRENI ETAPU B`.**
