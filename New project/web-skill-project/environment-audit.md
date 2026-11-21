# P0 · Audit okruženja

**Marker A-20261120 / 20.11.2026.** Ciljno okruženje za izradu je Codex Desktop na Windowsu, sa PowerShellom 5.1.19041.6456. Radni korijen i S/Q su zapisani u [statusu](PROJECT_STATUS.md). Svih 23 ulazna SHA-256 otiska iz V3 manifesta ponovo su upoređena s fajlovima na disku. Nisu zatečeni radni izlazi A.

| Pitanje | Radnja i rezultat | Posljedica |
|---|---|---|
| Može li se provjeriti izvor? | VERIFIED. Pretraga je vratila službene OpenAI dokumente. Odvojena radnja otvaranja vratila je sadržaj specifikacije i dokumentacije ciljane platforme. | P1 može voditi dokazni trag po tvrdnji. Mogućnost pretrage sama ne potvrđuje tvrdnju. |
| Lokalni runtime za P4 | VERIFIED. PowerShellov Get-Command za node, npm, pnpm, yarn, deno i bun nije našao izvršni fajl na PATH-u. U provjerenim uobičajenim lokacijama za Node nije nađen Node CLI. | Instalacija i reproducibilno pokretanje budućeg runnera ostaju u B. Dostupan je odvojen upravljani Node REPL. U njemu je opažen konstruktor `vm.SourceTextModule` za statičko parsiranje ES modula bez izvođenja. |
| Trajnost | U okviru P0 zatvara se i ponovo čita ovaj marker. Ponovni pristup u drugoj sesiji ostaje UNCONFIRMED. | Za nastavak provjeriti disk i stvarne izlaze. |
| Registracija i aktivacija | NOT TESTED. Projektni izlaz je prenosivi direktorij izvan lokacija instaliranih skillova. | P3 provjerava strukturu, a P7 tek provjerava stvarno otkrivanje i ponašanje. |

## Pravila formata i upotrebe

SOURCED, pristupljeno 20.11.2026. Format koristi direktorij s istim imenom kao `name`, ulazni `SKILL.md` s YAML poljima `name` i `description`, opcionalne resurse i direktne relativne veze. Metapodaci su dostupni pri izboru, a tijelo pri aktivaciji. P3 piše kompaktan samostalan skill, bez posebne UI konfiguracije ili zavisnosti od drugih skillova. [Agent Skills, Specification](https://agentskills.io/specification)

SOURCED, pristupljeno 20.11.2026. Dokumentacija navodi projektno otkrivanje iz `.agents/skills/`, eksplicitan izbor u ChatGPT-u preko `@` i poziv u Codex CLI/IDE preko `$` ili selektora skillova. Primjer poslije lokalnog postavljanja je `$web-professional-standards` uz konkretan web zadatak. Platforma može koristiti opis za implicitni izbor. Plugin je zaseban način distribucije. Ovaj korak ne pretpostavlja da je paket instaliran ili da svaki Work klijent prima ZIP na isti način. [OpenAI, Build skills](https://learn.chatgpt.com/docs/build-skills)

INFERRED. Naziv i kratak opis trebaju razlikovati izmjenu sajta od pitanja o sintaksi. Učitavanje nepovezane dokumentacije povećava ulazni kontekst. O stvarnim tokenima i izboru budućeg agenta zaključak još nije moguć. [OpenAI, Rethinking skills and prompts](https://developers.openai.com/blog/rethinking-skills-and-prompts-for-gpt-6-astra)
