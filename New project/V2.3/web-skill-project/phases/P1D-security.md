# P1D — SIGURNOST PREMA TIPU POSLOVNE STRANICE


**Cilj:** Odrediti stvarne sigurnosne i privatnosne rizike te preventivne kontrole **po arhitekturi**, posebno za statičke sajtove, kontakt-forme i CMS. Izbjeći univerzalne checkliste koje navode rizike koji ne postoje ili daju lažno povjerenje.

**Ulaz:** `MASTER.md`, `PROJECT_STATUS.md`, `research/notes-1A.md` (samo okvir threat modelinga), `specs/skill-spec.md` (critical floor i eskalacija), pregled stvarnog okruženja iz P0. Ne otvarati druge research fajlove bez zavisnosti.

**Zajednički format nalaza:** bitni rizici/preporuke imaju P0/P1/P2, LIGHT/STANDARD/FULL ili „svi režimi“, uvjet/N/A, preventivnu odluku, provjeru, dokaz i odredište P1G/P2/P3 — prema MASTER §7; ne pravi tabelu za trivijalno.

**Dubina:** **DEEP** za statički sajt, kontakt-formu i CMS/administraciju; **FOCUSED (kratki pregled granica)** za korisničke račune, plaćanja i složenu obradu osjetljivih podataka (granice opsega, eskalacija, platforma/specijalista). Za P0/P1 tvrdnje koristi aktuelne primarne izvore (OWASP, ASVS, MDN, službene hosting/platformske upute). Traži konkretne izuzetke i uvjete primjene.

## Matrica tipova [MUST]
1. **S0 — statička prezentacija bez forme:** šta je stvarna napadna površina (sadržaj, third-party, hosting, dependency, DOM XSS kada postoji JS), šta nije (npr. server-side SQLi bez baze), i zaštita domena/TLS/deploya.
2. **S1 — forma ili rezervacijski zahtjev:** obrada unosa, server/vanjski endpoint, spam, rate limit, bot zaštita, potvrda prijema, tok ličnih podataka, dostupnost servisa, injekcije i XSS u odgovoru/admin pregledima, CSRF gdje primjenjiv.
3. **S2 — CMS ili administracija:** autentifikacija, autorizacija, ažuriranja, dodaci, upload, pristup adminu, backup, revizija integracija, minimalne privilegije i oporavak.
4. **S3 — računi, plaćanja ili osjetljivi podaci:** samo prepoznaj prelazak granice jednostavnog sajt-projekta, posebne obaveze i zahtjeve za iskusnom ekipom/gotovom platformom; nemoj stvarati vodič za implementaciju platnog procesora.

## Rizici i prevencija [MUST]
- XSS (uključujući DOM, sadržaj CMS-a i prikaz podataka), izlazno kodiranje prema kontekstu, sanitizacija HTML-a, server-side validacija.
- SQL injection samo gdje postoje DB upiti; CSRF samo gdje postoji relevantna state-changing autentifikovana površina; CORS nije autentifikacija niti zamjena za autorizaciju.
- HTTPS/TLS, HSTS (preduvjeti i opasnosti pogrešne konfiguracije), CSP i security headeri prema stvarnom serviranju/hostingu; third-party script, supply-chain, tajni ključevi i konfiguracija.
- Shared hosting: Apache `.htaccess` i ograničenja, mogući drugi serveri/reverse proxy/CDN, gdje headeri stvarno završavaju; što se mora provjeriti nakon deploya.
- Forme na statičkom hostingu: treća usluga, serverless ili odgovarajući backend; na cPanel/PHP hostingu razmotri sigurnost i pouzdanost PHP `mail()` naspram pravilno podešenog SMTP/transakcijskog mail servisa (ne pretpostavljaj automatsku isporuku); gdje su tajne, gdje podaci odlaze, rate limit, privacy, spam i email deliverability; **nikad** skriveni privatni API ključ u JS-u.
- Stvarna potvrda forme: „endpoint prihvatio zahtjev“ nije jednako „e-mail dostavljen“; greška/time-out i višestruki klik ne smiju lažno prikazati uspjeh ili izgubiti unos.
- CMS: administratorski račun, sesije, CSRF kada važi, ažuriranje dodataka i tema, backup/restore, uploadi i kontrole pristupa; procijeni kada je managed usluga razumniji izbor.
- Privacy i lokalno: razlikuj podatke potrebne za formu od opcionalne analitike/Maps embedova; rizik nepotrebnog prikupljanja. Konkretne zakonske obaveze za BiH/GDPR verificira P1F, ne donosi pravni savjet.

## Pitanja za svaku kontrolu
`Tip sajta | prijetnja i aktivna površina | konkretni uslov | najmanja preventivna kontrola | kada ne važi | ručna/automatska provjera | posljedica pogrešne kontrole | P0/P1/P2 | dokaz`.

Za svaku važnu kontrolu aktivno traži ograničenja i neželjene posljedice. Npr. previše restriktivan CSP može pokvariti legitimne integracije; HSTS zahtijeva oprez; agresivna bot zaštita može blokirati stvarne korisnike. Tretiraj ih kao provjerljive kontekstualne odluke.

## Izvori [MUST]
Primarni izvori: OWASP Cheat Sheet Series / ASVS, MDN, dokumentacija hosting provajdera i form servisa gdje su konkretni. Navedi tačan otvoren URL i pristup; provjeri stvarnu verziju standarda, ne pogađaj je. Ako se izvor ne može otvoriti, ASSUMPTION. Istraživanje koristi ranije kvalitetne sinteze gdje su primjenjive, ali ne zamjenjuju primarni dokaz za P0 tvrdnju.

## Izlaz
`research/notes-1D.md`: arhitektonska matrica S0–S3, mali model tokova podataka/granica povjerenja, pravila za forme i CMS, kontrolni minimum za hosting, **signali da treba odabrati gotovu platformu ili uključiti specijalistu (predati P1G)**, uslovi eskalacije prema specijalisti, izvori i statusi dokaza, pitanja za pravnu provjeru u P1F, pravila i provjere za `references/security.md`, registar otvorenih rizika. Ažuriraj `PROJECT_STATUS.md`.

## Gotovo kada
Nisu pomiješani rizici statičkog sajta i aplikacije s bazom; forme imaju pošteno definisan uspjeh i prekid; tajne nisu u klijentskom kodu; svaka P0/P1 preporuka ima stvaran osnov ili jasno označen dokazni nedostatak; S3 ima jasnu granicu primjene.

## Ne radi
Ne implementiraj ili testiraj server, form servis, aplikaciju ili sigurnosne headere; ne izvodi pen-test; ne proglašavaj sajt „sigurnim“ niti zaključuj zakonsku usklađenost. Ne ulazi u detalje P1F zakona ili P4 alata.

## Na kraju
Sačuvaj obavezne rezultate i ažuriraj `PROJECT_STATUS.md`. Ako je aktivna `POKRENI ETAPU A`, **automatski nastavi na P1E** bez međustopa, dodatne korisničke poruke ili posebnog faznog izvještaja. Ako je korisnik tražio samo ovu imenovanu fazu, ovdje stani. Pri stvarnom blokatoru evidentiraj razlog i ne proglašavaj fazu završenom.
