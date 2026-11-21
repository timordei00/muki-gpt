# PRAĆENJE ZAHTJEVA — V2.3

Ova mapa govori **gdje je zahtjev definisan za buduću izvedbu**, ne da je istražen ili testiran. `MASTER.md` ostaje kratak; fazni fajlovi nose detalje.

| Izvorni zahtjev / ranije otkriven propust | Autoritativno mjesto | Status u V2 instrukcijama |
|---|---|---|
| Preventivno predviđanje prije koda, ne samo katalog | `specs/skill-spec.md` §7–8; P1A; P2; P3 | Pokriveno kao proces, učinak NOT TESTED |
| Rizik iz briefa, porijeklo samostalno/katalog/naknadno | skill-spec §7; P1A; P2 | Pokriveno, nezavisna evaluacija P7 |
| FMEA, pre-mortem, threat modeling, adversarial review, RCA, regresije | P1A | Istraživačka pitanja, nije istraženo |
| Odbacivanje preskupih/nekorisnih metoda | P1A §Obavezno | Pokriveno kao kriterij |
| Research reuse, primarni izvori, kritike i izuzeci | MASTER §5–6; P1A; P1G | Pokriveno kao pravilo, izvori nisu otvoreni |
| Oznake VERIFIED / SOURCED / INFERRED / ASSUMPTION / NOT TESTED | MASTER §5 | Pokriveno; razlika prema testnim statusima |
| P0/P1/P2, kritična pristupačnost kao P0 | MASTER §7; skill-spec §5; P1E | Pokriveno |
| LIGHT/STANDARD/FULL s critical floor | skill-spec §3, §5, §8; P3 | Pokriveno |
| Najviše pet važnih pitanja, ostalo označiti | skill-spec §8; P1A; P1C; P3 | Pokriveno |
| Fluidni Grid/Flex, intrinsic, minmax, clamp i container queries | P1B | Pokriveno kao istraživački zadatak |
| Root-cause overflow, bez globalnog skrivanja simptoma | P1B; P2; qa-spec | Pokriveno |
| `min-width:0`, logical properties, `overflow-wrap`, zoom i neobični viewporti | P1B; qa-spec; P4 | Pokriveno |
| Sticky header, sidra, `scroll-padding-top`, meniji/fokus | P1B; P1E; P4 | Pokriveno |
| `100vh` vs `dvh`, iOS input autozoom, mobile height | P1B | Pokriveno, kontekst se tek verificira |
| Jedinstveni identitet bez generičkog AI šablona | skill-spec §6; P1C; P3 | Pokriveno kao pozitivni proces |
| Tipografija/boje/spacing/60-30-10 kao heuristika | P1C; skill-spec §6 | Pokriveno |
| Animacije, reduced motion, hover/focus/touch, slabiji uređaji | P1C; P1E; P4 | Pokriveno |
| Čist DRY/KISS/modularni frontend, bez overengineeringa | P1B §D; P1F; P3 | Pokriveno |
| Sigurnost statička / forma / CMS / napredni backend | P1D; skill-spec §3 | Pokriveno kao kontekstualno istraživanje |
| XSS/CSRF/SQLi, autentifikacija, autorizacija, sesije | P1D | Pokriveno uz uslove primjene |
| Security headers/CSP/HTTPS/HSTS/CORS/secret management | P1D; P1F; qa-spec | Pokriveno |
| Forms na static/shared hostingu, spam i gdje podaci idu | P1D; P1F; P4 | Pokriveno |
| SPF/DKIM/SMTP, realna e-mail dostava, DNS i handover | P1F; qa-spec | Instrukcija zadržana; stvarna dostava NOT TESTED |
| Endpoint prihvatio != email isporučen | skill-spec §10; P1D; P4 | Pokriveno |
| Performanse LCP, INP, CLS, hero lazy, responsive slike i fontovi | P1E; qa-spec | Pokriveno |
| Accessibility WCAG 2.2 AA; automatika nije potpuna potvrda | P1E; qa-spec; P4 | Pokriveno |
| Fokus nije zaklonjen, target size, menu pri zoomu | P1B; P1E; P4; qa-spec | Instrukcija precizirana; brojevi standarda tek za verifikaciju |
| SEO Google Search Central, structured data, lokalno, multi-jezik | P1E; P1F | Pokriveno |
| HTML/CSS/JS, Astro, React, Next, WordPress, no-code | P1F | Pokriveno |
| BiH hosting cPanel/.htaccess, font č ć đ š ž, Maps, Viber/WhatsApp | P1F | Pokriveno, pravne tvrdnje tek verificirati |
| Prava korištenja, recenzije, certifikati i placeholderi | skill-spec §11; P1C; P3; qa-spec | Pokriveno, produkcijski placeholder je blokator |
| Tema vlasništva među P1B–P1F, prioritet/režim po riziku | MASTER §7; P1G | Razgraničeno, izbjegnuta nepotrebna dupliciranja |
| Ko poslije uređuje sadržaj i kako regresije izbjeći | skill-spec §11; P1F; P3 | Pokriveno |
| P0 bez pretrage postojećih web skillova; novi skill samostalan | MASTER §1, §4; P0; P1B/P1C; P3; skill-spec §9 | P0 bez inventara; samostalna istraživanja i reference |
| Aktivacija skilla i ograničenja descriptiona stvarno potvrđeni | P0; P3; MASTER §10 | Planirano SOURCED, runtime VERIFIED tek Etapa B |
| Jedna QA komanda, Playwright/axe, minimalne zavisnosti | qa-spec; P1E; P4 | Pokriveno kao buduća implementacija |
| Konzola/linkovi/form/mobilni meni/overflow/placeholder | qa-spec; P4 | Pokriveno |
| Neuobičajene širine 347,503,823 + standardne | qa-spec; P4 | Pokriveno, testiranje odgođeno |
| Negativna kontrola za sam QA tester | qa-spec; P4; stage-B README | Pokriveno, testiranje odgođeno |
| Skriveni testovi izvan pristupa AI-a i prediction freeze u P6 | stage-B README; qa-spec; skill-spec §8 | Pokriveno, ne kreirati skriveni set sada |
| A/B opcionalan i nezavisan, ne lažno simuliran | stage-B README | Pokriveno, odgođeno |
| Praćenje statusa kroz sesije, bez ponavljanja istraživanja | MASTER §4, jedini status template; README | Pokriveno |
| Automatski nastavak P0–P4 i hard stop prije B | MASTER §2–4, §9; PROMPT_ZA_ASTRU; status template | Sačuvaj izlaze i status po fazi bez međustopova; zaustavi se poslije P4 ili pri blokatoru |
| Claude samo kratko revidira, bez nove izrade | PROMPT_ZA_CLAUDE_REVIEW | Pokriveno |

| Naknadno učenje iz potvrđenih novih grešaka bez samostalnog upisivanja u model | `specs/skill-spec.md` §12.1; P1A; P1G; P3; Stage B P8 | On-demand protokol instrukcija; stvarna upotreba NOT TESTED |
| Minimalna potrošnja tokena u gotovom skillu, sloboda Astre da poboljša početne metode | MASTER §1 i §6; skill-spec §9; P1G; P3; Stage B P7 | Progressive disclosure; mjerenje troška odgođeno |
| Bez fantomskih referenci, stabilni QA linkovi i jedna QA uputa | skill-spec §9; P3; P4; qa-spec | Mapa i P4 putanje usklađene u instrukcijama |

## Granice i nepoznanice
- Ne mogu se potvrditi stvarni Work alati, skill registracija ili kompatibilne verzije alata bez pokretanja P0/P4.
- Službeni web izvori iz istraživačkih zadataka nisu u ovom koraku pregledani; popisi izvora su **smjernice za buduću provjeru**.
- Ne može se tvrditi da je skill gotov, niti da radi ili da predviđanje smanjuje broj bugova; za to su potrebni P3 i kasnija Etapa B.

## Dodatne lekcije objedinjene u V2
- Naredba **`POKRENI ETAPU A` automatski prolazi P0–P4** nakon spremanja izlaza svake faze, bez korisnikove potvrde između faza. `nastavi` je samo za stvarni prekid; **Etapa B ostaje zaključana** do zasebne naredbe.
- `research/notes.md` je jedini registar usvojenih P1G delti; P3 i P4 eksplicitno čitaju `ACCEPTED` odluke, ne `PROPOSED`.
- Finalni skill **nema research folder**; P3 mapa `notes-1X → references/*.md` i relativne putanje su eksplicitne.
- Režimi za račune/plaćanja/osjetljive podatke/kompleksni backend su usklađeni u `skill-spec.md` §3/3.1, bez implicitnog spuštanja sigurnosnog minimuma.
- LIGHT kratki zapis rizika, FULL/STANDARD po potrebi; P1B/P1C reuse P1A ilustrativnih briefova; P6/P7 koriste nove nezavisne briefove.
- Engleski staging katalog i finalne reference; bosanske istraživačke bilješke.
- Jedini status predložak i jedina stvarna finalna putanja u `PROJECT_STATUS.md`.
