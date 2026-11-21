# web-professional-standards · V3

Ovo je paket za izradu budućeg AI skilla za profesionalne web-stranice. Verzija V3 završava reviziju dokumentacije. Obje etape čekaju zasebne korisničke naredbe.

## Odakle krenuti

- Za odluku o pokretanju pročitaj [izvještaj o V3](VALIDATION_REPORT_V3.md). U njemu su ključni nalazi, misaoni prolazi, obavljene provjere i preostale nepoznanice.
- Za pokretanje cijele Etape A otvori projekat s ovim folderom i pošalji [početni prompt](PROMPT_ZA_ASTRU.md) kao novu poruku. Faze i njihovi izlazi nalaze se u [MASTER-u](MASTER.md).
- Za pregled bez izvršavanja koristi [prompt za reviziju](PROMPT_ZA_CLAUDE_REVIEW.md). [Pregled po fajlovima](AUDIT_LESSONS.md) objašnjava promjene iz V2.3, a [mapa zahtjeva](REQUIREMENTS_TRACEABILITY.md) pokazuje ko svaki zahtjev razrađuje i kako će se provjeriti.

[Specifikacija skilla](specs/skill-spec.md) određuje ponašanje pri radu na sajtu. [QA specifikacija](specs/qa-spec.md) određuje šta rezultat pojedine provjere može potvrditi. [Predložak statusa](PROJECT_STATUS_TEMPLATE.md) pretvara se u radni status tek pri pokretanju. [Plan Etape B](phases/stage-B/README.md) služi kasnijoj evaluaciji.

Distribucija ima jedan korijen `web-skill-project/`. [Manifest](MANIFEST_SHA256.txt) navodi SHA-256 svih ostalih fajlova ove verzije, s putanjama relativnim na taj korijen. Sačuvaj izvornu distribuciju za poređenje. Rezultati budućeg rada nastaju unutar radne kopije.
