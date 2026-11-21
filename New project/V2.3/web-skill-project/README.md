# web-professional-standards · V2.3 (adaptivni skill, automatska Etapa A)

**Ovaj ZIP je kompletan paket instrukcija, ne gotov AI skill.** V2.3 dodatno uklanja nedorečene reference i uvodi kratki, sigurni **on-demand** postupak poboljšanja iz stvarnih grešaka; ne uvodi novu fazu ni automatsku modifikaciju skilla. **Jedna naredba pokreće cijelu Etapu A P0–P4 i zaustavlja se prije Etape B.** P0 ne pregledava postojeće korisnikove web skillove; novi skill je samostalan.

## Kako koristiti

1. Prenesi cijeli `web-skill-project/` u Work (ili okruženje koje stvarno može čitati/pisati fajlove).
2. Pošalji sadržaj `PROMPT_ZA_ASTRU.md`. Time daješ dozvolu za **cijelu Etapu A**, ne samo P0.
3. Astra čita samo potrebne fazne instrukcije i ulaze, istražuje temeljito, piše stvarne rezultate i ažurira **jedan** `PROJECT_STATUS.md` prije svake sljedeće faze. **Ne čeka novu poruku između faza.** Ako sesija bude prekinuta, ponovno `nastavi` koristi samo stvarno sačuvane fajlove i preostale zadatke; trajnost nije zagarantovana.
4. Nakon P4 Astra dostavlja finalni paket skilla, QA pripremu, status i spisak neprovjerenog pa **staje**. Demo sajtovi, opsežno QA testiranje i evaluacija pripadaju **Etapi B**, koja se pokreće samo novim izričitim zahtjevom.

## Sadržaj paketa

- `MASTER.md`: jedina glavna pravila izvršenja, faznog redoslijeda, statusa i hard stopa.
- `specs/skill-spec.md` i `specs/qa-spec.md`: početni zahtjevi (uz kontrolisane P1G delte).
- `phases/P0...P4`: jedanaest faznih promptova (P0; P1A–P1G; P2; P3; P4), **nisu izvršeni**.
- `phases/stage-B/README.md`: plan odgođenog testiranja P5–P8.
- `PROMPT_ZA_ASTRU.md`: početna poruka; `PROMPT_ZA_CLAUDE_REVIEW.md`: nezavisna revizija.
- `PROJECT_STATUS_TEMPLATE.md`: jedini predložak statusa.
- `REQUIREMENTS_TRACEABILITY.md` i `AUDIT_LESSONS.md`: mapa zahtjeva i prethodne naučene lekcije.
- `VALIDATION_REPORT_V2_3.md` i `MANIFEST_SHA256.txt`: provjera **strukture instrukcija**, ne rada budućeg skilla.

Finalni skill nastaje u zasebnom `web-professional-standards/` na putanji potvrđenoj u statusu; istraživački `research/` se ne kopira u njega. Bez nepotrebnih dodatnih procesnih fajlova. Ništa ne garantuje kompatibilnost ili funkcionalnost prije stvarne implementacije i Etape B.
