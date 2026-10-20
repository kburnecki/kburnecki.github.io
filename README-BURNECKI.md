# Strona Krzysztofa Burneckiego

Projekt zawiera spersonalizowany, rzeczywisty starter al-folio (Jekyll) oraz niezależny, statyczny podgląd w `dist/`. Obie wersje korzystają z tych samych treści, zdjęcia i CV. Podgląd nie jest wynikiem kompilacji Jekylla; ma własną prostą oprawę graficzną inspirowaną stroną Michała Balcerka. Nie dodano nadpisań `_layouts`, `_includes` ani `_sass`.

## Edycja i uruchomienie al-folio

Edytuj `_pages/*.md`, `_config.yml`, `_data/socials.yml` i `assets/`. Pliki `content/` przechowują treść podglądu. Przy zmianie treści należy aktualizować również podgląd; nie jest on automatycznie generowany przez Jekylla.

1. Zainstaluj Ruby 3.3, Bundler, Node.js i ImageMagick.
2. Uruchom `bundle install`, następnie `npm ci`.
3. Uruchom `bundle exec jekyll serve`.
4. Otwórz adres wypisany przez Jekylla.

## GitHub Pages

Utwórz własne repozytorium, np. `<login>.github.io`, i prześlij do niego zawartość projektu. Nie wysyłaj zmian do repozytorium alshedivat/al-folio. Ustaw `url` w `_config.yml` na docelowy adres i `baseurl: ""` dla strony głównej konta (lub `/<nazwa-repo>` dla strony projektu). Włącz GitHub Actions; dołączony upstream workflow `deploy.yml` kompiluje Jekylla i wysyła `_site` na gałąź `gh-pages`. W Settings → Pages wybierz publikację z gałęzi `gh-pages`, folder `/`. Nie utworzono repozytorium GitHub ani nie zmieniono obecnej strony na serwerze PWr.

## Podgląd przenośny

Uruchom `python -m http.server 8080 --directory dist`, a następnie otwórz `http://localhost:8080`. Podgląd ma siedem stron, filtr 89 publikacji, nawigację mobilną i zapamiętywany jasny/ciemny motyw. Wersja al-folio używa natywnego przełącznika motywu i wyszukiwarki szablonu.

## Źródła i weryfikacja

Dane pobrano 20 października 2026 z https://prac.im.pwr.edu.pl/~burnecki/ oraz podstron publications.html, grants.html, teaching.html, contact.html, cooperation.html i conferences.html. Zachowano oryginalne zdjęcie i CV ze stycznia 2026. Godziny konsultacji pochodzą z dotychczasowej strony i wymagają potwierdzenia aktualności. Nie dodano niezweryfikowanych identyfikatorów ORCID/Scholar ani nowych osiągnięć. Usunięto odsyłacze do nieistniejącego export2026_bib.html; pozostały oryginalne odsyłacze DOI i wydawców.

Lokalne sprawdzenie plików statycznych obejmuje wszystkie odnośniki wewnętrzne, obecność CV i zdjęcia oraz liczbę publikacji. Kompilacji Jekylla i audytu al-folio nie uruchomiono: w środowisku nie było Ruby. Uruchom je przed finalnym wdrożeniem na GitHub Pages. Podgląd online jest prywatny w Sites.
